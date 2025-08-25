export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  demoUrl: string;
  contact: {
    email: string;
    location: string;
  };
  social: {
    linkedin?: string;
    github?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  headshot: string;
  links: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  responsibilities: string[];
}

export interface Milestone {
  id: string;
  month: number;
  title: string;
  summary: string;
  owner: string;
  status: 'TBD' | 'In Progress' | 'Completed';
  deliverables: string[];
  risks: string[];
  nextSteps: string[];
}

export interface ProjectInfo {
  problem: string;
  insight: string;
  solution: string;
  usp: string[];
  targetUsers: string[];
  stakeholders: string[];
  spaceLayout: {
    zones: Array<{
      name: string;
      description: string;
      size: string;
    }>;
    asciiDiagram: string;
  };
  scope: {
    inScope: string[];
    outOfScope: string[];
  };
  kpis: string[];
  constraints: string[];
}