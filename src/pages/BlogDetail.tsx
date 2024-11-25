import Nav from "../components/Nav";
import "../assets/styles/detail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPost } from "../actions/postActions";
import { connect } from "react-redux";
import Load from "../components/loader";
import Footer from "../components/footer";
import profile from "../assets/images/profile.png";
import '../assets/styles/details.css'
interface BlogDetailProps {
  // Define any other prop types here
}

const BlogDetail: React.FC<BlogDetailProps> = (props: any) => {
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    props.getPost(id); // Dispatch the action
  }, [getPost]);

  const { posts } = props;
  console.log(posts);

  // Rest of your component logic
  if (posts.length === 0) {
    return <Load />;
  }
  return (
    <>
      <Nav />
      <div>
        {posts &&
          posts.map((post: any) => {
            document.title = post.Title
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
            return (
              <>
                  <div className="flex move">
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
                <h2 className="title">{post.Title}</h2>
                <div>
                  {post.Url ? <img src={post.Url} alt="" className="postImage"/> : null}
                </div>
                <div className="content">{post.Content}</div>
                <hr />
                <div className="time_person">
                  <p>Posted by {post.Author ? post.Author : 'Annonymous'}</p>
                  <p> {date.toLocaleString("en-US", options)}</p>
                </div>
                
                <div className="comments">
                  <h2>Comments</h2>
      
  {!post.Comments ? <h2>Be the First to Comment</h2> : null}

  {post.Comments && post.Comments.map((comment: any) => {
    const date = new Date(comment.PostedOn.seconds * 1000 + comment.PostedOn.nanoseconds / 1e6);
    const options: any = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return (
      <div className="post_container" key={comment.id}>
        <div >
          <div >
            <div className="details">
              <h4>{comment.UserName}</h4>
              <p>{date.toLocaleString("en-US", options)}</p>
            </div>
          </div>
          <p className="detail">{comment.Cotent}</p>
        </div>
      </div>
    );
  })}
</div>

                <Footer />
              </>
            );
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.blog.individualPost, // Adjust this based on your state structure
  };
};

export default connect(mapStateToProps, { getPost })(BlogDetail);
