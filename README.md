# NISIP-MIS demonstration

This folder contains a static front-end demonstration and corrected design documents for the National Irrigation Sector Investment Plan Management Information System (NISIP-MIS).

## Run locally on Windows

Open PowerShell in this folder and run:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open <http://127.0.0.1:8000>. Press `Ctrl+C` to stop the server. No package installation or build step is required.

## Render deployment (selected host for this project)

`render.yaml` defines a Render Static Site that publishes the repository root directly, so it does not rely on a hand-maintained list of files to copy. Connect the GitHub repository in Render and create a Static Site (or use the Blueprint configuration). The folder itself has no Git remote or Render credentials, so it is configured for deployment but has not been published.

Render is the selected ongoing host for this static project site. It can remain online and redeploy from GitHub when you push updates, subject to your Render account and service terms. This app still contains sample data and has no real authentication, backend or database, so do not use it to collect sensitive or official information.

The supplied original BRS specified government infrastructure (including Konza) for production. Choosing Render changes that original hosting requirement. If your instructor or sponsoring institution requires Konza/government hosting, obtain approval or use that host instead.

The Docker/nginx package and `docs/KONZA-DEPLOYMENT.md` remain as an alternative if Konza is later required.

## Demonstration limitations

- `data.js` and `calculator.js` contain illustrative records, prices, yields and costs—not official figures.
- The map uses Leaflet and third-party map tiles; internet access is required.
- Staff sign-in is intentionally disconnected and never accepts demo credentials or creates a session.
- The report-request form shows a local preview only; it does not transmit or store a request.
- There is no backend, persistent database, staff workspace, review queue, real notification, official data feed, audit log or service monitoring.
- Do not enter real credentials, personal information or sensitive/official records.

## Design and corrected source copies

- [Integrated system design in the app](integrated-design.html)
- [Process design](docs/PROCESS-DESIGN.md)
- [System architecture](docs/SYSTEM-ARCHITECTURE.md)
- [Business requirements](docs/BUSINESS-REQUIREMENTS.md)
- [Integration design](docs/INTEGRATION-DESIGN.md)

The corrected copies reconcile the original process diagram, layered architecture and BRS without treating proposed APIs, performance targets or illustrative sample values as deployed facts.
