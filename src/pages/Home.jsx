function Home() {
  return (
    <div className='text-center'>
      <header className='bg-secondary rounded py-20 m-45'>
        <h1 className='fs-6 fw-6 text-dark'>Ian Cover</h1>
        <hr className='mx-30' />
        <p className='fs-3 fw-4 text-blue'>
          Full Stack Web Developer
          <br />
          <span className='text-dark fs-3 fw-4'>
            Specialized on the MERN Stack
          </span>
        </p>
        <p className='text-center fs-2 fw-3 text-light'>
          Available for Immediate Hire
        </p>
      </header>
      <main className='bg-secondary rounded py-20 px-30 m-45'>
        <h3 className='text-dark'>Recruiters and Hiring Managers</h3>
        <p className='text-dark'>
          I appreciate you taking the time and interest in my profile, as eager
          as I am to speak with everyone reaching out with serious inquiries, I
          prioritize responding to messages specifying a match with my
          qualifications and skillset.
          <br />
          Thank you, sincerely!
        </p>
      </main>
      <footer className='text-dark text-center pt-30 mt-30'>
        <small className='pt-30 mt-30'>Ian Cover &copy; 2022 Austin, TX</small>
      </footer>
    </div>
  );
}

export default Home;
