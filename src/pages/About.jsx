function AboutMe() {
  return (
    <div className='text-center'>
      <header className='bg-secondary rounded p-20 m-45'>
        <h1 className='text-orange'>Skills</h1>
        <p className='text-dark'>
          Web developer specializing in JavaScript, focused on the MERN stack,
          and with experience in the following technologies:
          <br />
          HTML5 | CSS3 | SCSS | ES7 | Vanilla JS | jQuery | React | Redux |
          Redux Toolkit
          <br />
          Node | Express | MongoDB | Mongoose | Mocha | Chai
          <br />
          Firebase | Firestore | Heroku | Vercel | Netlify | DigitalOcean |
          Travis CI
          <br />
          Git | GitHub | VS Code | Postman
        </p>
      </header>
      <main className='bg-secondary rounded py-20 px-30 m-45'>
        <h1 className='text-orange'>About Me</h1>
        <p className='text-dark'>
          Moved to Austin, TX in 2012 to further my career in the tech industry
          and worked for multiple software start-ups in sales roles covering a
          wide array of verticals from Mid-market to Enterprise level both
          domestic and international.
          <br />
          With increased exposure to the technical side of the SaaS industry at
          every turn, after a couple of years of entertaining the idea of a
          career transition into programming, in 2017 I enrolled in a full stack
          web development bootcamp. Near completion of the program later that
          year, feeling solely equipped with the fundamentals, rather than
          rushing into the field partially prepared, I decided to delay my plans
          and take the next steps only when the timing felt right.
          <br />
          I have since been focused on learning all aspects of the full stack
          developer path, working on multiple projects to further my experience,
          while faced with multiple challenges, including a global pandemic.
          <br />
          Thanks for reading!
        </p>
      </main>
      <footer className='text-dark text-center pt-30 mt-30'>
        <small className='pt-30 mt-30'>Ian Cover &copy; 2022 Austin, TX</small>
      </footer>
    </div>
  );
}

export default AboutMe;
