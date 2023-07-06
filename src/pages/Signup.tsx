import  { useState, ChangeEvent, FormEvent } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AnyAction } from 'redux';
import { registerInitiate } from "../actions/authActions";
import { useSelector } from "react-redux";
import "../assets/styles/login.css";
import Fb from "../assets/images/icons8-facebook.svg";
import Google from "../assets/images/google.svg";
import { ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";
import { RootState } from "../reducer/rootreducer";

type AppDispatch = ThunkDispatch<RootState,any, AnyAction>;


interface SignupState {
  email: string;
  password: string;
  displayName: string;
  confirm: string;
}

export default function Signup() {
  const [state, setState] = useState<SignupState>({
    email: "",
    password: "",
    displayName: "",
    confirm: "",
  });

  const { email, password, confirm, displayName } = state;

  const dispatch = useDispatch<AppDispatch>();
  const { Cuser } = useSelector((state: any) => state.auth);
  const { authError } = useSelector((state: any) => state.auth);
  const { loading } = useSelector((state: any) => state.auth);

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
    if (password === confirm) {
      dispatch(registerInitiate(email, password, displayName));
      console.log(state);
      console.log(authError);
      console.log(Cuser);
    } else {
      alert("Password does not match");
      window.location.reload();
    }
  };

  return (
    <div className="login">
      <div className="image">
        <h1 className="hero-heading">CHATTER</h1>
        <p>
          Unleash the power of words. connect with like minded readers and
          writers
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <div className="name">
            <div className="inside">
              <label htmlFor="first_name">First Name</label>
              <div className="input">
                <input type="text" name="First_Name" id="first_name" onChange={handleChange} required/>
              </div>
            </div>
            <div></div>
            <div className="inside">
              <label htmlFor="Last_name">Last Name</label>
              <div className="input">
                <input type="text" name="Last_Name" id="last_name" onChange={handleChange} required/>
              </div>
            </div>
          </div>
          <label htmlFor="email">Email Address</label>
          <div className="input">
            <input type="email" name="email" id="email" onChange={handleChange} required/>
          </div>
          <label htmlFor="email">Password</label>
          <div className="input">
            <input type="password" name="password" id="password" onChange={handleChange} required/>
          </div>
          <label htmlFor="email">Confirm Password</label>
          <div className="input">
            <input type="password" name="confirm" id="password" onChange={handleChange} required/>
          </div>
          <p className="error">{authError ? authError : ''}</p>
          <button className="form_button">{loading ? 'Loading...' : 'Create Account'}</button>
        </form>
        <button className="socials">
          <img src={Google} alt="" className="icon" />
          <span className="btn">Sign up with google</span>
        </button>
        <button className="socials">
          <img src={Fb} alt="" className="icon" />
          <span className="btn">Sign up with facebook</span>
        </button>
      </div>
    </div>
  );
}
