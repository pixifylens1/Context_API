import React from 'react'
import Profile from "./Components/Profile"
import UserContextProvider from "./Context/UserContextProvider"
import Login from "./Components/Login"
import './App.css'
function App() {

  return (
    <>
    <UserContextProvider>
    <h1>Context Api</h1>
       <Login/>
      <Profile/> 
    </UserContextProvider>
    </>
  )
}

export default App
