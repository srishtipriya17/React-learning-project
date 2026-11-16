import { Navigate } from "react-router";

function ProtectedRoute({ children, isLoggedIn }) {

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;