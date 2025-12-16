const features = [
  {
    id: 1,
    icon: "🛡️",
    title: "100%",
    text: "Hassle free Secured Trip"
  },
  {
    id: 2,
    icon: "👍✨",
    title: "25000+",
    text: "Quality cars in the city"
  },
  {
    id: 3,
    icon: "🌍",
    title: "Delivery",
    text: "Anywhere, Anytime"
  },
  {
    id: 4,
    icon: "⏰",
    title: "Endless",
    text: "Pay by hour, drive limitless"
  }
];

const FeaturesBar = () => {
  return (
    <>
      <style>{`
        .feature-bar {
          background: #f8f8f8;
          padding: 30px 40px;
          display: flex;
          margin-top : 7rem;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          border-radius: 8px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 15px;
          position: relative;
        }

        .icon {
          font-size: 40px;
        }

        .text-box h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
        }

        .text-box p {
          margin: 0;
          font-size: 15px;
          color: #555;
        }

        .divider {
          width: 1px;
          height: 60px;
          background: #e0e0e0;
          margin-left: 25px;
        }

        @media (max-width: 768px) {
          .feature-bar {
            flex-direction: column;
            text-align: center;
          }

          .divider {
            display: none;
          }
        }
      `}</style>

      <section className="feature-bar">
        {features.map((f, index) => (
          <div key={f.id} className="feature-item">
            <div className="icon">{f.icon}</div>
            <div className="text-box">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>

            {/* Divider except last item */}
            {index !== features.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </section>
    </>
  );
};

export default FeaturesBar;

