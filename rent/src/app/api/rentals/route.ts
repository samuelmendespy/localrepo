import { NextResponse } from "next/server";

const sampleCar: Car = {
  id: 1,
  minimun_salary: 300,
  name: "Santa Fé",
};

const sampleCar2: Car = {
  id: 1,
  minimun_salary: 300,
  name: "Toyota Prius",
};

const sampleUser: Renter = {
  id: 1,
  name: "John Doe",
  salary: 300,
};

export async function GET() {
  const rentals: Rental[] = await fetchRentalsFromServer();

  return NextResponse.json(rentals);
}

// Rentals list
async function fetchRentalsFromServer() {
  return [
    {
      id: 1,
      car: sampleCar,
      renter: sampleUser,
      start_date: "2025-02-01",
      end_date: "2025-02-07",
    },
    {
      id: 2,
      car: sampleCar2,
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
}

export async function POST(request: Request) {
  const { eventName, eventPlace, startDate, endDate } = await request.json();
  console.log("Received event data:", {
    eventName,
    eventPlace,
    startDate,
    endDate,
  });

  const event = {
    event_name: eventName,
    event_place: eventPlace,
    start_place: startDate,
    end_date: endDate,
  };

  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const { renter_name, car_plate, start_date, end_date } = data;
  return NextResponse.json(
    {
      sucess: true,
      message: "Rental registered sucessfully",
      data: { event },
    },
    { status: 201 }
  );
}
