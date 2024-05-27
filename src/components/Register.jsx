import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate('/')
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    
        <div className=" bg-white h-screen flex flex-col items-center">

        <img  className=" mb-20 object-contain w-24 mx-auto mt-[-1px] " alt="logo1"
        src={"../images/newnewlogo-.png"} />
        <div className="w-250 h-auto p-5 border flex flex-col mt-[-60px] mb-10 rounded-lg border-gray-500 ">
      <h1 className="font-bold mb-5 mx-auto">Sign Up</h1>
      <form onSubmit={handleRegister}>
      <form>
        <h5 className="mb-2">First name</h5>
        <input
        className="h-8 mb-3 bg-white w-full border-solid border-2 border-gray-800"
          type="text"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />

        <h5 className="mb-2">Last name</h5>
        <input
        className="h-8 mb-3 bg-white w-full border-solid border-2 border-gray-800"
          type="text"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />

        <h5 className="mb-2">Email address</h5>
        <input
        className="h-8 mb-3 bg-white w-full border-solid border-2 border-gray-800"
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <h5 className="mb-2">Password</h5>
        <input
        className="h-8 mb-3 bg-white w-full border-solid border-2 border-gray-800"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      
        <button type="submit" onClick={handleRegister} className=" rounded-lg w-full h-10 px-5 mt-4 text-indigo-100 transition-colors duration-150 bg-yellow-400 focus:shadow-outline hover:bg-yellow-300">
        Sign Up
        </button>
        </form>
        </form>
      <p className="mt-5 text-sm">Already registered</p>
      <button className=" h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-400">
         <Link to={"/"}>Login</Link>
         </button>
      </div>
      </div>
    
  );
}
export default Register;