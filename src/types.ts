export type ProjectCategory = 'ai' | 'web' | 'tools';

/** One step in a project's pipeline figure. `model` marks the step that does the learning or core work. */
export interface FigureStep {
  label: string;
  tool?: string;
  model?: boolean;
}

export interface ProjectFigure {
  caption: string;
  steps: FigureStep[];
  /** Optional loop drawn from the last step back to an earlier one, e.g. a feedback loop. */
  loop?: { from: number; to: number; label: string };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  featured: boolean;
  /** Year from the résumé; omitted where the résumé does not list one. */
  year?: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  implementation: string;
  figure: ProjectFigure;
  /** Public repository. Empty string = not published yet. */
  repoUrl: string;
  /** Live demo. Empty string = no demo yet. */
  liveUrl: string;
}

export interface SkillLayer {
  id: string;
  name: string;
  summary: string;
  primary: string[];
  supporting: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institute: string;
  location: string;
  year: string;
  stats: string;
  bulletPoints: string[];
}

export interface TimelineItem {
  id: string;
  type: 'Education' | 'Internship';
  /** Short name set as the poster line. */
  short: string;
  title: string;
  subtitle: string;
  accentTag: string;
  stats: string;
  location: string;
  date: string;
  description: string;
  bulletPoints: string[];
}
