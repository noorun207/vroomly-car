import React, { useState } from "react";

export default function HowToUse() {
  const [mode, setMode] = useState("guest");

  const guestSteps = [
    {
      image: "https://images.unsplash.com/photo-1585433013633-75f802e06715?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Download App",
    },
    {
      image: "https://images.unsplash.com/photo-1726066012751-2adfb5485977?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Search and Book",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661319080445-5e33f023fa63?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Verify Profile",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1658506667598-81820a9b362c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Enjoy Your Trip",
    },
  ];

  const hostSteps = [
    {
      image: "https://images.unsplash.com/photo-1731533281237-19d9677324f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Download App",
    },
    {
      image: "https://images.unsplash.com/photo-1622868773005-a27653f64570?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Register & Create Account",
    },
    {
      image: "https://images.unsplash.com/photo-1655658299560-78079eb8efa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Upload Car Details",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661384338206-853a1fa3be6e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Start Getting Bookings",
    },
  ];

  const steps = mode === "guest" ? guestSteps : hostSteps;

  return (
    <>
      <style>{`
        .wrapper {
          padding: 40px 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        /* Toggle Buttons */
        .toggle-box {
          display: flex;
          width: 280px;
          background: #f0f0f0;
          margin: auto;
          border-radius: 40px;
          padding: 5px;
        }

        .toggle-btn {
          flex: 1;
          padding: 10px 0;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
          color: #333;
        }

        .active-toggle {
          background: rgb(5, 5, 141);
          color: white;
        }

        /* Title */
        .title {
          font-size: 30px;
          font-weight: 700;
          margin: 35px 0;
        }

        /* Cards Grid */
        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .step-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          padding-bottom: 20px;
          transition: 0.3s ease;
          cursor: pointer;
        }

        .step-card:hover {
          transform: translateY(-6px);
        }

        .step-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 18px 18px 0 0;
        }

        .step-title {
          margin-top: 15px;
          font-size: 18px;
          font-weight: 600;
        }

        /* =============== RESPONSIVE FIXES =============== */

        /* Large Tablets (3 cards) */
        @media (max-width: 1100px) {
          .steps-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Tablets (2 cards) */
        @media (max-width: 900px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Phones (1 card) */
        @media (max-width: 600px) {
          .steps-container {
            grid-template-columns: 1fr;
          }

          .step-card {
            width: 100%;
            margin: auto;
          }

          .step-image {
            height: 200px;
          }

          .title {
            font-size: 26px;
          }

          .toggle-box {
            width: 220px;
          }
        }
      `}</style>

      <div className="wrapper">
        {/* Toggle */}
        <div className="toggle-box">
          <div
            className={`toggle-btn ${mode === "guest" ? "active-toggle" : ""}`}
            onClick={() => setMode("guest")}
          >
            GUEST
          </div>

          <div
            className={`toggle-btn ${mode === "host" ? "active-toggle" : ""}`}
            onClick={() => setMode("host")}
          >
            HOST
          </div>
        </div>

        <h2 className="title">
          {mode === "guest"
            ? "How to book a car on Zoomcar"
            : "How to host a car on Zoomcar"}
        </h2>

        {/* Responsive Grid */}
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <img src={step.image} alt={step.title} className="step-image" />
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
