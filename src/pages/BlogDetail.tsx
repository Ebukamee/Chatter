import Nav from "../components/Nav";
import '../assets/styles/detail.css';
import Image from '../assets/images/background.png';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPost } from "../actions/postActions";
import { connect } from "react-redux";
interface BlogDetailProps {
    // Define any other prop types here
  }
  
  const BlogDetail: React.FC<BlogDetailProps> = (props:any) => {
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
      props.getPost(id);  // Dispatch the action
  }, [getPost]);

  const { posts } = props;
  console.log(posts);

  // Rest of your component logic
   return (
    <>
      <Nav />
      <div className="contain">
        {posts && posts.map((post:any) => {
          return (
            <>
            <div className="coverimage">
            <img src={post.Url} alt="" />
        </div>
        <h2 className="title">Title- {post.Title}</h2>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          mollitia dolorem at non aut adipisci doloremque perferendis voluptatem
          doloribus porro error, ea consequuntur neque architecto sequi quod
          quia nam eos! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Neque, delectus. Assumenda nulla, magnam minima, quibusdam qui
          ipsa et iusto aliquid exercitationem, eius quas dolore architecto modi
          voluptate nobis sapiente nisi?
        </div>
        <hr />
        <div className="time_person">
            <p>Posted by Ebuka</p>
            <p>24th August 2023, 4:29pm</p>
        </div>
        </>
          )
        }) }
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
      posts: state.blog.individualPost // Adjust this based on your state structure
  };
}

export default connect(mapStateToProps, { getPost })(BlogDetail);
 
