// -------------------- CARS DATA --------------------
export const cars = [
  {
    id: 1,
    name: "Hyundai Creta",
    rating: 4.7,
    seaters: 5,
    transmission: "Manual",
    fuel: "Petrol",
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    ],
  },
  {
    id: 2,
    name: "Maruti Baleno",
    rating: 4.4,
    seaters: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    images: [
      "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    ],
  },
  {
    id: 3,
    name: "Honda City",
    rating: 4.6,
    seaters: 5,
    transmission: "Manual",
    fuel: "Diesel",
    images: [
      "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg",
      "https://images.pexels.com/photos/193021/pexels-photo-193021.jpeg",
    ],
  },
];

// -------------------- BOOKINGS DATA --------------------
export const bookings = [
  {
    id: 1,
    car: "Hyundai Creta",
    customer: "Manasa",
    location: "Gachibowli",
    from: "12 Jan 2025",
    to: "15 Jan 2025",
    status: "ongoing",
    earning: 5400,
  },
  {
    id: 2,
    car: "Maruti Baleno",
    customer: "Rahul",
    location: "Madhapur",
    from: "18 Jan 2025",
    to: "20 Jan 2025",
    status: "upcoming",
    earning: 3600,
  },
  {
    id: 3,
    car: "Hyundai Creta",
    customer: "Kiran",
    location: "Kondapur",
    from: "05 Jan 2025",
    to: "07 Jan 2025",
    status: "completed",
    earning: 4200,
  },
  {
    id: 4,
    car: "Hyundai Creta",
    customer: "Anjali",
    location: "Hitech City",
    from: "01 Jan 2025",
    to: "03 Jan 2025",
    status: "cancelled",
    earning: 0,
  },
];
