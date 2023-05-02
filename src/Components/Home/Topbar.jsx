import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true} className="navbar--Shadow">
        <Navbar.Brand href="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="navbar__Logo--Img"
            alt="Flowbite Logo"
          />
          <span className="navbar__Logo--Title">
            DietChartAPP
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link to="/login/">
            <Button>Get started</Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Services</Navbar.Link>
          <Navbar.Link href="/">Pricing</Navbar.Link>
          <Navbar.Link href="/">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Topbar;
