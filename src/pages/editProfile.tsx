import Nav from "../components/Nav";
import { EditProfile } from "../actions/postActions";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useState, ChangeEvent,FormEvent } from "react";
interface State {
    phone: string;
    Full_Name: string;
    user_Name: string;
  }

 function Edit(props: any): any  {
    const { Cuser } = useSelector((state: any) => state.auth);
    const [state, setState] = useState<State>({
        phone: "",
        Full_Name:'', 
        user_Name: '',
      });
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        console.log(state)
      };
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.EditProfile(`${Full_Name ? Full_Name : Cuser.displayName}`,`${user_Name ? user_Name : Cuser.displayName+Cuser.uid}`,Cuser.email,phone,Cuser.uid)
      }
      const {  phone,  Full_Name, user_Name} = state;
    if (Cuser) {
    return (
        <>
         <Nav />
         <form className="edit" onSubmit={handleSubmit}>

<h2>Edit Profile Details</h2>

<div className="name">
  <div className="inside">
    <label htmlFor="full_name">Full Name</label>
    <div className="input">
      <input type="text" name="Full_Name" id="full_name" onChange={handleChange} required defaultValue={Cuser.displayName}/>
    </div>
  </div>
  <div></div>
  <div className="inside">
    <label htmlFor="user_name">UserName</label>
    <div className="input">
      <input type="text" name="user_Name" id="user_name" onChange={handleChange} required defaultValue={Cuser.displayName+Cuser.uid}/>
    </div>
  </div>
</div>
<label htmlFor="email">Email Address</label>
<div className="input notEdit">
  <input type="email" name="email" id="email"  required value={Cuser.email} readOnly/>
</div>
<label htmlFor="phone">Phone Number(optional)</label>
<div className="input">
  <input type="tel" name="phone" id="phone" onChange={handleChange}/>
</div>
          <button className="form_button">Edit Profile</button>
        </form>
        </>
    )
    }
}

const mapStateToProps = (state:any) => {
    return {
      url:state.blog.image
    }
  }
  
  
  export default connect(mapStateToProps, { EditProfile })(Edit)