import { useNavigate } from "react-router-dom";
import profile from "../assets/images/profile.png";
// import moment from "moment"
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
    navigate(`/post/${post.post_id ? post.post_id : post.id}`);
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
      <img src={post.Url} alt="" className="post" />
    </div>
  );
}
