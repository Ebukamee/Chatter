import { NavLink } from "react-router-dom";
import '../assets/styles/authnav.css';

export default function AuthNav() {
    return(
        <div className="authNav">
            <NavLink to='/signup' className={({isActive}) => isActive ? 'auth_blue' : 'auth'} id="reg">REGISTER</NavLink>
            <NavLink to='/login'className={({isActive}) => isActive ? 'auth_blue' : 'auth'} id="log">LOG IN</NavLink>
        </div>
    );
}