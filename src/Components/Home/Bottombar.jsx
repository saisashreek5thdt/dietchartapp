import React from "react";
import { Footer } from "flowbite-react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiDribbble,
} from "react-icons/fi";

const Bottombar = () => {

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <>
      <Footer container={true}>
        <div className="footer__Width">
          <div className="footer__Box">
            <div>
              <Footer.Brand
                href="/"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
            </div>
            <div className="footer__Grid">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="footer__Flex--1">
            <Footer.Copyright href="#" by="Diet Chart APP" year={getYear()} />
            <div className="footer__Flex--2">
              <Footer.Icon href="#" icon={FiFacebook} />
              <Footer.Icon href="#" icon={FiInstagram} />
              <Footer.Icon href="#" icon={FiTwitter} />
              <Footer.Icon href="#" icon={FiGithub} />
              <Footer.Icon href="#" icon={FiDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Bottombar;
