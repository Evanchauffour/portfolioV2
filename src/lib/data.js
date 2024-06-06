import projectsFr from '../app/[locale]/projects/projectsFr.json'
import projectsEn from '../app/[locale]/projects/projectsEn.json'
import {getLocale} from 'next-intl/server';


export const getProjects = async () => {
    const locale = await getLocale();
    if(locale === 'en') {
        return projectsEn;
    }
    return projectsFr;
}

export const getProject = async (id) => {
    const locale = await getLocale();
    const projects = locale === 'en' ? projectsEn : projectsFr;
    const project = projects.portfolio.find(project => project.id === id);
    if(project) {
        return project;
    } else {
        return null;
    }
}