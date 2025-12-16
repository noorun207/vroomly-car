import { bookings, cars } from "./sellerData";

export default function StatsCards() {
  const completedBookings = bookings.filter(
    (b) => b.status === "completed"
  );

  const totalEarnings = completedBookings.reduce(
    (sum, b) => sum + b.earning,
    0
  );

  const activeBookings = bookings.filter(
    (b) => b.status === "ongoing"
  ).length;

  const avgRating =
    cars.reduce((sum, c) => sum + c.rating, 0) / cars.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      <Card title="Total Earnings 💰" value={`₹${totalEarnings}`} />
      <Card title="Cars Listed 🚗" value={cars.length} />
      <Card title="Active Bookings 📅" value={activeBookings} />
      <Card title="Rating ⭐" value={avgRating.toFixed(1)} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <p className="text-gray-500 mb-1">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
