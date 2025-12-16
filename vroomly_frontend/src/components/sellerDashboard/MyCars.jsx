import { useState } from "react";
import { cars,bookings } from "./sellerData.js";

export default function MyCars() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">My Cars 🚗</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => {
          // 🔥 COUNT COMPLETED TRIPS FOR THIS CAR
          const completedTrips = bookings.filter(
            (b) =>
              b.car === car.name && b.status === "completed"
          ).length;

          return (
            <CarCard
              key={car.id}
              car={car}
              trips={completedTrips}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- CAR CARD ---------------- */

function CarCard({ car, trips }) {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i + 1) % car.images.length);

  const prev = () =>
    setIndex((i) => (i === 0 ? car.images.length - 1 : i - 1));

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* IMAGE CAROUSEL */}
      <div className="relative h-44">
        <img
          src={car.images[index]}
          alt={car.name}
          className="h-full w-full object-cover"
        />

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ›
        </button>
      </div>

      {/* DETAILS */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{car.name}</h3>

        <p className="text-yellow-500 text-sm mb-2">
          ⭐ {car.rating} • {trips} trips
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <p>👥 {car.seaters} Seater</p>
          <p>⚙️ {car.transmission}</p>
          <p>⛽ {car.fuel}</p>
        </div>
      </div>
    </div>
  );
}
