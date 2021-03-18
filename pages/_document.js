import Document, { Html, Main, Head, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="">
          <Head>
              <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
