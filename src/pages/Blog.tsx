import List from "../components/BlogList";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import { fetchData } from "../actions/postActions";
import { useEffect } from "react";
import edit from '../assets/images/edit.svg'
import { useNavigate } from "react-router-dom";



function Bloglist(props: any) {
    useEffect(() => {
        props.fetchData();  // Dispatch the action
    }, []);

    const { posts } = props;
    console.log(posts);
const navigate = useNavigate();
const Create = () => {
    navigate('/create')
}
    return (
        <>
            <Nav />
            <div className="main_box">
                <div className="flexbox">
                    <div>
                        <h2>Feed</h2>
                        <p>Explore different content you'll love</p>
                    </div>
                    <button className="flex" onClick={Create}><img src={edit} alt="not" />Post a Content</button>
                </div>
              <List posts={posts} />
            </div>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        posts: state.blog.Post // Adjust this based on your state structure
    };
}

export default connect(mapStateToProps, { fetchData })(Bloglist);
