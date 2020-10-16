import React, { useState } from "react";
import { MENUITEMS } from "./MenuItems";
import { Link } from "react-router-dom";
import "./styles.css";

function RenderItem({ item }) {
  console.log(item);
  return (
    <li>
      <Link className={item.cName} to={item.url}>
        {item.title}
      </Link>
    </li>
  );
}

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [items, setItems] = useState(MENUITEMS);
  return (
    <React.Fragment>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img src="assets/images/logo.png" width="40" height="40" />
        </h1>
        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {items.map((item, index) => {
            return <RenderItem item={item} />;
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
