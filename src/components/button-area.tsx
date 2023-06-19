import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ButtonArea() {
    const { Cuser } = useSelector((state: any) => state.auth);
    if (Cuser) {
        return(
            <div className="logout">
                <div className="profile"></div>
                <button>Log out</button>
            </div>
        );
    }

    return(
        <div className="button-area">
            <Link to='/login'><button className='login-btn'>Log in</button></Link>
            <Link to='/signup'><button>Sign Up</button></Link>
          </div>
    );
}