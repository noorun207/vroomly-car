import { bookings } from "./sellerData";

export default function Bookings() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        All Bookings
      </h2>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white p-5 rounded-lg shadow flex justify-between items-center"
          >
            {/* LEFT SECTION */}
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

            {/* RIGHT STATUS */}
            <StatusBadge status={booking.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- STATUS BADGE ---------- */
function StatusBadge({ status }) {
  const statusStyles = {
    ongoing: "bg-blue-100 text-blue-700",
    upcoming: "bg-green-100 text-green-700",
    completed: "bg-gray-200 text-gray-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-medium capitalize ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
