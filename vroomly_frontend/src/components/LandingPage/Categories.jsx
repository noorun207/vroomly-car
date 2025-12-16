import React from "react";

export default function Categories() {
  return (
    <>
      <style>{`
        .categories-section {
          width: 100%;
          margin-left: 7rem;
          padding: 30px 42px;
          box-sizing: border-box;
        }

        /* ORIGINAL DESKTOP GRID */
        .categories-grid {
          display: grid;
          grid-template-columns: 26% 22% 12% 12%;
          grid-template-rows: 190px 190px;
          gap: 22px;
        }

        /* Grid positions */
        .left-card { grid-column: 1 / 2; grid-row: 1 / span 2; }
        .delivery  { grid-column: 2 / 3; grid-row: 1 / 2; }
        .toprated  { grid-column: 2 / 3; grid-row: 2 / 3; }
        .budget    { grid-column: 3 / 4; grid-row: 1 / span 2; }
        .suv       { grid-column: 4 / 5; grid-row: 1 / span 2; }

        .left-card {
          background: #f4f4f4;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .left-title {
          font-size: 56px;
          font-weight: 800;
          margin: 0;
          line-height: 1.1;
        }

        .card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 18px rgba(0,0,0,0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 18px 28px rgba(0,0,0,0.18);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-btn {
          position: absolute;
          bottom: 18px;
          left: 18px;
          padding: 10px 18px;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          background: rgba(20,20,20,0.85);
          color: #fff;
          backdrop-filter: blur(4px);
        }

        .card-btn.light { background: rgba(240,235,232,0.95); color: #222; }
        .card-btn.dark { background: rgba(15,15,15,0.95); color: #fff; }

        @media (max-width: 1440px) {
          .categories-grid {
            grid-template-columns: 30% 30% 30%;
            grid-template-rows: repeat(2, 190px);
          }

          .left-card { grid-column: 1 / 2; grid-row: 1 / 3; }
          .delivery  { grid-column: 2 / 3; }
          .toprated  { grid-column: 2 / 3; }
          .budget    { grid-column: 3 / 4; }
          .suv       { grid-column: 3 / 4; }
        }



        /* ==========================================================
           🟦  FIX BREAKPOINT 2 — TABLETS
           ========================================================== */
        @media (max-width: 1100px) {
          .categories-section { margin-left: 2rem; }

          .categories-grid {
            grid-template-columns: 1fr 1fr;
            gap: 22px;
          }

          .left-card,
          .delivery,
          .toprated,
          .budget,
          .suv {
            height: 220px;
            grid-column: span 1;
          }

          .left-title { font-size: 44px; }
        }



        /* ==========================================================
           🟦  FIX BREAKPOINT 3 — MOBILE
           ========================================================== */
        @media (max-width: 768px) {
          .categories-section {
            margin-left: 0;
            padding: 20px;
          }

          .categories-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .left-card { height: 180px; }

          .left-title {
            font-size: 32px;
            text-align: center;
          }

          .card { height: 220px; }
        }

      `}</style>

      <section className="categories-section">
        <div className="categories-grid">

          <div className="left-card">
            <h2 className="left-title">
              Top<br />Categories
            </h2>
          </div>

          <div className="card delivery">
            <img src="https://images.pexels.com/photos/4246200/pexels-photo-4246200.jpeg" />
            <button className="card-btn">Delivery ↗</button>
          </div>

          <div className="card budget">
            <img src="https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg" />
            <button className="card-btn light">Budget ↗</button>
          </div>

          <div className="card toprated">
            <img src="https://images.pexels.com/photos/5384625/pexels-photo-5384625.jpeg" />
            <button className="card-btn dark">Top Rated ↗</button>
          </div>

          <div className="card suv">
            <img src="https://images.pexels.com/photos/7994435/pexels-photo-7994435.jpeg" />
            <button className="card-btn">SUV ↗</button>
          </div>

        </div>
      </section>
    </>
  );
}
