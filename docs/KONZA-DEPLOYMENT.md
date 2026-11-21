# Konza Cloud / Government Hosting — Optional Alternative

## What “Konza” means for hosting

Konza Technopolis is a Kenyan smart-city and innovation-economy development overseen by Konza Technopolis Development Authority. It is not simply a self-service deployment button like Render. Its data-centre cloud service is called **Konza Cloud**. Konza’s public site lists cloud virtual machines, colocation, web hosting, backup as a service, SaaS, virtual desktops and video-conferencing infrastructure.

Render is the selected ongoing host for the current static project. The original BRS specified government infrastructure, so use this Konza alternative only if your instructor or institution requires it. This folder provides a container-ready static package, but no Konza tenant, service order, endpoint, network rules, DNS zone, certificate, identity provider or deployment authorization was supplied.

Official information:

- [Konza Technopolis](https://konza.go.ke/)
- [Konza Cloud services](https://konza.go.ke/konza-cloud/)
- [Konza Cloud product catalogue](https://konza.go.ke/wp-content/uploads/2025/02/Konza-Cloud-Product-Catalogue-1909.pdf)
- [Konza contact information](https://konza.go.ke/contact-us/)

## Provided package

- `Dockerfile`: builds an nginx container for the static app and corrected design documents.
- `nginx.conf`: serves the static site and adds baseline response security headers.
- `render.yaml`: configures the selected Render Static Site.

## Recommended onboarding path

1. **Start with the institution that owns the system.** Ask the NIA / State Department ICT lead—which the project documents currently identify inconsistently—whether government hosting is mandatory for this project.
2. **Contact Konza Cloud with the sponsor.** The published contact is `cloud@konza.go.ke` or `+254 700 515 151`. Ask about onboarding, eligibility, procurement, environment availability, support and the current service catalogue/pricing.
3. **Choose a service with Konza, not by assumption.** Ask whether Konza Cloud Web Hosting can serve this static site and custom domain. If the required deployment is this Docker/nginx package, ask whether a Konza Virtual Machine or another managed service supports the required container runtime, image registry and ingress. The public service page does not specify those implementation details.
4. **Agree the operating model.** Confirm who owns the tenant, source repository, deployment approvals, DNS/TLS, firewall rules, secrets, log access, backup/recovery and incident response.
5. **Complete production readiness first.** This current app is a static demo, not a production information system. Do not load real staff accounts, personal information or official records until the authentication, persistent database, report workflow, retention, access controls and data-protection review are implemented and approved.
6. **Build and hand off through the approved path.** Once Konza confirms the target service, adapt the container/build pipeline to its instructions, deploy to a test environment, verify health and security, then obtain formal approval before promoting to production.

### Message you can send to Konza Cloud

> **Subject:** Hosting enquiry — NISIP-MIS government information-system project  
>  
> We are developing NISIP-MIS for [sponsoring institution / department]. The supplied requirements identify Konza/government infrastructure as the production hosting target. The current prototype is a static HTML/CSS/JavaScript site packaged as an nginx Docker container; it is not production-ready and currently has no database or live authentication.  
>  
> Could you advise the approved onboarding/procurement route and whether Konza Cloud Web Hosting or a Virtual Machine (or another service) is suitable? In particular, please confirm container-runtime support, environment/network options, TLS and custom-domain process, identity/database integration expectations, backups, monitoring/support, security review requirements, pricing and the technical documents you need from our sponsoring ICT team.  
>  
> Sponsoring ICT contact: [name / official contact]. Project technical contact: [name / official contact].

## Build and local container validation

Run on an approved Windows or Linux build host with Docker or an equivalent OCI container runtime:

```powershell
docker build -t nisip-mis:demo .
docker run --name nisip-mis-demo --rm -p 8080:80 nisip-mis:demo
```

Open `http://localhost:8080`.

The container currently serves demonstration records and static files only. It does not provide authentication, a database, audit storage or report delivery.

## Before government production deployment

The accountable institution must approve and supply:

1. The organization accountable for NISIP-MIS and the map/role between NIA and the State Department for Irrigation.
2. The Konza environment, network zone, container registry and deployment account.
3. An approved hostname/DNS record and government-trusted TLS certificate.
4. An approved identity provider, staff account lifecycle and role matrix.
5. A persistent database and protected document store, with backup, restoration and retention controls.
6. Data classifications and lawful processing controls under the Kenya Data Protection Act.
7. Interface agreements and security reviews for report delivery, eCitizen, agency, county and ministry services.
8. Health checks, logs, monitoring, incident response, maintenance notice and support procedures.
9. Load tests against the proposed capacity targets and a measured availability service level.
10. Authoritative and approved scheme, project, water-resource and M&E data.

## After Konza confirms the service

1. Push this repository to the institution's approved source-control system.
2. Configure a build pipeline to run an OCI/container build.
3. Store the image in the registry approved for the selected Konza service, if a container registry is part of the service.
4. Deploy the immutable image to the approved compute platform.
5. Terminate TLS at the institution's approved ingress/load balancer.
6. Restrict management and service access to approved networks.
7. Verify `/health`, static routes, document downloads and security headers.
8. Promote only after application security, data protection and operations review.

Do not use `0.0.0.0`, public admin exposure or local demo sign-in as substitutes for the institution's security architecture.

## Render choice

Render is the selected host for the current static project. If the original government-hosting requirement is mandatory, obtain approval for Render or use the institution-approved Konza/government environment instead.
