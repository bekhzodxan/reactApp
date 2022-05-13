import React, {useState, useRef, } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({});
  const para = useRef(null);
  let navigate = useNavigate();

  const submitniBoshqar = (event) => {
    event.preventDefault();
    // para.current.innerText = JSON.stringify(user);
    if(user.fullname && user.username && user.password)
    navigate('/welcomePage', {state: {toliqIsm: user.fullname}})
    else{
        alert('barchasini toldiring')
    }
  };

  const handleChange = (event) => {
    console.log(user);
    const name = event.target.name;
    const value = event.target.value;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign up</h1>
      <form onSubmit={submitniBoshqar}>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter your full name"
          value={user.fullname || ""}
          onChange={handleChange}
          required
        />
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          value={user.username || ""}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={user.password || ""}
          onChange={handleChange}
        />
        <select
          name="category"
          id="category"
          value={user.category || ''}
          onChange={handleChange}
        >
          <option value="Texnika">Texnika</option>
          <option value="Kiyim">Kiyim</option>
          <option value="TurarJoy">Turar joy</option>
          <option value='User'>User</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <h1 style={{ textAlign: "center" }} ref={para}></h1>
    </>
  );
}


export default Login