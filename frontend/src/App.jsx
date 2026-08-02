import React, {useState} from 'react'
import Layout from './components/Layout'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const clearAuth = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } catch (err) {
      console.log("clearAuth error:", err)
    }
    setUser(null);
    setToken(null);
  }

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  }


  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
