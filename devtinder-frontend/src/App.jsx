import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/screen/Login";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/screen/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='/login' replace />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
