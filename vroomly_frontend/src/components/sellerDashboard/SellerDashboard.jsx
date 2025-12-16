import { bookings } from "./sellerData";
// import SellerNavbar from "./SellerNavbar";

export default function SellerDashboard() {
  // Only show ongoing & upcoming on dashboard
  const dashboardBookings = bookings.filter(
    (b) => b.status === "ongoing" || b.status === "upcoming"
  );

  // Calculate totals
  const totalEarnings = bookings
    .filter((b) => b.status === "completed")
    .reduce((sum, b) => sum + b.earning, 0);

  const activeBookings = bookings.filter(
    (b) => b.status === "ongoing"
  ).length;

  return (
    <>
      {/* <SellerNavbar /> */}

    <div className="p-6 max-w-7xl mx-auto">

      {/* ---------- STATS ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Earnings 💰" value={`₹${totalEarnings}`} />
        <StatCard title="Cars Listed 🚗" value="3" />
        <StatCard title="Active Bookings 🗓️" value={activeBookings} />
        <StatCard title="Rating ⭐" value="4.6" />
      </div>

      {/* ---------- BOOKINGS ---------- */}
      <h2 className="text-2xl font-semibold mb-4">
        Ongoing & Upcoming Bookings
      </h2>

      <div className="space-y-4">
        {dashboardBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white p-5 rounded-lg shadow flex justify-between items-center"
          >
            {/* LEFT */}
            <div>
              <h3 className="text-lg font-semibold">
                {booking.car}
              </h3>

              <p className="text-sm text-gray-600">
                {booking.customer} • {booking.location}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                📅 {booking.from} → {booking.to}
              </p>
            </div>

            {/* RIGHT */}
            <StatusBadge status={booking.status} />
          </div>
        ))}
      </div>
    </div>

    </>
  );
}

/* ---------- COMPONENTS ---------- */










function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    ongoing: "bg-blue-100 text-blue-700",
    upcoming: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}
