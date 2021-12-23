import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./../CSS/Navbar.css";
import NavLink from "./NavLink";
import NavUserAvatar from "./NavUserAvatar";
import {useSelector} from 'react-redux';

export const CustomNavbar = () => {
  const loggedIn = useSelector(state => state.UserSession.loggedIn);
  console.log(loggedIn);
  return (
    <Navbar
      bg="transparent"
      variant="dark"
      expand="sm"
      fixed="top"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">Memory Wall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="align-items-center">
            <NavLink title="Home" route="#home"></NavLink>
            <NavLink title="Link" route="#link"></NavLink>
            {loggedIn ? (
              <NavUserAvatar />
            ) : (
              <>
                <NavLink
                  title="Login"
                  route="#login"
                  extraClasses="text-white"
                ></NavLink>
                |
                <NavLink
                  title="Register"
                  route="#register"
                  extraClasses="text-white"
                ></NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
