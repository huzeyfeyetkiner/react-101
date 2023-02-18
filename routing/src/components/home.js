import { Link } from "react-router-dom";


function Home() {
    return (
      <>
        <nav>
          <Link to="/">Home</Link> {" "}
          <Link to="/about">About</Link> {" "}
          <Link to="/users">Users</Link>
        </nav>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        
      </>
    );
  }

export default Home