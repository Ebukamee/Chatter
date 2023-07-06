import "../assets/styles/nav.css";
import { useState } from "react";
import ButtonArea from "./button-area";
import Open from "../assets/images/icon-menu.svg";
import Close from "../assets/images/icon-close.svg";

export default function Nav() {
  let [Menu, setMenu] = useState(Open);
  let [Name,setName] = useState('menu_close')

  const Click = () => {
    if (Menu == Open) {
      setMenu(Close);
      setName('menu')
    } else {
      setMenu(Open);
      setName('menu_close')
    }
  };
  return (
    <div className="nav">
      <nav className="desktop">
        <h1 className="logo">CHATTER</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blogs</li>
        </ul>
        <ButtonArea />
      </nav>
      <nav className="mobile">
        <img src={Menu} alt="" className="menu-button" onClick={Click} />
        <h1 className="logo">CHATTER</h1>
        <div></div>
      </nav>
      <div className={Name}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blogs</li>
        </ul>
        <ButtonArea />
      </div>
    </div>
  );
}
