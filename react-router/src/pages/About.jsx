import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>

      <button onClick={() => navigate(1)}>
        Go Forward
      </button>
    </div>
  );
}

export default About;