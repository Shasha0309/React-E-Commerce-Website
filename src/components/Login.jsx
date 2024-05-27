import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

//import SignInwithGoogle from "./signInWIthGoogle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate("/HomePage");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className=" bg-white h-screen flex flex-col items-center">
        <img  className=" mt-[-1px] mb-20 object-contain w-24 mx-auto" alt="logo"
        src={"../images/newnewlogo-.png"} />
    
      <div className=" w-250 h-auto p-5 border flex flex-col mt-[-60px] mb-10 rounded-lg border-gray-500">
      <h1 className="font-bold mb-5 mx-auto">Login</h1>
      <form onSubmit={handleSubmit}>
      <form>
        <h5 className="mb-2">Email address</h5>
        <input
        className="h-8 mb-3 bg-white w-full border-solid border-2 border-gray-800"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <h5 className="mb-2">Password</h5>
        <input
          className="h-8 mb-3 bg-white w-full border-solid border-2 border-gray-800"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </form>
        </form>
        <button type="submit" /*onClick={handleSubmit}*/ className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-300">
        <Link to={'/HomePage'}>Sign In </Link>
        </button>
        
      <p className="mt-5 text-sm break-words">By signing-in you agree to the Conditions of Use & Sale.</p>
        <button className='h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-400'><Link to={"/register"}>Create your Amazon Account</Link></button>
      </div>
    </div>
  );
}

export default Login;
