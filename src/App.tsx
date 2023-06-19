import Home from './pages/home'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'

function App() {

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
