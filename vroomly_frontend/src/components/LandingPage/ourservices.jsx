import { useEffect, useState } from "react";
import car1 from "../../assets/images/Car1.png";
import car2 from "../../assets/images/Car2.png";
import car3 from "../../assets/images/Car3.png";
import car4 from "../../assets/images/Car4.png";
import car5 from "../../assets/images/Car5.png";
import car6 from "../../assets/images/Car6.png";

export default function Services() {
  const carImages = [car1, car2, car3, car4, car5, car6];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="w-[70vw] mx-auto py-16 max-lg:w-[95vw]">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="uppercase text-gray-700 text-sm tracking-wider">
          Our Services
        </h2>
        <h3 className="text-3xl font-semibold mt-3 max-md:text-xl">
          We Ensure the Best{" "}
          <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
            Customer Experience
          </span>
        </h3>
      </div>

      {/* Features */}
      <div className="flex items-center justify-center gap-12 max-lg:flex-col">
        {/* Left Column */}
        <div className="flex flex-col gap-14 max-md:gap-8">
          <Feature icon="ri-money-rupee-circle-fill" text="Competitive Pricing" />
          <Feature icon="ri-wallet-3-fill" text="Easier Rent On Your Budget" />
          <Feature icon="ri-bank-card-fill" text="Most Flexible Payment Plans" />
        </div>

        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src={carImages[current]}
            alt="Car"
            className="max-w-[44vw] object-contain -rotate-90 transition-all duration-500
                       max-lg:rotate-0 max-lg:max-w-[90vw]"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-14 max-md:gap-8">
          <Feature icon="ri-medal-fill" text="Best Extended Auto Warranties" />
          <Feature icon="ri-user-star-fill" text="Roadside Assistance 24/7" />
          <Feature icon="ri-taxi-wifi-fill" text="Your Choice Of Mechanic" />
        </div>
      </div>
    </section>
  );
}

/* Reusable Feature Card */
function Feature({ icon, text }) {
  return (
    <div
      className="text-center transition-transform hover:-translate-y-1
                 max-md:bg-gradient-to-br max-md:from-[#f0f5fa] max-md:to-[#dbdcdd]
                 max-md:px-8 max-md:py-5 max-md:rounded-xl max-md:shadow-lg"
    >
      <div
        className="bg-[#eeeff1] w-fit mx-auto p-3 rounded-lg border-4 border-white
                   shadow-md hover:shadow-xl transition"
      >
        <i className={`${icon} text-2xl text-[#fe5d3d]`}></i>
      </div>
      <h4 className="mt-3 text-lg font-medium max-md:text-base">{text}</h4>
    </div>
  );
}
