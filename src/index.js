import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import './styles.scss';
import { useNavigate } from "react-router-dom";
// import App from './App';
// import reportWebVitals from "./reportWebVitals";
// import Home from "./routers/Home";
// import Layout from "./routers/Layout";
// import Murabbiylar from "./routers/Murabbiylar";
// import NoPage from "./routers/NoPage";
// import Togaraklar from "./routers/Togaraklar";
import Layout2 from "./routers/layout2";
import Welcome from "./routers/welcome";
import Login from "./login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />}></Route>
//           <Route path="murabbiylar" element={<Murabbiylar />}></Route>
//           <Route path="togaraklar" element={<Togaraklar />}></Route>
//           <Route path="*" element={<NoPage />}></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Login />}></Route>
          <Route path="welcomePage" element={<Welcome />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ============== Darsning davomi ==================

// function Ref() {
//   const sarlavha = useRef(null);
//   const handleClick = () => {
//     sarlavha.current.innerText = `Bekzod`;
//   };
//   return (
//     <>
//       <h1 ref={sarlavha}></h1>
//       <button onClick={handleClick}>Enter</button>
//     </>
//   );
// }

// function Color() {
//   const color = useRef(null);
//   const handleClick = () => {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     color.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   };
//   return (
//     <>
//       <div
//         ref={color}
//         style={{ width: "25vw", height: "25vh", border: "1px solid" }}
//       ></div>
//       <button onClick={handleClick}>boooos</button>
//     </>
//   );
// }

// function Foo() {
//   const [brand, setBrand] = useState("");

//   const submitniBoshqar = (event) => {
//     alert(`siz ${brand} haydovchisisiz`);
//     event.preventDefeult();
//   };
//   return (
//     <>
//       <form onSubmit={submitniBoshqar}>
//         <input
//           type="text"
//           placeholder="qanday moshina haydaysiz"
//           value={brand}
//           onChange={(event) => setBrand(event.target.value)}
//         />
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// }

// // function Foo2() {
// //   const [meva, setMeva] = useState("uzum");
// //   const para = useRef(null);

// //   const submitniBoshqar = (event) => {
// //     event.preventDefault();
// //     para.current.innerText = `Siz ${meva} yaxshi kurar ekansiz`;
// //   };

// //   return (
// //     <>
// //       <form onSubmit={submitniBoshqar}>
// //         <select
// //           value={meva}
// //           onChange={(event) => setMeva(event.target.value)}
// //           name="mevalar"
// //           id="mevalar"
// //         >
// //           <option value="olma">Olma</option>
// //           <option value="nok">Nok</option>
// //           <option value="uzum">Uzum</option>
// //           <option value="anor">Anor</option>
// //         </select>
// //         <button type="submit">Submit</button>
// //       </form>
// //       <h1 style={{ textAlign: "center" }} ref={para}></h1>
// //     </>
// //   );
// // }

// // ========================= Sign up ===========================

// function Ref2() {
//   const [user, setUser] = useState({});
//   const para = useRef(null);

//   const submitniBoshqar = (event) => {
//     event.preventDefault();
//     para.current.innerText = JSON.stringify(user);
//   };

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setUser((prevState) => ({ ...prevState, [name]: value }));
//   };
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Sign up</h1>
//       <form onSubmit={submitniBoshqar}>
//         <input
//           type="text"
//           name="fullname"
//           id="fullname"
//           placeholder="Enter your full name"
//           value={user.fullname || ""}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="username"
//           id="username"
//           placeholder="Enter your user name"
//           value={user.username || ""}
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Enter your password"
//           value={user.password || ""}
//           onChange={handleChange}
//         />

//         <select
//           name="category"
//           id="category"
//           value={user.category || ""}
//           onChange={handleChange}
//         >
//           <option value="category">Category</option>
//           <option value="texnika">Texnika</option>
//           <option value="kiyim">Kiyim</option>
//         </select>
//         <button type="submit">Submit</button>
//       </form>
//       <h1 style={{ textAlign: "center" }} ref={para}></h1>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App2 />);
