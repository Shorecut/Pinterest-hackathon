import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { NavLink } from "react-router-dom";
import LiveSearch from "./LiveSearch";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
          <img
            src="https://i.pinimg.com/236x/a7/d4/f0/a7d4f0ffa91efca55737bdce28fd22f7.jpg"
            alt=""
          />
        </div>
        <div className="profile_text-items">
          <MenuItem className="profile_text-item" onClick={handleMenuClose}>
            <NavLink> Profile</NavLink>
          </MenuItem>
          <MenuItem className="profile_text-item" onClick={handleMenuClose}>
            <NavLink to="/"> Главная</NavLink>
          </MenuItem>
          <MenuItem className="profile_text-item" onClick={handleMenuClose}>
            <NavLink to="/add"> Создать</NavLink>
          </MenuItem>
          <MenuItem className="profile_text-item" onClick={handleMenuClose}>
            <NavLink>
              <button className="profile_button">Sign Out</button>
            </NavLink>
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

          <NavLink to="/">
            <button className="home">Главная</button>
          </NavLink>
          <NavLink to="/add">
            <button className="create2">Создать</button>
          </NavLink>
        </div>
        <div className="search">
          <LiveSearch />
        </div>

        <div className="right">
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <a href="#" className="avatar">
              <div className="img">
                <img
                  src="https://i.pinimg.com/236x/a7/d4/f0/a7d4f0ffa91efca55737bdce28fd22f7.jpg"
                  alt=""
                />
              </div>
            </a>
          </IconButton>

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
  );
}
