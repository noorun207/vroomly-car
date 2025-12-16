import { useEffect, useState } from "react";
import axios from "axios";
import mockCars from "../components/ClientDashboard/cars.jsx"; 
import CarCard from "../components/ClientDashboard/Cards.jsx";
import Navbar from "../components/ClientDashboard/Navbar.jsx";




export default function CustomerDashboard() {
  const [location, setLocation] = useState("Detecting...");
  const [filteredCars, setFilteredCars] = useState(mockCars);

  // Filters
  const [seats, setSeats] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuel, setFuel] = useState("");
  const [maxPrice, setMaxPrice] = useState(50000);

  // 🌍 Detect Location
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Unknown");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await axios.get(
            "https://nominatim.openstreetmap.org/reverse",
            {
              params: {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                format: "json",
              },
            }
          );

          const addr = res.data.address;
          setLocation(addr.city || addr.state || "Unknown");
        } catch {
          setLocation("Unknown");
        }
      },
      () => setLocation("Unknown")
    );
  }, []);

  // 🔍 Search Logic
  const handleSearch = () => {
    const results = mockCars.filter((car) => {
      return (
        car.city?.toLowerCase().includes(location.toLowerCase()) &&
        (!seats || car.seats === Number(seats)) &&
        (!transmission || car.transmission === transmission) &&
        (!fuel || car.fuel === fuel) &&
        car.price <= maxPrice
      );
    });

    setFilteredCars(results);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f6f7fb] px-8 py-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Welcome, Manasa</h1>
          <p className="text-gray-600">Plan your trip and rent a car easily.</p>
        </div>

        {/* Search Section */}
<div className="bg-white rounded-2xl shadow-md p-8 grid grid-cols-2 gap-8 max-lg:grid-cols-1">

  {/* LEFT COLUMN */}
  <div className="space-y-6">

    {/* Location */}
    <div>
      <label className="block text-sm font-semibold mb-2">
        Pickup & Drop Location
      </label>
      <input
  type="text"
  placeholder="Enter city (e.g. Hyderabad)"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

    </div>

    {/* Pickup Date & Time */}
    <div>
      <label className="block text-sm font-semibold mb-2">
        Pickup Date & Time
      </label>
      <div className="grid grid-cols-2 gap-4">
        <input type="date" className="border rounded-xl px-4 py-3" />
        <input type="time" className="border rounded-xl px-4 py-3" />
      </div>
    </div>

    {/* Drop Date & Time */}
    <div>
      <label className="block text-sm font-semibold mb-2">
        Drop Date & Time
      </label>
      <div className="grid grid-cols-2 gap-4">
        <input type="date" className="border rounded-xl px-4 py-3" />
        <input type="time" className="border rounded-xl px-4 py-3" />
      </div>
    </div>

  </div>

  {/* RIGHT COLUMN */}
  <div className="space-y-6">

    {/* Seats */}
    <div>
      <label className="block text-sm font-semibold mb-2">
        Car Seats
      </label>
      <select
        className="w-full border rounded-xl px-4 py-3"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      >
        <option value="">Select seats</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="9">9</option>
      </select>
    </div>

    {/* Transmission */}
    <div>
      <label className="block text-sm font-semibold mb-2">
        Transmission
      </label>
      <select
        className="w-full border rounded-xl px-4 py-3"
        value={transmission}
        onChange={(e) => setTransmission(e.target.value)}
      >
        <option value="">Select transmission</option>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
      </select>
    </div>

    {/* Fuel */}
    <div>
      <label className="block text-sm font-semibold mb-2">
        Fuel Type
      </label>
      <select
        className="w-full border rounded-xl px-4 py-3"
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
      >
        <option value="">Select fuel</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="EV">EV</option>
      </select>
    </div>

    {/* Price */}
    <div>
      <label className="block text-sm font-semibold mb-2">
        Max Price: ₹{maxPrice}
      </label>
      <input
        type="range"
        min="4000"
        max="50000"
        step="500"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
    </div>

  </div>
</div>


        {/* Search Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSearch}
            className="px-10 py-4 bg-blue-900 text-white rounded-xl text-lg hover:bg-blue-800"
          >
            Search Cars
          </button>
        </div>

        {/* Results */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-6">
            Available Cars near {location}
          </h2>

          {filteredCars.length === 0 ? (
            <p className="text-gray-500">No cars found 🚫</p>
          ) : (
            <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
