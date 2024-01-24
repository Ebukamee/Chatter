import Nav from "../components/Nav";
import profile from "../assets/images/profile.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { logOut } from "../actions/authActions";
import { fetchMyPost } from "../actions/postActions";
import List from "../components/BlogList";
import { connect } from "react-redux";
import Load from "../components/loader";
import { useEffect } from "react";
import "../assets/styles/profile.css";

function Profile(props: any) {
  const { Cuser } = useSelector((state: any) => state.auth);
  useEffect(() => {
    setTimeout(() => {
        props.fetchMyPost(Cuser.uid); 
        console.log(props)
        console.log(Cuser.uid)
    }, 1000);// Dispatch the action
    if (!Cuser) {
        window.location.replace('/login')
    } 
  }, []);
  document.title = 'Chatter | Profile'
  const { posts } = props;
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOut()); 
    if (!Cuser) {
        window.location.replace('/login')
    }
  };
    if (posts.length == 0) {
      return (
          <Load />
      )
  }
  if (Cuser && posts.length!=0) {
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
              <List posts={posts} /> 

            </div>
        </div>
      </>
    );
  }
  return <></>;
}

const mapStateToProps = (state: any) => {
  return {
    posts: state.blog.myPost, // Adjust this based on your state structure
  };
};

export default connect(mapStateToProps, { fetchMyPost })(Profile);
