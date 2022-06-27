import { Link, useLocation } from 'react-router-dom';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiBootstrap,
  SiTailwindcss,
} from 'react-icons/si';

function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className='py-30 px-30 bg-dark'>
        <div className='nav-container'>
          <div className=''>
            <Link to='/' className='nav-link text-blue fs-5 ml-30'>
              ian cover <span className='text-grey text-muted'> | </span>
              <span className='text-grey'>full stack developer</span>
            </Link>
          </div>
          <div className=''>
            <span
              className='mx-10'
              style={
                location.pathname === '/'
                  ? { display: 'none' }
                  : { display: 'inline' }
              }>
              <Link to='/' className='nav-link text-grey fs-2 text-blue'>
                home
              </Link>
            </span>
            <span
              className='mx-10'
              style={
                location.pathname === '/projects'
                  ? { display: 'none' }
                  : { display: 'inline' }
              }>
              <Link
                to='/projects'
                className='nav-link text-grey fs-2 text-blue'>
                projects
              </Link>
            </span>
            <span
              className='mx-10'
              style={
                location.pathname === '/about'
                  ? { display: 'none' }
                  : { display: 'inline' }
              }>
              <Link to='/about' className='nav-link text-grey fs-2 text-blue'>
                about
              </Link>
            </span>
            <span
              className='mx-10'
              style={
                location.pathname === '/contact'
                  ? { display: 'none' }
                  : { display: 'inline' }
              }>
              <Link to='/contact' className='nav-link text-grey fs-2 text-blue'>
                contact
              </Link>
            </span>
          </div>
        </div>
      </nav>
      <div className='logo-container mt-10'>
        <SiHtml5 className='icon mt-20 fs-7 html-logo text-muted' />
        <SiCss3 className='icon mt-20 fs-7 css-logo text-muted' />
        <SiJavascript className='icon mt-20 fs-7 js-logo text-muted' />
        <SiReact className='icon mt-20 fs-7 react-logo text-muted' />
        <SiNodedotjs className='icon mt-20 fs-7 node-logo text-muted' />
        <SiExpress className='icon mt-20 fs-7 express-logo text-muted' />
        <SiMongodb className='icon mt-20 fs-7 mongo-logo text-muted' />
        <SiGithub className='icon mt-20 fs-7 github-logo text-muted' />
        <SiBootstrap className='icon mt-20 fs-7 bootstrap-logo text-muted' />
        <SiTailwindcss className='icon mt-20 fs-7 tailwind-logo text-muted' />
      </div>
    </>
  );
}

export default Navbar;
