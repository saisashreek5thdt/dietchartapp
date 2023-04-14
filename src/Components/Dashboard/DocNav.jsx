import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link} from "react-router-dom";

const DocNav = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true} className="shadow-xl"> 
        <Navbar.Brand href="/dashboard/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            DietChart
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Link to="/dashboard/">
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Plans</Dropdown.Item>
            <Dropdown.Divider />
            <Link to="/">
                <Dropdown.Item>Sign out</Dropdown.Item>
            </Link>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/dashboard/" active={true}>Dashboard</Navbar.Link>
          <Navbar.Link href="/view/forms/">Forms</Navbar.Link>
          <Navbar.Link href="/view/patients/">Patients</Navbar.Link>
          <Navbar.Link href="/view/forms/">Diet Plans</Navbar.Link>
          <Navbar.Link href="/plans/">Upgrade Plan</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default DocNav;
