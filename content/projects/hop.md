---
title: hop
tagline: A small Go link shortener and everything needed to run it on Kubernetes, with SLOs, alerts and runbooks.
kind: app
platform: Kubernetes
year: 2026
date: '2026-11-21'
status: Open source
order: 3.6
accent: '#2dd4bf'
terminal:
  - $ make e2e
  - 'ok: 200 hits counted in Postgres'
  - 'ok: no hop alerts firing'
  - 'ok: all 600 requests during the rollout were redirects'
  - == all checks passed
stack: [Go, Postgres, Helm, Terraform, Prometheus, Grafana]
links:
  - label: View on GitHub
    href: https://github.com/bernisnukic/hop
---

hop turns long URLs into short ones. The app is deliberately small, because the repository is about running it: Terraform builds the cluster and its add-ons, a Helm chart deploys the app with Postgres through the CloudNativePG operator, and Prometheus, Alertmanager and Grafana watch it against written service level objectives.

One command stands the whole stack up on a local three-node kind cluster and checks that it behaves as designed. The same check runs on GitHub after every push.

## What the end-to-end run proves

- Terraform creates the cluster, installs monitoring and the Postgres operator, and deploys hop
- `helm test` creates a link through the Service and follows the redirect
- Prometheus scrapes every pod and the SLO rules return the expected values, with no alert firing
- A rolling restart under load loses nothing: 600 requests sent during `kubectl rollout restart` all come back as redirects
- The NetworkPolicy holds: a pod outside the monitoring namespace cannot read the metrics

## Decisions worth knowing about

- **Shutdown drains first.** On SIGTERM the readiness check starts failing while the pod keeps serving, so it leaves the Service before it stops accepting connections.
- **Liveness and readiness check different things.** A database outage takes pods out of rotation instead of restarting them in a loop.
- **Migrations run in the app under a Postgres advisory lock,** so replicas starting together apply each one once.
- **The alerts are tested like code.** They use multiwindow burn rates: spending the error budget fast pages someone, spending it slowly opens a ticket, and promtool tests check both, along with the cases that must stay silent.
- **Least privilege by default:** a distroless image running as non-root with a read-only filesystem, no service account token, and egress limited to DNS and the app's own database.

The repository also has a DigitalOcean environment built from the same Terraform modules, the reasoning behind each objective, and a runbook for every alert.
