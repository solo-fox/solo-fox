export interface Project {
    id: number | null;
    name: string | null;
    type: string | null;
    github: string | null;
    url: string | null;
    description: string | null;
    imagePreviewUrl: string | null;
    screenshots: string[] | null;
    techStack: string[] | null;
}


export interface DataResult {
  data: Project[] | null;
  isError: boolean ;
  error: string | null;
}
