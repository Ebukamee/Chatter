import Home from './pages/home'
import { useEffect } from 'react'
import { auth } from './firebase/firebase'
import { useDispatch } from 'react-redux'
import { setUser } from './actions/authActions'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import { User } from 'firebase/auth'

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
   </Routes>
    </>
  )
}

export default App
