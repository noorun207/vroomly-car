import React, { useState } from "react";
import Lottie from "lottie-react";
import { useLocation, useNavigate } from "react-router-dom";
import desktopAnimation from "../assets/Sign up.json";
import mobileAnimation from "../assets/Login (1).json";
import logo from "../assets/logo.png";  
import axios from "axios";  

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const role = (location.state?.role || "user").toLowerCase();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleLogin = async (e) => {
  e.preventDefault();

  const normalizedEmail = formData.email.trim()

    try {
      const res = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: normalizedEmail,
          password: formData.password,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
console.log("Logging in with", formData);

    const role = res.data.user.role;

    // 🔀 Redirect based on role
    if (role === "customer") {
      navigate("/customerdashboard");
    } else if (role === "seller") {
      navigate("/sellerdashboard");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    }

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">

        {/* TOP LEFT LOGO */}
<div className="absolute top-6 left-6 flex items-center gap-2">
  <img
    src={logo}
    alt="Logo"
    className="w-8 h-8 md:w-10 md:h-10 object-contain"
  />
  <span className="text-lg md:text-xl font-semibold text-blue-900">
    VROOMLY
  </span>
</div>


      {/* LEFT – LOTTIE SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">

        {/* Desktop Animation */}
        <div className="hidden md:block w-3/4">
          <Lottie animationData={desktopAnimation} loop />
        </div>

        {/* Mobile Animation */}
        <div className=" block md:hidden w-3/5 mt-10">
          <Lottie animationData={mobileAnimation} loop />
        </div>
      </div>

      {/* RIGHT – LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-2">Welcome Back {role}</h2>
          <p className="text-gray-600 mb-8">
            Login to continue your journey
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-900 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <span
    onClick={() => navigate("/signup")}
    className="text-blue-900 font-medium cursor-pointer hover:underline">
   
              Sign up
            </span>
          </p>
        </div>
      </div>

    </div>
  );
}
