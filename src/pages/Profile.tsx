import Nav from "../components/Nav";
import profile from "../assets/images/profile.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { logOut } from "../actions/authActions";
import ProfileList from "../components/profileList";
import "../assets/styles/profile.css";

export default function Profile() {
  const { Cuser } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOut()); 
    if (!Cuser) {
        window.location.replace('/login')
    }
  };
  if (Cuser) {
        return (
      <>
        <Nav />
        <div className="profile_container">
          <div className="picture_area">
            <img src={profile} alt="" />
            <h3>{Cuser.displayName}</h3>
            <section className="flex">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <p>{Cuser.email}</p>
            </section>
            <div className="flexbox">
              <button className="login-btn">Edit Profile</button>
              <button onClick={handleLogOut}>Log out</button>
            </div>
          </div>
          <div className="main_box">
              <h3 className="heading">Your Posts</h3>
              <ProfileList />
            </div>
        </div>
      </>
    );
  }
  return <></>;
}


