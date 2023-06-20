import "../assets/styles/login.css";
import  { useState, ChangeEvent, FormEvent,useEffect } from "react";
import Fb from '../assets/images/icons8-facebook.svg';
import Google from '../assets/images/google.svg'
import { AnyAction } from "redux";
import { RootState } from "../reducer/rootreducer";
import { ThunkDispatch } from "redux-thunk";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginInitiate } from "../actions/authActions";
import { googleInitiate } from "../actions/authActions";
import { facebookInitiate } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

type AppDispatch = ThunkDispatch<RootState,any, AnyAction>;


interface LoginState {
  email: string;
  password: string;
}

export default function Login() {
  const [state, setState] = useState<LoginState>({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const  {email,password} = state
  const dispatch = useDispatch<AppDispatch>();
  const { Cuser } = useSelector((state: any) => state.auth);
  const { authError } = useSelector((state: any) => state.auth);
  const { loading } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if(Cuser) {
      navigate('/')
    }
  
    else return;
  }, [navigate, Cuser])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state)
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginInitiate(email,password))
    }
    console.log(Cuser)
    console.log(authError)
    // navigate('/dashboard')
  }
   const handleGoogleLogin = () => {
    dispatch(googleInitiate())
   }

   const handleFacebookLogin = () => {
    dispatch(facebookInitiate())
   }

  return (
    <div className="login">
      <div className="image">
        <h1 className="hero-heading">
         CHATTER
        </h1>
        <p>
          Unleash the power of words. connect with like minded readers and
          writers
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Welcome back</h2>

          <label htmlFor="email">Email Address</label>
          <div className="input">
            <input type="email" name="email" id="email" onChange={handleChange}/>
          </div>
          <label htmlFor="email">Password</label>
          <div className="input">
            <input type="password" name="password" id="password" onChange={handleChange}/>
          </div>
          <p className="error">{authError ? authError : ''}</p>
          <button>{loading ? 'Loading...' : 'Log In'}</button>
        </form>
        <button className="socials" onClick={handleGoogleLogin}>
            <img src={Google} alt="" className="icon" />
            <span className="btn">Log in with google</span>
        </button>
        <button className="socials" onClick={handleFacebookLogin}>
            <img src={Fb} alt="" className="icon" />
            <span className="btn">Log in with facebook</span>
        </button>
      </div>
    </div>
  );
}
