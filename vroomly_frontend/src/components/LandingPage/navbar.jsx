import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (!open) return;

    const tl = gsap.timeline();

    tl.fromTo(
      drawerRef.current,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
    ).fromTo(
      linksRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.3 },
      "-=0.2"
    );

    return () => tl.kill();
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-[#eeeff1]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-medium bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent">
        Vroo<i className="ri-wheel-line mx-1 animate-spin-slow"></i>mly


        </h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-12 text-lg">
          {["Rent", "Services", "About", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <a href="#" className="text-gray-900">
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#fe5d3d] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-5">
          
          <button className="px-4 py-2 bg-[#474fa0] text-white rounded-md">
            Sign In
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          <i className={open ? "ri-close-large-fill" : "ri-menu-3-fill"}></i>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          ref={drawerRef}
          className="fixed inset-0 bg-[#d8dbe0] flex flex-col items-center pt-24 z-40"
        >
          <ul className="space-y-8 text-2xl">
            {["Rent", "Services", "About", "Contact"].map((item, i) => (
              <li key={item} ref={(el) => (linksRef.current[i] = el)}>
                <a href="#" className="flex items-center gap-3">
                  <i className="ri-arrow-right-line"></i> {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 mt-10">
            
            <button className="px-5 py-2 bg-[#474fa0] text-white rounded-md">
              Sign In
            </button>
          </div>


          
        </div>

        
      )}
    </nav>
  );
}
