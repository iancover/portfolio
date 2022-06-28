import ProjectItem from '../components/ProjectItem';
import { projectsList } from '../data/ProjectsData';

function Projects() {
  const projectList = projectsList();

  return (
    <div className='text-center'>
      <header className='bg-secondary rounded py-30 m-45'>
        <h1 className='fs-6 fw-6 text-orange'>Projects</h1>
        <p className='fs-3 fw-4 text-blue'>
          <span className='text-dark fs-3 fw-4'>
            Here are a few projects covering some of the technologies I have
            experience with.
            <br />
            These are all mock organizations and all data is fictitious.
          </span>
        </p>
      </header>
      <main className='bg-secondary rounded py-20 px-30 m-45'>
        <ul>
          {projectList.map((proj) => (
            <ProjectItem key={proj.id} proj={proj} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Projects;
