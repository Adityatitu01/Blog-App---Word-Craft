import React, { useState } from "react";

function Login() {

   //------------------------------------------Objects----------------------------------------------------------//



 const signupInitialValues = {
  name : "",
  username : "",
  password : ""
 }




  //--------------------------------------useState-----------------------------------------------------//
  const [account, toggleAccount] = useState("login");
  const [signup,setSignup] = useState(signupInitialValues);





//---------------------------------------Image------------------------------------------------------//
  let imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";







console.log(signup)


//-------------------------------------Functions------------------------------------------------------//
  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e)=>{
      setSignup({...signup,[e.target.name]:e.target.value})
  }
 
  return (
    <div className="w-96 mx-auto p-6 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
      <div>
        <img src={imageURL} alt="login" className="w-24 mx-auto mt-12" />
        {account === "login" ? (
          <div className="px-8 py-6 flex flex-col">
            <input
              type="text"
              placeholder="Enter username"
              className="border-b border-gray-300 focus:border-blue-500 transition-all duration-300 outline-none py-2 mt-5 shadow-sm focus:shadow-md"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="border-b border-gray-300 focus:border-blue-500 transition-all duration-300 outline-none py-2 mt-5 shadow-sm focus:shadow-md"
            />
            <button className="bg-orange-500 text-white h-12 mt-5 rounded-lg transition-all duration-300 hover:bg-orange-600 transform hover:scale-105 shadow-md hover:shadow-lg">
              Login
            </button>
            <p className="text-center text-gray-500 text-sm my-5">OR</p>
            <button
              onClick={toggleSignup}
              className="bg-white text-blue-500 h-12 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-100 transform hover:scale-105"
            >
              Create an account?
            </button>
          </div>
        ) : (
          <div className="px-8 py-6 flex flex-col">
            <input 
              onChange={(e) => onInputChange(e)}
              name="name"
              type="text"
              placeholder="Enter Fullname"
              className="border-b border-gray-300 focus:border-blue-500 transition-all duration-300 outline-none py-2 mt-5 shadow-sm focus:shadow-md"
            />
            <input
             onChange={(e) => onInputChange(e)}
              name="username"
              type="text"
              placeholder="Enter Username"
              className="border-b border-gray-300 focus:border-blue-500 transition-all duration-300 outline-none py-2 mt-5 shadow-sm focus:shadow-md"
            />
            <input
             onChange={(e) => onInputChange(e)}
              name="password"
              type="password"
              placeholder="Enter Password"
              className="border-b border-gray-300 focus:border-blue-500 transition-all duration-300 outline-none py-2 mt-5 shadow-sm focus:shadow-md"
            />
            <button className="bg-white text-blue-500 h-12 mt-5 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-100 transform hover:scale-105">
              Signup
            </button>
            <p className="text-center text-gray-500 text-sm my-5">OR</p>
            <button
              onClick={toggleSignup}
              className="bg-orange-500 text-white h-12 rounded-lg transition-all duration-300 hover:bg-orange-600 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Already have an account
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
