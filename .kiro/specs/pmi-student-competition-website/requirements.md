# Requirements Document

## Introduction

This project involves creating a polished, production-ready website for a student team competing in the "PMI Singapore Chapter – 2025 Student Competition: The 10m x 10m Shop of Your Dreams". The website will serve as a comprehensive showcase of the team's project, including their solution, team information, project journey, and contact details. The site must meet high standards for performance, accessibility, and SEO while providing a professional presentation suitable for competition judges and stakeholders.

## Requirements

### Requirement 1

**User Story:** As a competition judge or stakeholder, I want to quickly understand the team's project and value proposition, so that I can evaluate their submission effectively.

#### Acceptance Criteria

1. WHEN a user visits the homepage THEN the system SHALL display a hero section with team name, one-line value proposition, and clear CTAs
2. WHEN a user views the homepage THEN the system SHALL present key project sections including "About the Project", "Our Team at a Glance", "Key Milestones", and "Why this idea"
3. WHEN a user accesses the homepage THEN the system SHALL display competition badges/logos and tech stack indicators
4. WHEN a user loads the homepage THEN the system SHALL include a "Latest Updates" section linking to the journey page

### Requirement 2

**User Story:** As a visitor, I want to learn about the team members and their expertise, so that I can understand the team's capabilities and credibility.

#### Acceptance Criteria

1. WHEN a user navigates to the about page THEN the system SHALL display a mission statement of 1-3 paragraphs
2. WHEN a user views the about page THEN the system SHALL present a team grid with 4 member cards
3. WHEN a user sees a team member card THEN the system SHALL include photo, name, role, 2-3 line bio, LinkedIn/GitHub placeholders, and responsibilities
4. WHEN a user accesses the about page THEN the system SHALL display a team photo banner placeholder
5. WHEN a user views the about page THEN the system SHALL show team values as icon cards (customer-centric, sustainable, data-driven)

### Requirement 3

**User Story:** As an evaluator, I want to understand the project's problem, solution, and unique value proposition, so that I can assess the innovation and market fit.

#### Acceptance Criteria

1. WHEN a user visits the project page THEN the system SHALL present a Problem → Insight → Solution progression
2. WHEN a user views the project details THEN the system SHALL display up to 5 Unique Selling Proposition bullets
3. WHEN a user accesses the project page THEN the system SHALL identify target users and key stakeholders
4. WHEN a user reviews the project THEN the system SHALL provide a 10m x 10m space plan with zone descriptions and ASCII diagram
5. WHEN a user examines the project scope THEN the system SHALL list In-scope vs Out-of-scope items
6. WHEN a user views project metrics THEN the system SHALL display success metrics (KPIs) and constraints (time/budget/space)
7. WHEN a user completes reading the project page THEN the system SHALL provide a "See the Journey" CTA button

### Requirement 4

**User Story:** As a stakeholder, I want to track the team's progress and timeline, so that I can understand their project management approach and milestones.

#### Acceptance Criteria

1. WHEN a user accesses the journey page THEN the system SHALL display a 6-month timeline with monthly milestones
2. WHEN a user views each milestone THEN the system SHALL include goal, deliverables, owner, status, risks, and next steps
3. WHEN a user examines the timeline THEN the system SHALL cover months 0-6 with specific focus areas per month
4. WHEN a user wants detailed view THEN the system SHALL provide an optional Gantt chart image placeholder toggle
5. IF a milestone status is unknown THEN the system SHALL display "TBD" as placeholder

### Requirement 5

**User Story:** As a visitor, I want to access the live demonstration of the project, so that I can experience the solution firsthand.

#### Acceptance Criteria

1. WHEN a user visits the demo page THEN the system SHALL display a prominent external link button to live deployment
2. WHEN a user views the demo page THEN the system SHALL show screenshot/gallery placeholders
3. WHEN a user accesses demo information THEN the system SHALL include a release notes section with version, date, and changes
4. WHEN no live demo exists THEN the system SHALL use placeholder URL with clear indication

### Requirement 6

**User Story:** As an interested party, I want to contact the team directly, so that I can ask questions or provide feedback about their project.

#### Acceptance Criteria

1. WHEN a user visits the contact page THEN the system SHALL provide a contact form with name, email, and message fields
2. WHEN a user submits the contact form THEN the system SHALL validate inputs on client-side and show success toast
3. WHEN a user views contact options THEN the system SHALL display direct links for team email, LinkedIn, and GitHub
4. WHEN a user checks location THEN the system SHALL show "Singapore" as the team location
5. WHEN form backend is not connected THEN the system SHALL include note about future Formspree/Email integration

### Requirement 7

**User Story:** As any website visitor, I want consistent navigation and site information, so that I can easily move between sections and understand site policies.

#### Acceptance Criteria

1. WHEN a user accesses any page THEN the system SHALL display a navbar with all route links highlighting current page
2. WHEN a user scrolls to bottom THEN the system SHALL show footer with credits, copyright year, MIT License link, and privacy note
3. WHEN a user navigates the site THEN the system SHALL maintain consistent design system across all pages
4. WHEN a user accesses the site THEN the system SHALL support both light and dark color schemes based on user preference

### Requirement 8

**User Story:** As a website visitor, I want the site to load quickly and be accessible on all devices, so that I can access information regardless of my device or connection speed.

#### Acceptance Criteria

1. WHEN the site is tested THEN the system SHALL achieve Lighthouse scores ≥ 90 for both mobile and desktop
2. WHEN images are loaded THEN the system SHALL use next/image with optimized placeholders and lazy loading
3. WHEN a user accesses the site THEN the system SHALL provide semantic HTML, keyboard navigation, and proper aria-labels
4. WHEN screen readers access content THEN the system SHALL include appropriate alt text for all images
5. WHEN the site is crawled THEN the system SHALL include proper SEO metadata, OG/Twitter cards, sitemap, and robots.txt

### Requirement 9

**User Story:** As a developer maintaining the site, I want clean, maintainable code with a single source of truth for content, so that updates can be made efficiently.

#### Acceptance Criteria

1. WHEN the project is structured THEN the system SHALL use Next.js 14 with App Router and TypeScript
2. WHEN styling is implemented THEN the system SHALL use Tailwind CSS with shadcn/ui components
3. WHEN content needs updating THEN the system SHALL maintain all site data in /data/site.ts as single source of truth
4. WHEN components are created THEN the system SHALL include reusable components for Section, Container, PageHeader, TeamCard, Stat, Timeline, and ContactForm
5. WHEN placeholders are needed THEN the system SHALL use explicit formats like "TBD", "Coming soon", or "{{PLACEHOLDER: <description>}}"

### Requirement 10

**User Story:** As a team member, I want clear documentation for deployment and customization, so that I can easily update content and deploy the site.

#### Acceptance Criteria

1. WHEN documentation is provided THEN the system SHALL include README.md with local development instructions
2. WHEN content updates are needed THEN the system SHALL document how to customize content in /data/site.ts
3. WHEN deployment is required THEN the system SHALL provide Vercel deployment instructions
4. WHEN form integration is needed THEN the system SHALL document Formspree/Resend connection process
5. WHEN the project is shared THEN the system SHALL include MIT License for open source compliance