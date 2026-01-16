"use client";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

export default function LoginPage() {
  const emailRef = useRef();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email: emailRef.current.value }));
  };

  return (
    <div>
      <h2>Login</h2>
      <input ref={emailRef} placeholder="Email" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
