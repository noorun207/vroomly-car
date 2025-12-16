import { NavLink } from "react-router-dom";

export default function SellerNavbar() {
  return (
    <nav className="w-full bg-blue-100 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* Logo (Dashboard opens by default) */}
      <NavLink to="/sellerdashboard" className="text-lg font-semibold text-blue-700">
  CarRental Host
</NavLink>

<ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
  <NavItem to="/sellerdashboard/my-cars" label="My Cars" />
  <NavItem to="/sellerdashboard/bookings" label="Bookings" />
  <NavItem to="/sellerdashboard/earnings" label="Earnings" />
  <NavItem to="/sellerdashboard/profile" label="Profile" />
</ul>
      </div>
    </nav>
  );
}

/* ---------- Reusable Nav Item ---------- */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative pb-1 transition ${
          isActive
            ? "text-blue-700 after:w-full"
            : "hover:text-blue-700 after:w-0 hover:after:w-full"
        } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300`
      }
    >
      {label}
    </NavLink>
  );
}
