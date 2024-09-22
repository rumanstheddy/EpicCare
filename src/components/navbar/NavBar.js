import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.scss";
// import LoginModal from "../loginmodal/LoginModal";
// import SignupModal from "../signupmodal/SignupModal";
import { useAuth } from "../../utils/auth";

//import CompanyLogo from '../../assets/images/CompanyLogoSVG.svg'
import CompanyLogo from "../../assets/images/CompanyLogoEdited.png";
// import { decodeToken } from "../../utils/tokenUtil";
import { Button, IconButton, Menu } from "@mui/material";
import { TiThMenu } from "react-icons/ti";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  // const auth = useAuth();

  // useEffect(() => {
  //   const token = decodeToken();
  //   console.log(`Auth --> ${auth}`);
  //   auth.login(token);
  // }, []);

  // const loginBtnHandler = () => {
  //   document.getElementById("loginModal").style.display = "block";
  // };
  const homeBtnHandler = () => {
    navigate("/");
  };

  // const logoutBtnHandler = () => {
  //   auth.logout();
  //   navigate("/");
  // };

  // const signupBtnHandler = () => {
  //   document.getElementById("signupModal").style.display = "block";
  // };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navListItems = [
    "Home",
    "Services",
    "Order",
    "Research",
    "Resources",
    "About",
    "Contact",
  ];

  const getNavLinks = () => {
    return navListItems.map((item) => {
      const link = item !== "Home" ? `/${item.toLowerCase()}` : `/`;
      return <NavLink to={link}>{item}</NavLink>;
    });
  };

  return (
    <div>
      <nav>
        <img
          className="home-btn"
          alt="SeizureCare"
          style={{ width: "200px", cursor: "pointer", left: "10" }}
          src={CompanyLogo}
          onClick={homeBtnHandler}
        />
        <div className="nav-links-desktop">
          {getNavLinks()}
          <div className="login-btn-container">
            <Button variant="contained" className="login-btn" href="/wip">
              Login
            </Button>
          </div>
        </div>
        <div className="nav-links-mobile">
          <IconButton id="burger-icon" onClick={(e) => handleClick(e)}>
            <TiThMenu />
          </IconButton>
          <Menu
            id="burgerMenu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {getNavLinks()}
            <div className="login-btn-container">
              <Button variant="contained" className="login-btn" href="/wip">
                Login
              </Button>
            </div>
          </Menu>
        </div>
      </nav>
      {/* <LoginModal />
      <SignupModal /> */}
    </div>
  );
}

export default NavBar;
