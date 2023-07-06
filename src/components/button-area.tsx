import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../actions/authActions";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducer/rootreducer";
import { AnyAction } from "redux";
import '../assets/styles/nav.css'

type AppDispatch = ThunkDispatch<RootState,any, AnyAction>;

export default function ButtonArea() {
    const { Cuser } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    
    const handleLogOut = () => {
        dispatch(logOut())
    }
    if (!Cuser) {
        return(
            <div className="button-area">
            <Link to='/login' className="no"><button className='login-btn'>Log in</button></Link>
            <Link to='/signup' className="no"><button>Sign Up</button></Link>
          </div>
        );
    }

    return(
          <div className="logout">
          <div className="profile"></div>
          <button onClick={handleLogOut}>Log out</button>
      </div>
    );
}