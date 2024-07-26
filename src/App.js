import React, { useContext } from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './style.scss'
import Home from './pages/Home'
import Layout from './pages/Layout'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { AuthContext } from './context/AuthContext'
function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ProtectedRoute>
            <Home/>
          </ProtectedRoute>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
