import Project from '@/components/project/Project';
import { getProject, getProjects } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug);
  const projects = await getProjects();
  if (!project) {
    notFound()
  }

  return <Project project={project} projects={projects} />;
}
