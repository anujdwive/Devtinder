import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Login from "./components/screen/Login";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Box>Hello</Box>} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
