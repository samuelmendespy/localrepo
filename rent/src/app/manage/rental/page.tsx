"use client";
import { useState } from "react";

const sampleCar: Car = {
  id: 1,
  minimun_salary: 300,
  name: "Santa Fé",
};

const sampleUser: Renter = {
  id: 1,
  name: "John Doe",
  salary: 300,
};

const rentals: Rental[] = [
  {
    id: 1,
    car: sampleCar,
    renter: sampleUser,
    start_date: "2025-02-01",
    end_date: "2025-02-07",
  },
  {
    id: 2,
    car: sampleCar,
    renter: sampleUser,
    start_date: "2025-02-10",
    end_date: "2025-02-14",
  },
  {
    id: 3,
    car: sampleCar,
    renter: sampleUser,
    start_date: "2025-02-15",
    end_date: "2025-02-20",
  },
  {
    id: 4,
    car: sampleCar,
    renter: sampleUser,
    start_date: "2025-02-18",
    end_date: "2025-02-22",
  },
  {
    id: 5,
    car: sampleCar,
    renter: sampleUser,
    start_date: "2025-02-21",
    end_date: "2025-02-28",
  },
];

export default function RentalPage() {
  const [sortedRentals, setSortedRentals] = useState<Rental[]>(rentals);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...sortedRentals].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedRentals(sorted);
    setSortConfig({ key, direction });
  };

  return <div className="container">Rentals here</div>;
}
