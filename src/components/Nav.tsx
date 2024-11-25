import "../assets/styles/nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ButtonArea from "./button-area";
import Open from "../assets/images/icon-menu.svg";
import Close from "../assets/images/icon-close.svg";

export default function Nav() {
  let [Menu, setMenu] = useState(Open);
  let [Name,setName] = useState('menu_close')

  const Click = () => {
    if (Name == "menu_close") {
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
        <ul>
          <li><NavLink to='/' className={({isActive}) => isActive ? 'blue' : 'link'}>Home</NavLink></li>
          <li>About Us</li>
          <li>Contact</li>
         <li> <NavLink to='/blog' className={({isActive}) => isActive ? 'blue' : 'link'}>Blog</NavLink></li>
        </ul>
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
          <li><NavLink to='/' className={({isActive}) => isActive ? 'blueNav' : 'link'}>Home</NavLink></li>
          <li>About Us</li>
          <li>Contact</li>
         <li> <NavLink to='/blog' className={({isActive}) => isActive ? 'blueNav' : 'link'}>Blog</NavLink></li>
        </ul>
        <ButtonArea />
      </div>
    </div>
  );
}
