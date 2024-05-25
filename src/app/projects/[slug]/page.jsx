import Project from '@/components/project/Project';
import { getProject, getProjects } from '@/lib/data';

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug);
  const projects = await getProjects();

  if (!project) {
    return {
      notFound: true,
    };
  }

  return <Project project={project} projects={projects} />;
}
