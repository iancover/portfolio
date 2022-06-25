import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='py-30 px-10 bg-dark'>
      <div className='nav-container'>
        <div className=''>
          <Link to='/' className='text-white fs-3'>
            Ian Cover
          </Link>
        </div>
        <div className=''>
          <span className='mx-10'>
            <Link to='#' className='text-grey fs-2'>
              About Me
            </Link>
          </span>
          <span className='mx-10'>
            <Link to='#' className='text-grey fs-2'>
              Resume
            </Link>
          </span>
          <span className='mx-10'>
            <Link to='#' className='text-grey fs-2'>
              Apps
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
