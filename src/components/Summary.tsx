import { useNavigate } from "react-router-dom";
import profile from "../assets/images/profile.png";
import { useSelector } from "react-redux";
import { deletePosts } from "../actions/postActions";
import { deleteFromProfile } from "../actions/postActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";


export default function Summary({ post }: any) {
  const date = new Date(
    post.PostedOn.seconds * 1000 + post.PostedOn.nanoseconds / 1e6
  );
  const options: any = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const navigate = useNavigate();
  const nav = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="post_container" onClick={nav}>
      <div className="flex">
        <img
          src={post.AuthorImage ? post.AuthorImage : profile}
          alt=""
          id="profile"
        />
        <div className="details">
          <h4>{post.Author ? post.Author : "Annonymous"}</h4>
          <p> {date.toLocaleString("en-US", options)}</p>
        </div>
      </div>
      <h3>{post.Title}</h3>
      <p>{`${post.Content.substr(0, 300)}...`}</p>
      {post.Url ? <img src={post.Url} alt="" className="postImage"/> : null}
    </div>
  );
}


export  function ProfileSummary({ post }: any) {
    const dispatch = useDispatch<AppDispatch>();
    const { Cuser } = useSelector((state: any) => state.auth);
    const date = new Date(
      post.PostedOn.seconds * 1000 + post.PostedOn.nanoseconds / 1e6
    );
    
    const options: any = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const navigate = useNavigate();
    const nav = () => {
      navigate(`/post/${post.post_id}`);
    };
  const Delete : any= (uid: any,pid : any,id : any) => {
    dispatch(deleteFromProfile(uid,id))
    dispatch(deletePosts(pid)).then(()=> {
        setTimeout(() => {
            alert('Post Deleted!')
            window.location.reload()
        }, 3000);
    })
  }
    return (
      <div className="post_container">
        <div className="flex_box">
        <div className="flex">
          <img
            src={Cuser.photoURL}
            alt=""
            id="profile"
          />
          <div className="details">
            <h4>{Cuser.displayName}</h4>
            <p> {date.toLocaleString("en-US", options)}</p>
          </div>
        </div>
        <i className="fa fa-trash" aria-hidden="true" onClick={() => Delete(Cuser.uid, post.post_id, post.id)}></i>
        </div>
        <h3 onClick={nav}>{post.Title}</h3>
        <p onClick={nav}>{`${post.Content.substr(0, 300)}...`}</p>
        {post.Url ? <img src={post.Url} alt="" className="postImage"/> : null}
      </div>
    );
  }