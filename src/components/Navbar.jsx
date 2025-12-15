import { Stack, IconButton, Menu, MenuItem, Avatar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.dispatchEvent(new Event('userChange'));
    handleMenuClose();
    navigate('/');
  };

  const handleLogin = () => {
    handleMenuClose();
    navigate('/login');
  };

  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={logo} alt="logo" height={45} />
        <span style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}>KIDDO MEDIA</span>
      </Link>
      <SearchBar />
      {user ? (
        <>
          <IconButton onClick={handleMenuOpen}>
            <Avatar src="https://via.placeholder.com/40" sx={{ width: 32, height: 32 }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem disabled>
              <Typography>{user.firstName} {user.lastName}</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <IconButton onClick={handleLogin} sx={{ color: '#fff' }}>
          <Typography>Login</Typography>
        </IconButton>
      )}
    </Stack>
  );
};

export default Navbar;
