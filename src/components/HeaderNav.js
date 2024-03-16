import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import log_x from "../components/Iconaasets/Asset-5-x.png";
import "./Header.css";
function HeaderNav() {
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(false);

  const location = useLocation();

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "is-active" : "";
  };

  return (
    <>
      <Navbar
        className="navbg"
        expand="lg"
        sticky="top"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="navbar-brand-container">
            <img src={log_x} alt="log-x" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white text-black"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="main-nav">
              <Nav.Link
                as={Link}
                to={"/"}
                onClick={handleNavItemClick}
                className={`${isActive("/")}`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/about-us"}
                onClick={handleNavItemClick}
                className={`custom-link ${isActive("/about-us")}`}
              >
                about
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/blog"}
                onClick={handleNavItemClick}
                className={`custom-link ${isActive("/blog")}`}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/news"}
                onClick={handleNavItemClick}
                className={` ${isActive("/news")}`}
              >
                News
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/commodity-analysis"}
                onClick={handleNavItemClick}
                className={` ${isActive("/commodity-analysis")}`}
              >
                Market
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="collapsible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className={`custom-dropdown ${isActive("/services")}`}
              >
                <div className="flex flex-col text-center">
                  <NavDropdown.Item>
                    <Link
                      to="/services"
                      className={` ${isActive("/services")}`}
                    >
                      Services
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/StatergyTip"
                      className={` ${isActive("/StatergyTip")}`}
                    >
                      StatergyTip
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/TradingTip"
                      className={` ${isActive("/TradingTip")}`}
                    >
                      TradingTip
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/mission-promise"
                      className={` ${isActive("/mission-promise")}`}
                    >
                      Mission
                    </Link>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to={"/contact-us"}
                onClick={handleNavItemClick}
                className={` ${isActive("/contact-us")}`}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className={` ${isActive("/user-register")}`}
                as={Link}
                to={"/user-register"}
                onClick={handleNavItemClick}
              >
                Sign Up
              </Nav.Link>
              {/* <Nav.Link

              to="https://skycommodity.in/bullsPanel/login"

              
            >
              Sign In
            </Nav.Link> */}
              <Nav.Link href="https://skycommodity.in/bullsPanel/login">
                {" "}
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
