import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Dashboard from "./components/screen/Dashboard";
import Login from "./components/screen/Login";
import ProfilePage from "./components/screen/ProfilePage";
import Connection from "./components/screen/Connection";
import Request from "./components/screen/Request";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path='/login' element={<Login />} />

        {/* Protected Layout */}
        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/profilePage' element={<ProfilePage />} />

          <Route path='/connection' element={<Connection />} />

          <Route path='/request' element={<Request />} />
        </Route>

        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
