// import Nav from "../components/Nav";
// import profile from "../assets/images/profile.png";
// import { useSelector } from "react-redux";
// // import { useDispatch } from "react-redux";
// // import { AppDispatch } from "../store";
// // import { logOut } from "../actions/authActions";
// import ProfileList from "../components/profileList";
// import "../assets/styles/profile.css";
// import { useParams } from 'react-router-dom';
// // import { Link } from "react-router-dom";

// interface RouteParams {
//     id: string;
//   }

// export default function Profile() {
//   const { Cuser } = useSelector((state: any) => state.auth);
//   const { id } = useParams;
// //   const dispatch = useDispatch<AppDispatch>();


//         return (
//       <>
//         <Nav />
//         <div className="profile_container">
//           <div className="picture_area">
//             <img src={Cuser.photoURL ? Cuser.photoURL : profile} alt="" />
//             <h3>{Cuser.displayName}</h3>
//             <section className="flex">
//               <i className="fa fa-envelope" aria-hidden="true"></i>
//               <p>{Cuser.email}</p>
//             </section>
//           </div>
//           <div className="main_box">
//               <h3 className="heading">Your Posts</h3>
//               <ProfileList />
//             </div>
//         </div>
//       </>
//     );
//   return <></>;
// }


