import projects from '../app/[locale]/projects/projects.json'

export const getProjects = async () => {
    return projects;
}

export const getProject = async (id) => {
    const project = projects.portfolio.find(project => project.id === id);
    if(project) {
        return project;
    } else {
        return null;
    }
}