function ProjectItem({ proj }) {
  return (
    <li>
      <div className='d-flex'>
        <div className='proj-img'>
          <div className={proj.title.toLowerCase()}></div>
        </div>
        <div className='proj-info'>
          <button
            className='text-blue proj-link'
            onClick={() => window.open(proj.link)}>
            <h1>{proj.title}</h1>
          </button>
          <h3 className='text-orange'>{proj.technologies}</h3>
          <p className='text-dark'>{proj.description}</p>
          <button
            className='text-blue proj-link'
            onClick={() => window.open(proj.link)}>
            {proj.title === 'PlayerCare'
              ? 'playercare.herokuapp.com'
              : proj.title === 'DevCamper'
              ? 'Postman Documenter: DevCamper API'
              : proj.title === 'Home-In'
              ? 'home-in.vercel.app'
              : proj.title === 'Userch'
              ? 'userch.vercel.app'
              : 'critiq.netlify.app'}
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;
