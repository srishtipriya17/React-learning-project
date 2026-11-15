import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default Contact;