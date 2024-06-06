import Footer from "../../../components/footer/Footer";
import Title from '../../../components/title/Title';
import Header from "../../../components/header/Header";
import ProjectsListItems from "../../../components/ProjectsListItems";
import { getProjects } from "../../../lib/data";
import {getTranslations} from 'next-intl/server';

export default async function Projects() {
  const projects = await getProjects();
  const t = await getTranslations('projects');

  return (
    <>
      {projects && projects.portfolio.length > 0 && (
        <>
          <Header />
          <div className='flex w-full md:mt-28 my-8 flex-row items-center justify-center overflow-hidden'>
            <Title title={t('title')} />
          </div>
          <div className='mx-4'>
            {projects.portfolio.map((project, index) => (
              <ProjectsListItems project={project} index={index} key={index}/>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
