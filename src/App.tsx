import Home from './pages/home'
import CreateProjectForm from './pages/CreateProject'
import BlogDetail from './pages/BlogDetail'
import Bloglist from './pages/Blog'
import { useEffect } from 'react'
import { auth } from './firebase/firebase'
import { useDispatch } from 'react-redux'
import { setUser } from './actions/authActions'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import { User } from 'firebase/auth'
import Edit from './pages/editProfile'
import Profile from './pages/Profile'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser: User | null) => {
      if(authUser) {
        dispatch(setUser(authUser))
      }
      else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])

  return (
    <>
      <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/create' element={<CreateProjectForm />} />
      <Route path='/post/:id' element={<BlogDetail />} />
      <Route path='/blog' element={<Bloglist />} />
      <Route path='/edit_profile' element={<Edit />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/:id' element={<Profile />} />
   </Routes>
    </>
  )
}

export default App
