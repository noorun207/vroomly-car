

import { User, Store } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import movingCar from "../assets/Sedan car animation.json";

export default function LoginChoiceCards() {
  const navigate = useNavigate();

  const handleClick = (role) => {
    navigate("/signup", { state: { role } }); // pass role in state
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 gap-10 overflow-hidden">
      {/* Moving car animation */}
      <div className="fixed bottom-0 left-0 w-full h-56 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-2"
          style={{ width: "260px" }}
          initial={{ x: -360 }}
          animate={{ x: "calc(100vw + 260px)" }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Lottie
            animationData={movingCar}
            loop
            style={{
              filter: "brightness(1.05) contrast(1.05)",
            }}
          />
        </motion.div>
      </div>

      {/* Login cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {/* Customer Card */}
        <div
          className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition cursor-pointer p-6 flex flex-col items-center text-center"
        >
          <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <User className="h-7 w-7" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Customer Login</h2>
          <p className="text-gray-600 mb-4">
            Browse products, place orders, and track your purchases.
          </p>
          <button
            onClick={() => handleClick("Customer")}
            className="mt-auto px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Continue as Customer
          </button>
        </div>

        {/* Seller Card */}
        <div
          className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition cursor-pointer p-6 flex flex-col items-center text-center"
        >
          <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <Store className="h-7 w-7" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Seller Login</h2>
          <p className="text-gray-600 mb-4">
            Manage products, view orders, and track your sales.
          </p>
          <button
            onClick={() => handleClick("Seller")}
            className="mt-auto px-6 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Continue as Seller
          </button>
        </div>
      </div>
    </div>
  );
}
