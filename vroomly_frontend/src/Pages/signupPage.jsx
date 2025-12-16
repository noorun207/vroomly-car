

  import React, { useState } from "react";
  import Lottie from "lottie-react";
  import { useLocation, useNavigate } from "react-router-dom";
  import axios from "axios";
  import animationData from "../assets/Login.json";

  export default function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    // const role = location.state?.role || "customer";
    const role = (location.state?.role || "customer").toLowerCase();


    const [showPasswordRules, setShowPasswordRules] = useState(false);



    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const [emailError, setEmailError] = useState("");
const [passwordChecks, setPasswordChecks] = useState({
  length: false,
  uppercase: false,
  lowercase: false,
  number: false,
  special: false,
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  // Email validation
  if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? "" : "Please enter a valid email address");
  }

  // Password validation
  if (name === "password") {
     setShowPasswordRules(value.length > 0);


    setPasswordChecks({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      special: /[^A-Za-z0-9]/.test(value),
    });
  }
};


    const handleSignup = async (e) => {

      e.preventDefault();

      if (emailError || Object.values(passwordChecks).includes(false)) {
  return alert("Please meet all input requirements");
}


      try {
        const res = await axios.post(
          "http://localhost:4000/api/users/signup",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
             confirmPassword: formData.confirmPassword,
            role,
          },
          { withCredentials: true }
        );

        alert("Signup successful 🎉");

        // Redirect based on role
        navigate("/login");
      } catch (err) {
        alert(err.response?.data?.message || "Signup failed");
      }
    };

    return (
      <div className="w-full h-screen flex bg-white">
        {/* LEFT */}
        <div className="w-1/2 flex items-center justify-center bg-gray-100">
          <Lottie animationData={animationData} loop className="w-3/4 h-3/4" />
        </div>

        {/* RIGHT */}
        <div className="w-1/2 flex items-center justify-center px-10">
          <form
            onSubmit={handleSignup}
            className="w-full max-w-md space-y-5"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome to Vroomly! {role}
            </h2>

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
            <input
  name="email"
  type="email"
  placeholder="Email"
  onChange={handleChange}
  className={`w-full p-3 border rounded-lg ${
    emailError ? "border-red-500" : ""
  }`}
/>

{emailError && (
  <p className="text-sm text-red-500">{emailError}</p>
)}



            <input
  name="password"
  type="password"
  placeholder="Password"
  onChange={handleChange}
  className="w-full p-3 border rounded-lg"
/>
{showPasswordRules && (
  <div className="text-sm space-y-1">
    <p className={passwordChecks.length ? "text-green-600" : "text-gray-500"}>
      ✓ At least 8 characters
    </p>
    <p className={passwordChecks.uppercase ? "text-green-600" : "text-gray-500"}>
      ✓ Contains uppercase letter
    </p>
    <p className={passwordChecks.lowercase ? "text-green-600" : "text-gray-500"}>
      ✓ Contains lowercase letter
    </p>
    <p className={passwordChecks.number ? "text-green-600" : "text-gray-500"}>
      ✓ Contains number
    </p>
    <p className={passwordChecks.special ? "text-green-600" : "text-gray-500"}>
      ✓ Contains special character
    </p>
  </div>
)}



            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-800 transition"
            >
              Sign Up
            </button>

                     <p className="text-center text-sm text-gray-600">
  Already have an account?{" "}
  <span
    onClick={() => navigate("/login", { state: { role } })}
    className="text-blue-900 font-medium cursor-pointer hover:underline"
  >
    Login
  </span>
</p>
          </form>

 

        </div>
        
      </div>
    );
  }
