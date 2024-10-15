// // // src/components/Login.js
// // import React, { useState } from "react";

// // const Login = ({ onLogin }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     if (email === "user@example.com" && password === "password123") {
// //       onLogin(true);
// //     } else {
// //       alert("Invalid credentials!");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <div>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import "../styles/style.css"; // Assuming your CSS file is named style.css

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleFocus = (e) => {
//     const parent = e.target.closest(".input-div");
//     parent.classList.add("focus");
//   };

//   const handleBlur = (e) => {
//     const parent = e.target.closest(".input-div");
//     if (e.target.value === "") {
//       parent.classList.remove("focus");
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === "user@example.com" && password === "password123") {
//       onLogin(true);
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="img">
//       {/* <img src="img/bg.svg" alt="Background Graphic" />  */}
//         <img src="img/login-image.png" alt="Login" /> 
//         <img src="img/bg.svg" alt="bg" />
//       </div>
//       <div className="login-content">
//         <form onSubmit={handleLogin}>
//         <img src="img/avatar.svg" alt="Avatar" />
//         {/* <img src="img/bg.svg" alt="bg" /> */}
//           <h2 className="title">Login</h2>

//           <div className="input-div one">
//             <div className="i">
//               <FontAwesomeIcon icon={faEnvelope} />
//             </div>
//             <div>
//               <h5>Email</h5>
//               <input
//                 type="email"
//                 className="input"
//                 value={email}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="input-div pass">
//             <div className="i">
//               <FontAwesomeIcon icon={faLock} />
//             </div>
//             <div>
//               <h5>Password</h5>
//               <input
//                 type="password"
//                 className="input"
//                 value={password}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* <a href="#">Forgot Password?</a> */}
//           <button type="submit" className="btn">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import "../styles/style.css"; // Assuming your CSS file is named style.css

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFocus = (e) => {
    const parent = e.target.closest(".input-div");
    parent.classList.add("focus");
  };

  const handleBlur = (e) => {
    const parent = e.target.closest(".input-div");
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      onLogin(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container">
      <div className="img">
        {/* Wave Image */}
        <img src="img/login-image.png" alt="Login" /> 
        {/* DotLottie Player on top of the wave image */}
        <dotlottie-player 
          src="https://lottie.host/05ba3e14-aeda-4bac-9063-23daa2b035e1/fGPrQU6NF2.json" 
          background="transparent" 
          speed="1" 
          style={{ width: "300px", height: "300px", position: 'absolute', top: '20%', left: '10%' }} 
          loop 
          autoplay>
        </dotlottie-player>
      </div>
      <div className="login-content">
        <form onSubmit={handleLogin}>
          <center><img src="img/avatar.svg" alt="Avatar" /></center>
          <h2 className="title">Login</h2>

          <div className="input-div one">
            <div className="i">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <h5>Email</h5>
              <input
                type="email"
                className="input"
                value={email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-div pass">
            <div className="i">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div>
              <h5>Password</h5>
              <input
                type="password"
                className="input"
                value={password}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <center>
          <button type="submit" className="btn">Login</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;

