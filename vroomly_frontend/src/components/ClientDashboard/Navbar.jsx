import { NavLink } from "react-router-dom";
import LogoIcon from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-100 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* STATIC LOGO (BIGGER, NO BACKGROUND) */}
        <div className="flex items-center gap-3 select-none cursor-default">
          <img
            src={LogoIcon}
            alt="Vroomly logo"
            className="w-12 h-12 object-contain"
          />

          <span
            className="
              text-2xl
              font-extrabold
              tracking-wide
              bg-gradient-to-r
              from-blue-700
              to-blue-900
              bg-clip-text
              text-transparent
            "
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Vroomly
          </span>
        </div>

        {/* Navigation */}
        <ul className="flex gap-8 text-sm font-medium text-gray-700">
          <NavItem to="/client" label="Dashboard" />
          <NavItem to="/client/my-rides" label="My Rides" />
          <NavItem to="/client/payments" label="Payments" />
          <NavItem to="/client/profile" label="Profile" />
        </ul>
      </div>
    </nav>
  );
}

/* -------- Reusable Nav Item -------- */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative transition ${
          isActive ? "text-blue-700" : "hover:text-blue-700"
        }`
      }
    >
      <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 after:w-0 hover:after:w-full">
        {label}
      </span>
    </NavLink>
  );
}
