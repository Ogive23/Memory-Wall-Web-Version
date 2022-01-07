import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./../CSS/Navbar.css";
import NavLink from "./NavLink";
import NavUserAvatar from "./NavUserAvatar";
import { useSelector } from 'react-redux';

export const CustomNavbar = () => {
  let loggedIn = localStorage.getItem('isLoggedIn');
  useEffect(() => {
    console.log("AM i user?" + loggedIn);

  }, [loggedIn])
  return (
    <Navbar
      bg="transparent"
      variant="dark"
      expand="sm"
      fixed="top"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">Memory Wall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="align-items-center">
            {/* <NavLink title="الصفحة الرئيسية" route="/"></NavLink> */}
            {/* <NavLink title="Link" route="#link"></NavLink> */}
            {loggedIn ? (
              <NavUserAvatar />
            ) : (
              <>
                <NavLink
                  title="تسجيل دخول"
                  route="/login"
                  extraClasses="text-white"
                ></NavLink>
                |
                <NavLink
                  title="إنشاء حساب"
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
