import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../assets/styles/nav.css'
import profile from '../assets/images/profile.png'


export default function ButtonArea() {
    const { Cuser } = useSelector((state: any) => state.auth);
    const navigate  = useNavigate()
    const nav = () => {
        navigate('/profile')
    }
    if (!Cuser) {
        return(
            <div className="button-area">
            <Link to={!Cuser ? '/login' : ''} className="no"><button className='login-btn'>Log in</button></Link>
            <Link to={!Cuser ? '/signup' : ''} className="no"><button>Sign Up</button></Link>
          </div>
        );
    }

    return(
          <div className="logout">
          <div className="profile" onClick={nav}>
          <img src={Cuser.photoURL ? Cuser.photoURL : profile} alt="" id="profile"/>
          </div>
          {/* <button onClick={handleLogOut}>Log out</button> */}
      </div>
    );
}