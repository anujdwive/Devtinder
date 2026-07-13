import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:3000/profile", {
        withCredentials: true,
      });
      dispatch(res.data);
    } catch (error) {
      console.error(error);
      // ✅ If token expired or unauthorized
      if (error.response && error.response.status === 401) {
        navigate("/login", { replace: true });
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
