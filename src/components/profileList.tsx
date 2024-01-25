import { PageList } from "./BlogList";
import Load from "./loader";
import { fetchMyPost } from "../actions/postActions";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";


 function ProfileList(props: any) :any {
    const { Cuser } = useSelector((state: any) => state.auth);

    useEffect(() => {
        setTimeout(() => {
            console.log(Cuser.uid)
            props.fetchMyPost(Cuser.uid); 
        }, 5000);// Dispatch the action
      }, [Cuser]);
      const { posts } = props;
      if(posts === null) {
        return <Load />
      }
      else if (posts != null && posts.length==0) {
        return <p className="heading">You do not have any post</p>
      }
      else return <PageList posts={posts} /> 
}

const mapStateToProps = (state: any) => {
    return {
      posts: state.blog.myPost, // Adjust this based on your state structure
    };
  };
  
  export default connect(mapStateToProps, { fetchMyPost })(ProfileList);
  