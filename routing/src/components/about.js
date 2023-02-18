import { Link } from "react-router-dom";



function About() {
    return (
      <>
        <nav>
            <Link to="/">Home</Link> {" "}
            <Link to="/about">About</Link> {" "}
            <Link to="/users">Users</Link>
        </nav>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        
      </>
    );
  }

export default About