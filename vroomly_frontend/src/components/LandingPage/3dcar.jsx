import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CarImage from "../../assets/pngwing.com.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, ease: "power2.out", delay: 0.4 }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.9 }
    );
  }, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-around bg-[#f1f3f6] overflow-hidden px-20 max-md:flex-col max-md:px-6">

      {/* LEFT TEXT (same as orange) */}
      <section
        ref={textRef}
        className="w-[34vw] space-y-6 max-md:w-full max-md:text-center"
      >
        <h1 className="text-5xl font-bold leading-tight text-gray-900 max-md:text-4xl">
          Drive your{" "}
          <span className="text-blue-900">Dream Car</span> Today
        </h1>

        <p className="text-gray-600">
          Rent the perfect car for any trip with Vroomly. Enjoy flexible
          options, great prices, and a hassle-free experience.
        </p>

        <div className="pt-6 max-md:flex max-md:justify-center">
          <button
            ref={buttonRef}
            className="
              px-8 py-4
              bg-blue-900
              text-white
              text-lg
              font-semibold
              rounded-xl
              shadow-lg
              flex items-center gap-2
              transition-all
              hover:bg-blue-800
              hover:scale-105
              active:scale-95
            "
          >
          <Link
  to="/chooseRole"
  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition"
>
  Get Started <span className="text-xl">→</span>
</Link>
          </button>
        </div>
      </section>

      {/* RIGHT VISUAL — EXACT ORANGE STRUCTURE */}
    <section className="relative flex items-center">

  {/* Blue background slab */}
  <div
    className="
      w-[48vw]
      h-[78vh]
      bg-gradient-to-br
      from-blue-900
      via-blue-800
      to-blue-700
      rounded-tl-[48px]
      rounded-tr-[48px]
      relative
      z-[1]
    "
  />

  {/* Car */}
  <img
    ref={imageRef}
    src={CarImage}
    alt="Car"
    className="
      absolute
      top-[90px]
      left-[45%]
      -translate-x-1/2
      w-[62vw]
      z-[3]
      drop-shadow-xl
    "
  />
</section>

    </main>
  );
}
