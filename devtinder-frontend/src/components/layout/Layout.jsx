import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          height: "80px",
          bgcolor: "#42a5f5",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        Tinder
      </Box>

      {/* Page Content */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
