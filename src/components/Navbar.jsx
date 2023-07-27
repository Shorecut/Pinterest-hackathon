import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import LiveSearch from "./LiveSearch";
import { usePinContext } from "../contexts/PinContext";
import { Avatar, Box, Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";

const pages = [{}]; //? не знаю

const adminPages = [
  {
    title: "New Pin",
    link: "/add",
  },
];

export default function Navbar() {
  const { user, logout, isAdmin } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { setPage } = usePinContext();
  const navigate = useNavigate();
  function getPages() {
    if (isAdmin()) {
      return pages.concat(adminPages);
    } else {
      return pages;
    }
  }

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="navbar_burger-menu__menu">
        <div className="img_profile_menu">
          {!user ? (
            <Avatar sx={{ width: "200px", height: "200px" }}></Avatar>
          ) : (
            <Avatar
              sx={{ width: "200px", height: "200px" }}
              className="avatar_img"
              src={user.photoURL}
            ></Avatar>
          )}
        </div>
        <div className="profile_text-items">
          <MenuItem className="profile_text-item" onClick={handleMenuClose}>
            <NavLink> Profile</NavLink>
          </MenuItem>
          <MenuItem className="profile_text-item" onClick={handleMenuClose}>
            <NavLink to="/" onClick={() => setPage(1)}>
              Главная
            </NavLink>
          </MenuItem>
          <MenuItem className="profile_text-item" onClick={handleMenuClose}>
            <NavLink to="/add">Создать</NavLink>
          </MenuItem>
          <MenuItem className="profile_text-item" onClick={handleMenuClose}>
            {!user ? (
              <Button variant="error" component={Link} to="/auth">
                Sign in
              </Button>
            ) : (
              <Button variant="error" onClick={() => logout()}>
                Sign out
              </Button>
            )}
          </MenuItem>
        </div>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 15 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <div className="navbar">
        <div className="left">
          <NavLink to="/">
            <img
              className="logo"
              src="https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png"
              alt=""
            />
          </NavLink>
          <button
            onClick={() => {
              setPage(1);
              navigate("/");
            }}
            className="home"
          >
            Главная
          </button>

          <NavLink to="/add">
            <button className="create2">Создать</button>
          </NavLink>
        </div>
        <LiveSearch />
        <div className="right">
          <div className="search_container">
            <a
              aria-controls={menuId}
              onClick={handleProfileMenuOpen}
              href="#"
              className="avatar"
            >
              <div className="img">
                {!user ? (
                  <Avatar
                    className="avatar_img"
                    sx={{ width: "200px", height: "200px" }}
                  ></Avatar>
                ) : (
                  <Avatar
                    className="avatar_img"
                    sx={{ width: "200px", height: "200px" }}
                    src={user.photoURL}
                  ></Avatar>
                )}
              </div>
            </a>

            <img
              onClick={handleProfileMenuOpen}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
              alt="burger-menu"
              className="navbar_burger-menu"
            />
          </div>
        </div>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </div>
  );
}
