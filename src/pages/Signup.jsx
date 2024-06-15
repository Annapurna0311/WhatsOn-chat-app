import React, { useState } from "react";
import Add from "../images/add.png";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const Signup = () => {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    createUserWithEmailAndPassword(auth,email,password).then(value => alert('Success'));
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WhatsOn</span>
        <span className="title">Sign Up</span>
        <form >
          <input
          onChange={e => setUsername(e.target.value)}
          value={username}
            type="text"
            id="name"
            placeholder="Enter name"
            fdprocessedid="1bryqm"
            autoComplete="username"
          />
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Email"
            fdprocessedid="1bryqm"
            autoComplete="email"
          />
          <input
          onChange={e => setPassword(e.target.value)}
          value={password}
            type="password"
            id="password"
            placeholder="Password"
            fdprocessedid="1bryqm"
            autoComplete="current-password"
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add avatar</span>
          </label>
          <button onClick={createUser}>Sign Up</button>
        </form>
        <p>Do have an account? Login</p>
      </div>
    </div>
  );
};

export default Signup;
