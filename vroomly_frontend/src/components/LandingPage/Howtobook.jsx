import React, { useState } from "react";

export default function HowToUse() {
  const [mode, setMode] = useState("guest");

  const guestSteps = [
    {
      image: "https://images.pexels.com/photos/4246200/pexels-photo-4246200.jpeg",
      title: "Download App",
    },
    {
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg",
      title: "Search and Book",
    },
    {
      image: "https://images.pexels.com/photos/3823483/pexels-photo-3823483.jpeg",
      title: "Verify Profile",
    },
    {
      image: "https://images.pexels.com/photos/7994435/pexels-photo-7994435.jpeg",
      title: "Enjoy Your Trip",
    },
  ];

  const hostSteps = [
    {
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg",
      title: "Download App",
    },
    {
      image: "https://images.pexels.com/photos/3823483/pexels-photo-3823483.jpeg",
      title: "Register & Create Account",
    },
    {
      image: "https://images.pexels.com/photos/5384625/pexels-photo-5384625.jpeg",
      title: "Upload Car Details",
    },
    {
      image: "https://images.pexels.com/photos/7994435/pexels-photo-7994435.jpeg",
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
