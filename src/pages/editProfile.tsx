import { EditProfile } from "../actions/authActions";
import { uploadImage } from "../actions/authActions";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useState, ChangeEvent, FormEvent } from "react";
interface State {
  phone: string;
  Full_Name: string;
}

function Edit(props: any): any {
  const { Cuser } = useSelector((state: any) => state.auth);
  const [selectedFile, setSelectedFile] = useState(null);
  const [state, setState] = useState<State>({
    phone: "",
    Full_Name: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  };
  const handleFileChange = (e:any) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.uploadImage(selectedFile)
    setTimeout(() => {
      props.EditProfile(Cuser,
        `${Full_Name ? Full_Name : Cuser.displayName}`,
        phone,
      );
    
    }, 3000);
    setTimeout(() => {
        alert('Profile Updated')
        window.location.replace('/blog')
    }, 7000);
  };
  const { phone, Full_Name } = state;
  if (Cuser) {
    return (
      <>
        <form className="edit" onSubmit={handleSubmit}>
          <h2>Edit Profile Details</h2>
          <label htmlFor="image">Profile Image</label>
          <div className="input">
            <input type="file" name="image" id="image" onChange={handleFileChange}/>
          </div>
            <div>
              <label htmlFor="full_name">Full Name</label>
              <div className="input">
                <input
                  type="text"
                  name="Full_Name"
                  id="full_name"
                  onChange={handleChange}
                  required
                  defaultValue={Cuser.displayName}
                />
              </div>
            </div>
            <label htmlFor="email">UserName</label>
          <div className="input notEdit">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={Cuser.displayName.split(' ')[0]+Cuser.uid.substr(0,5)}
              readOnly
            />
          </div>
          <label htmlFor="email">Email Address</label>
          <div className="input notEdit">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={Cuser.email}
              readOnly
            />
          </div>
          <button className="form_button">Edit Profile</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    url: state.blog.image,
  };
};

export default connect(mapStateToProps, { EditProfile,uploadImage })(Edit);
