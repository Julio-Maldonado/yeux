import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { HashLink as Link } from 'react-router-hash-link';

const SideMenu = props => {
  return (
    <Menu isOpen={props.isOpen} {...props}>
      <Link smooth to="#home" className="menu-item">
        Home
      </Link>
      <br />
      <Link smooth to="#about" className="menu-item">
        About Us
      </Link>
      <br />
      <Link smooth to="#strategy" className="menu-item">
        Our Strategy
      </Link>
      <br />
      <Link smooth to="#services" className="menu-item">
        Services
      </Link>
      <br />
      <Link smooth to="#pastwork" className="menu-item">
        Past Work
      </Link>
      <br />
      <Link smooth to="#contact" className="menu-item">
        Contact
      </Link>
      <br />
    </Menu>
  );
};

export default SideMenu;
