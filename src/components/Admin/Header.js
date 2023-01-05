import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Merchant/Images/logo.png";
import user from "../Merchant/Images/user.jpg";

const settings = [
  "Partner Creation",
  "Merchant Creation",
  "Dashboard",
  "Logout",
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const loggedOut = () => {
    localStorage.clear();
    return navigate("/");
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* sx={{backgroundColor:"#006939"}} */}
        <div
          className="d-flex"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <Grid container>
            <Avatar src={logo} sx={{ width: 33, height: 33, marginRight: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Fira Sans",
                color: "inherit",
                textDecoration: "none",
                fontWeight: "450",
              }}
            >
              Pazhamudhir Nilayam
            </Typography>
          </Grid>
          <Grid>
            <Box sx={{ flexGrow: 1 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt=""
                  src={user}
                  sx={{ width: 33, height: 33, marginRight: 1 }}
                />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to="/admin">Partner Creation</Link>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    <Link to="/merchant">Merchant Creation</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={loggedOut}>
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
