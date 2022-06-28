import { Link } from 'react-router-dom';
import { SiLinkedin } from 'react-icons/si';

function Contact() {
  return (
    <div className='text-center'>
      <header className='bg-secondary rounded py-20 m-45'>
        <h1 className='text-orange'>Contact Me</h1>
      </header>
      <main className='bg-secondary rounded py-20 px-30 m-45'>
        <h3 className='text-dark'>Inbox</h3>
        <Link to='https://www.linkedin.com/messaging/' className='text-blue'>
          <SiLinkedin className='mr-05' /> linkedin.com/in/iancover
        </Link>
        <h3 className='text-dark'>Email</h3>
        <Link to='mailto:iancover@gmail.com' className='text-blue'>
          iancover@gmail.com
        </Link>
        <h3 className='text-dark'>Phone</h3>
        <Link to='tel:5122003707' className='text-blue'>
          512.200.3707
        </Link>
      </main>
      <footer className='text-dark text-center pt-30 mt-30'>
        <small className='pt-30 mt-30'>Ian Cover &copy; 2022 Austin, TX</small>
      </footer>
    </div>
  );
}

export default Contact;
