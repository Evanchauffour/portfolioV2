import Footer from "../../../components/footer/Footer";
import Title from '../../../components/title/Title';
import Header from "../../../components/header/Header";
import ProjectsListItems from "../../../components/ProjectsListItems";
import { getProjects } from "../../../lib/data";
import {getTranslations} from 'next-intl/server';

export default async function Projects() {
  const t = await getTranslations('projects');
  const projects = await getProjects();

  return (
    <>
      {projects && projects.portfolio.length > 0 && (
        <>
          <Header />
          <div className='my-8 flex w-full flex-row items-center justify-center overflow-hidden md:mt-28'>
            <Title title={t('title')} />
          </div>
          <div className='mx-4'>
            {projects.portfolio.map((project, index) => (
              <ProjectsListItems project={project} index={index} key={project.id}/>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
