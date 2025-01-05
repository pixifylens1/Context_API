import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };
  return (
    <div>
      <h1> Login</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
        <p>  </p>
      <input
        type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
        <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
