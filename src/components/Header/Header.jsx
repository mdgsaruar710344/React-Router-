import {  NavLink } from "react-router-dom";

import './Header.css'
const Header = () => {

  return (
    <div>
      Header is here
      <div >
       
        <NavLink to="/" className="header-link"> Home</NavLink>
      <NavLink to="/about" className="header-link">About</NavLink>
      <NavLink to="/contact" className="header-link">Contact</NavLink>
      <NavLink to="/users" className="header-link">Users</NavLink>
      </div>
      <br></br>
    
    </div>
  );
};

export default Header;