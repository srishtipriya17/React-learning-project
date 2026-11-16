import { useNavigate } from "react-router";

function Login({ isLoggedIn, setIsLoggedIn }) {

  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  if (isLoggedIn) {
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;