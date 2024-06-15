"use server";
import { DataResult } from "@/lib/types";
import { Project } from "@/lib/types";

export const getProjects = async (): Promise<DataResult> => {
  const response = await fetch("https://solofox.vercel.app/projects.json")
  if (!response.ok) {
    return {
      data: null,
      isError: true,
      error: "HTTP error! status: ${response.status}"
    }
  }
  const data: Project[] = await response.json();
  
  return {
    data,
    isError: false,
    error: null
  }
}

export const getProjectById = async (id: number): Promise<DataResult> => {
  const response = await fetch("https://solofox.vercel.app/projects.json");
  if (!response.ok) {
    return {
      data: null,
      isError: true,
      error: `HTTP error! status: ${response.status}`
    }
  }
  const data: Project[] = await response.json();
  
    const singleProject: Project = data[id - 1]

  return {
    data: [singleProject],
    isError: false,
    error: null
  }
}
