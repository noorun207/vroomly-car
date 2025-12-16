import { bookings } from "./sellerData";

export default function Earnings() {
  const completed = bookings.filter(
    (b) => b.status === "completed"
  );

  const total = completed.reduce((sum, b) => sum + b.earning, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">
        Earnings Breakdown 💸
      </h2>

      {completed.map((b) => (
        <div
          key={b.id}
          className="bg-white p-5 rounded-lg shadow mb-4 flex justify-between"
        >
          <div>
            <h3 className="font-semibold">{b.car}</h3>
            <p className="text-sm text-gray-500">
              {b.from} → {b.to}
            </p>
          </div>

          <p className="font-bold text-green-700">
            ₹{b.earning}
          </p>
        </div>
      ))}

      <div className="mt-6 text-right font-bold text-lg">
        Total: ₹{total}
      </div>
    </div>
  );
}
