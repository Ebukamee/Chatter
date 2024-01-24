import { useState, ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { createPost } from "../actions/postActions";
import { uploadImage,addToProfile } from "../actions/postActions";
import { connect } from "react-redux";


interface ProjectFormState {
    title:string,
    content: string,
    image:string
  }

function CreateProjectForm(props:any): any {
    const [state, setState] = useState<ProjectFormState>({
        title: "",
        content: "",
        image:"",
      });
    const [selectedFile, setSelectedFile] = useState(null);
    const { Cuser } = useSelector((state: any) => state.auth);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        console.log(state)
      };
      const handleFileChange = (e:any) => {
        setSelectedFile(e.target.files[0]);
      };
      const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedFile) {
          props.uploadImage(selectedFile).then(() => {
            setTimeout(() => {
            props.createPost(state.title,state.content,Cuser.displayName,Cuser.photoURL,Cuser.uid)
          }, 3000);
          });
          setTimeout(() => {
            props.addToProfile(state.title,state.content,Cuser.uid)
          }, 6000);
          setTimeout(() => {
            alert('Post Uploaded Succesfully');
            window.location.replace('/blog')
          }, 11000);

         }
        else {
          console.log('Lol')
        }
      };
      const handleChanges = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        console.log(state)
      };
    if (Cuser) {
    return (
       <>
       <Nav />
       <form className="blog" onSubmit={handleSubmit}>
          <h2>Create Post</h2>
          <label htmlFor="image">Cover Image</label>
          <div className="input">
            <input type="file" name="image" id="image" onChange={handleFileChange}/>
          </div>
          <label htmlFor="title">Post Title</label>
          <div className="input">
            <input type="text" name="title" id="title" onChange={handleChange} required/>
          </div>
          <label htmlFor="content">Post Content</label>
          <div className="input">
            <textarea name="content" id="content"  onChange={handleChanges}  required></textarea>
          </div>
          <button className="form_button">Create Post</button>
        </form>
       </>
    );
    }
}

const mapStateToProps = (state:any) => {
  return {
    url:state.blog.image
  }
}


export default connect(mapStateToProps, { uploadImage, createPost, addToProfile })(CreateProjectForm)