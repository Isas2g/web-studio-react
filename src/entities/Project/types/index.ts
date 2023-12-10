export interface Project {
  id?: number;
  teamID?: number;
  title: string;
  description: string;
  startedAt: string;
  endedAt: string;
  link: string;
  isActive: boolean;
  technologies?: Array<string>;
  updatedAt: string;
  category_id: string;
}
