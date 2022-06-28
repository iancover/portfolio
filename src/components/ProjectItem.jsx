import { Link } from 'react-router-dom';

function ProjectItem({ proj }) {
  // const img = proj.title.toLowercase();
  // console.log(proj.title.toLowerCase());

  return (
    <li>
      <div className='d-flex'>
        <div className='proj-img'>
          <div className={proj.title.toLowerCase()}></div>
        </div>
        <div className='proj-info'>
          <h1>
            <Link className='text-blue' to={proj.link}>
              {proj.title}
            </Link>
          </h1>
          <h3 className='text-orange'>{proj.technologies}</h3>
          <p className='text-dark'>{proj.description}</p>
          <Link className='text-blue' to={proj.link}>
            {proj.title === 'PlayerCare'
              ? 'playercare.herokuapp.com'
              : proj.title === 'DevCamper'
              ? 'Postman Documenter: DevCamper API'
              : proj.title === 'Home-In'
              ? 'home-in.vercel.app'
              : proj.title === 'Userch'
              ? 'userch.vercel.app'
              : 'critiq.netlify.app'}
          </Link>
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;
