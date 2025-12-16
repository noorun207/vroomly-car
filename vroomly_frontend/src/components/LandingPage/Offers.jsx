import React, { useState } from "react";

const offersData = [
  { id: 1, code: "WINTER50", title: "Valid on First Come, First Serve basis", tag: "Get 50% OFF!", tagColor: "#0b2d0b" },
  { id: 2, code: "FREEHD", title: "Get Zoomcar delivered to your doorstep for free", tag: "Free Home Delivery!", tagColor: "#0b2d0b" },
  { id: 3, code: "REFER100", title: "Invite friends and earn ₹100 wallet credits", tag: "Hot", tagColor: "#008000" },
  { id: 4, code: "SAVE20", title: "Flat 20% OFF on long trips!", tag: "Limited Offer", tagColor: "#0b2d0b" }
];

export default function Offers() {
  const [index, setIndex] = useState(0);

  const visibleCards = window.innerWidth < 768 ? 1 : 2; // 🔥 Responsive logic

  const nextSlide = () => {
    if (index + visibleCards < offersData.length) {
      setIndex(index + visibleCards);
    }
  };

  const prevSlide = () => {
    if (index - visibleCards >= 0) {
      setIndex(index - visibleCards);
    }
  };

  const visibleOffers = offersData.slice(index, index + visibleCards);

  return (
    <>
      <style>{`
        .offers-container {
          text-align: center;
          margin-top: 40px;
        }

        .offers-heading {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .slider-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cards-wrapper {
          display: flex;
          gap: 25px;
        }

        .offer-card {
          width: 390px;
          min-height: 260px;
          background: #fff;
          border-radius: 12px;
          padding: 25px;
          position: relative;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
          text-align: left;
        }

        .tag-box {
          position: absolute;
          top: 0;
          right: 0;
          padding: 10px 16px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          border-bottom-left-radius: 12px;
        }

        .offer-code {
          font-size: 22px;
          font-weight: 700;
          margin-top: 45px;
        }

        .offer-title {
          margin-top: 12px;
          font-size: 15px;
          color: #333;
        }

        .book-btn {
          margin-top: 20px;
          padding: 10px 18px;
          background: #0a58ca;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }

        .nav-btn {
          width: 50px;
          height: 50px;
          background: #fff;
          border: none;
          border-radius: 50%;
          font-size: 22px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          cursor: pointer;
        }

        .nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .left { margin-right: 20px; }
        .right { margin-left: 20px; }

        .dots {
          margin-top: 15px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #bbb;
          border-radius: 50%;
        }

        .dot.active {
          background: green;
          width: 12px;
        }

        /* ============================
           📱 MOBILE RESPONSIVE FIXES
        ============================ */
        @media (max-width: 900px) {
          .offer-card {
            width: 320px;
          }
        }

        @media (max-width: 768px) {
          .cards-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .offer-card {
            width: 85%;
            min-width: 260px;
          }

          .nav-btn {
            margin: 10px;
          }

          .slider-container {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>

      <div className="offers-container">
        <h2 className="offers-heading">Trending offers</h2>

        <div className="slider-container">
          <button className="nav-btn left" onClick={prevSlide} disabled={index === 0}>
            &#8249;
          </button>

          <div className="cards-wrapper">
            {visibleOffers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="tag-box" style={{ background: offer.tagColor }}>
                  {offer.tag}
                </div>

                <h3 className="offer-code">{offer.code}</h3>
                <p className="offer-title">{offer.title}</p>

                <button className="book-btn">BOOK NOW</button>
              </div>
            ))}
          </div>

          <button
            className="nav-btn right"
            onClick={nextSlide}
            disabled={index + visibleCards >= offersData.length}
          >
            &#8250;
          </button>
        </div>

        <div className="dots">
          {Array.from({ length: Math.ceil(offersData.length / visibleCards) }).map((_, i) => (
            <div key={i} className={`dot ${i === index / visibleCards ? "active" : ""}`}></div>
          ))}
        </div>
      </div>
    </>
  );
}
