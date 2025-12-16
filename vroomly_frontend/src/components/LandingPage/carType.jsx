import React from "react";

export default function CarType() {
  return (
    <>
      <style>{`
        .car-type-container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          text-align: center;
        }

        .title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #555;
          font-size: 18px;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .car-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }

        .car-card {
          background: #fff;
          border-radius: 10px;
          padding: 25px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .car-card h2 {
          margin-bottom: 10px;
          font-size: 22px;
        }

        .car-card p {
          color: #666;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .car-card button {
          padding: 10px 20px;
          background-color: black;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }

        .car-card button:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="car-type-container">
        <h1 className="title">Perfect Car for Every Journey in India</h1>

        <p className="subtitle">
          Whether you're traveling with family, heading out for a solo trip, or simply
          looking for a great drive in a premium car, Zoomcar offers the best
          alternatives to car rentals in 30,000+ options.
        </p>

        <div className="car-grid">
          <div className="car-card">
            <h2>Sedans</h2>
            <p>
              Perfect for road trips with family or group outings. Spacious and comfortable
              for 6–7 passengers.
            </p>
            <button>RENT SEDANS IN INDIA</button>
          </div>

          <div className="car-card">
            <h2>Hatchbacks</h2>
            <p>
              Affordable, convenient, and economical. Easy to park and great for city rides.
            </p>
            <button>HATCHBACKS IN INDIA</button>
          </div>

          <div className="car-card">
            <h2>Electric Cars</h2>
            <p>
              Go green with the latest EV technology. Save fuel costs and enjoy smooth driving.
            </p>
            <button>EVS IN INDIA</button>
          </div>

          <div className="car-card">
            <h2>SUVs and Family Cars</h2>
            <p>
              Spacious and comfortable for family trips and long-distance travel with 6–7
              passengers.
            </p>
            <button>SUVS IN INDIA</button>
          </div>
        </div>
      </div>
    </>
  );
}
