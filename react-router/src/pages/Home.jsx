import { useNavigate } from "react-router";

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/about")}>
        Go to About
      </button>

      <button onClick={() => navigate("/contact")}>
        Go to Contact
      </button>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>

    </div>
  );
}

export default Home;