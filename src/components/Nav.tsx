import '../assets/styles/nav.css'
import ButtonArea from './button-area';

export default function Nav() {
    return(
        <nav>
          <h1 className='logo'>CHATTER</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
          <ButtonArea />
        </nav>
    );
}