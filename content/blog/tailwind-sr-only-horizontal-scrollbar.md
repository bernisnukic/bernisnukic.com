---
title: "When Tailwind sr-only leaks and makes the page scroll sideways"
date: '2025-12-13'
description: 'How Tailwind sr-only inside a zero width table header can trigger a page horizontal scrollbar, and the one word fix.'
---

I hit a strange UI bug: a table could scroll sideways, which was fine, but the entire browser page could also scroll sideways, which was not.

After a bit of debugging, the element widening the page was not a giant div. It was the last table header cell, the one that only contains the word “Actions” for accessibility.

This was the code:

```jsx
<TableHeader className="w-0">
  <span className="sr-only">Actions</span>
</TableHeader>
```

Tailwind is a utility CSS framework. Instead of writing custom CSS for every component, you compose small classes like `w-0` and `sr-only`.

The `sr-only` class is meant to hide text visually while keeping it available to screen readers. Under the hood it uses CSS like `position: absolute` plus clipping, so the element takes up almost no visible space.

Tailwind `sr-only` expands roughly to the following CSS:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

The catch is that an absolutely positioned element is placed relative to a containing block. If none of its ancestors establish a positioning context, the browser falls back to the initial containing block. In practice that can mean the element is positioned relative to the page, not relative to the cell you thought it belonged to.

That is exactly what happened here. The hidden `<span>` was still being positioned, just out of view. Even though you cannot see it, it can still increase the document width.

Browsers decide whether to show a horizontal scrollbar by comparing two numbers:

`document.documentElement.clientWidth` is how wide the viewport is.

`document.documentElement.scrollWidth` is how wide the content is.

If `scrollWidth` is larger, the browser shows a horizontal scrollbar for the window.

## A fast reproduction

If you want to reproduce the bug on purpose, the smallest setup I found looks like this:

Use a table header cell with `w-0`

Place only `sr-only` text inside it

Do not make the header cell a positioning context

At that point, if the hidden text ends up positioned outside the viewport, the window can start scrolling sideways even though the table already has its own horizontal scroll.

## Why this only happened here

If you use `sr-only` all over the place, you might wonder why it caused trouble inside this table.

It was the combination of these details:

The header cell was intentionally made as small as possible with `w-0`

The only content inside that cell was `sr-only`, which is absolutely positioned and clipped

Because the header cell was not a positioning context, the browser did not treat it as the containing block for the hidden element

Those three together created a situation where the hidden text could end up outside the table and still count toward the overall document width.

## Finding the element that widens the page

When this happens, it can feel impossible to find the culprit because the extra width is off screen. This little script helped me locate it quickly.

Open DevTools, go to the Console tab, and run this:

```js
(() => {
  const viewportWidth = document.documentElement.clientWidth
  let best = { overflowPx: 0, el: null }

  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect()
    const overflowPx = Math.max(0, r.right - viewportWidth, -r.left)
    if (overflowPx > best.overflowPx) best = { overflowPx, el }
  }

  console.log('overflow(px):', best.overflowPx, best.el)

  if (best.el) {
    best.el.style.outline = '3px solid red'
    best.el.scrollIntoView({ block: 'center', inline: 'center' })
  }
})()
```

It scans every element on the page and looks for the one that sticks out past the visible viewport on the left or the right. Then it draws a red outline around that element and scrolls it into view. Refresh the page to remove the outline.

If it points at an element that looks too small to be the cause, try outlining its nearest table cell or container. Hidden elements are often clipped to tiny rectangles, even when their positioning affects layout.

The fix was a one word change:

```jsx
<TableHeader className="relative w-0">
  <span className="sr-only">Actions</span>
</TableHeader>
```

By adding `relative` to the header cell, the hidden element becomes positioned relative to that cell. It stays contained, the document width stays correct, and only the table uses horizontal scrolling.

## Alternative fixes

Adding `relative` is the smallest change and it keeps the accessible label in the markup. That is usually what I prefer.

Depending on your UI and accessibility setup, you also have other options:

Put the label on the control itself, for example `aria-label="Actions"` on the action button, and remove the `sr-only` text from the header

Use a visible header label and hide it only at narrow screen sizes, so you keep table semantics without relying on absolutely positioned hidden text

## Demo

The broken example auto outlines the actions header in red. The fixed example keeps the table scroll, but the page stops scrolling sideways.

## General rule

This is not a table only problem. Any absolutely positioned element that is clipped or visually hidden can still affect the document scroll width if it ends up positioned outside the containing block you expected. When you see unexpected horizontal scrolling, verify scroll width, find the element that sticks out, then make the intended container a positioning context with `relative`.
