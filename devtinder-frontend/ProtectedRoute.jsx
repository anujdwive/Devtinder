import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  // ❌ Not logged in → go to login
  if (!user) {
    return <Navigate to='/login' replace />;
  }

  // ✅ Logged in → allow access
  return children;
};

export default ProtectedRoute;
