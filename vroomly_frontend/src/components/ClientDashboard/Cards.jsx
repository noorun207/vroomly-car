import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Users } from "lucide-react";

export default function CarCard({ car }) {
  const [current, setCurrent] = useState(0);

  const images = car.images?.length
    ? car.images
    : ["/cars/default.png"];

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      
      {/* IMAGE SLIDER */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={images[current]}
          alt={car.name}
          className="w-full h-full object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">
        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900">
          {car.name}
        </h3>
        <p className="text-sm text-gray-500">
          by {car.owner}
        </p>

        {/* INFO */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-blue-900 font-semibold">
              ₹{car.price}/day
            </p>
            <p className="text-sm text-gray-600">
              {car.transmission}
            </p>
          </div>

          <div className="text-right space-y-1">
            <div className="flex items-center gap-1 justify-end text-sm">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{car.rating}</span>
            </div>

            <div className="flex items-center gap-1 justify-end text-sm text-gray-600">
              <Users size={14} />
              <span>{car.seats} Seats</span>
            </div>
          </div>
        </div>

        {/* BOOK NOW BUTTON */}
        <button
          className="
            mt-5
            w-full
            bg-blue-900
            text-white
            py-3
            rounded-lg
            font-semibold
            transition
            hover:bg-blue-800
            active:scale-95
          "
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
 