# NISIP-MIS Process Design — corrected copy

**Status:** Revised design copy, aligned to the supplied process diagram, system architecture, business requirements and integration-design assignment.  
**System name:** National Irrigation Sector Investment Plan Management Information System (NISIP-MIS).

## 1. Purpose

NISIP-MIS is intended to improve how irrigation-sector information is collected, checked, shared and used for planning and oversight. The process model connects field/project updates and public service requests to governed records, reports and management decisions.

The supplied process diagram shows three logical data stores: project information, financial records and scheme performance. The source requirements also identify water-resource and monitoring-and-evaluation (M&E) information. The detailed production data model and its system of record remain to be approved.

## 2. People and responsibilities

| Participant | Responsibility in the proposed process |
|---|---|
| Field / project technical officer | Submits progress, scheme and field observations for assigned work. |
| Department reviewer / M&E officer | Checks completeness, provenance and consistency; returns or approves submissions. |
| System administrator | Manages approved user roles and configuration; does not approve their own business data by default. |
| Department leadership | Reviews dashboards and reports and makes planning or oversight decisions. |
| Public, investors and development partners | Browse approved public information and may request reports or make investment enquiries. |
| County, ministry and audit stakeholders | Receive or review authorized information through agreed coordination and reporting processes. |

The source documents alternate between “National Irrigation Authority (NIA)” and “State Department for Irrigation” as system owner and operator. The accountable institution, approver roles and delegation between the two must be confirmed before production access is configured. This design therefore uses “department reviewer” and “institutional owner” where authority is not established.

## 3. Core process flows

### 3.1 Field and project data submission

1. An assigned officer authenticates and selects an authorized scheme or project.
2. The officer enters the update, observation date, source and relevant location. The system records the submitting identity and server receipt time.
3. Validation checks required fields, permitted status transitions, numeric ranges and the officer’s authorization. A rejected record is returned with actionable errors; it is not silently accepted.
4. A valid submission is saved as pending review or accepted according to an approved workflow. The system records an audit event.
5. A reviewer checks the submission against its source and either returns it for correction or approves it.
6. An approved update becomes part of the scheme/project history and the current reporting view. Dashboards reflect the last approved update and its date—not live sensor telemetry.

**Events:** submission received, validation failed/passed, submission returned, record approved, role changed.  
**Data:** scheme/project reference, status/progress, source and reporting period, actor, timestamps, location when relevant, review state and audit history.  
**Exceptions:** duplicate, incomplete or unauthorized entries are rejected or flagged; conflicting values are escalated for review.

### 3.2 Public catalogue and map

1. A visitor opens the public catalogue or map without a staff account.
2. The application retrieves only records approved for public release.
3. Search, filters and map layers narrow the displayed set by the approved fields (for example scheme type, county and status).
4. The visitor opens a detail view; the application records operational access metrics without collecting unnecessary personal information.

Public visibility is a release decision. Personal, security-sensitive, commercially restricted or otherwise protected data must not be exposed merely because it exists in the internal record.

### 3.3 Report request and controlled release

1. A requester supplies contact details, the report requested and a purpose.
2. The system validates the submission, creates a unique reference and acknowledges receipt.
3. An authorized staff member assesses the request, checks disclosure rules and either approves, clarifies or declines it.
4. An approved report is prepared or selected, checked for disclosure, and delivered through an access-controlled channel.
5. The request status and delivery event are recorded; a notification is sent only after an approved messaging service is configured.

The supplied requirements describe automated acknowledgement, tracking and delivery. These are intended capabilities, not capabilities of the current demonstration. The current report form only previews data in the browser; it does not transmit or retain it.

### 3.4 Investment scenario and enquiry

1. A visitor chooses an indicative pathway and enters scenario assumptions.
2. The calculator returns estimated costs and financial measures with the assumptions visible.
3. If an enquiry workflow is approved, the visitor separately submits contact details and an expression of interest.
4. Authorized investment staff review and follow up outside the calculator.

The calculator is not a payment system, investment offer, financial approval or guarantee of returns. Published crop prices, costs and yields must be sourced, dated and approved before operational use. The current values are illustrative.

### 3.5 Reporting and decision support

Approved project, scheme, water-resource and M&E records feed reports and dashboards. Authorized leadership and government stakeholders use those outputs for planning, monitoring and accountability. A financial view is limited to authorized, sourced records; it does not initiate transfers or replace IFMIS or another financial system.

## 4. Controls and service expectations

- Enforce least privilege and role checks at every staff write and restricted read.
- Validate inputs server-side, preserve the original source and audit material state changes.
- Protect personal information through purpose limitation, minimization, retention rules and approved disclosure.
- Use encrypted transport; define backup, restoration and incident procedures before production.
- Monitor availability, request failures, latency, validation failures and queue age without logging passwords or unnecessary personal data.
- Treat 5,000 concurrent users, response under three seconds, report requests under five seconds and 99.5% availability as proposed BRS targets requiring capacity tests and service-owner approval.

Automated IoT/sensor ingestion, financial transaction processing, HR and IFMIS workflows are outside the supplied scope. Email, eCitizen and agency interfaces are not assumed active.

## 5. Demonstration boundary

The folder application demonstrates catalogue, project, map and calculator views and a report-request preview. It has no application API, persistent database, staff authentication, review queue, real notifications, audit log or official records. Render is selected as the ongoing host for this static project site; that deployment choice does not make the prototype an operational government information system.

