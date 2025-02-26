import { NextResponse } from "next/server";

export async function GET() {
  const rentals: Rental[] = await fetchRentalsFromServer();

  return NextResponse.json(rentals);
}

// Rentals list
async function fetchRentalsFromServer() {
  const rentalList: Rental[] = [
    {
      id: 1,
      carPlate: "AA10200",
      renterName: "John Doe 1",
      startDate: "2025-02-01",
      endDate: "2025-02-07",
    },
    {
      id: 2,
      carPlate: "BB10200",
      renterName: "John Doe 2",
      startDate: "2025-02-10",
      endDate: "2025-02-14",
    },
    {
      id: 3,
      carPlate: "CC10200",
      renterName: "John Doe 3",
      startDate: "2025-02-15",
      endDate: "2025-02-20",
    },
    {
      id: 4,
      carPlate: "DD10200",
      renterName: "John Doe 4",
      startDate: "2025-02-18",
      endDate: "2025-02-22",
    },
    {
      id: 5,
      carPlate: "EE10200",
      renterName: "John Doe 5",
      startDate: "2025-02-21",
      endDate: "2025-02-28",
    },
  ];

  return rentalList;
}

export async function POST(request: Request) {
  try {
    const { renter_name, car_plate, start_date, end_date } =
      await request.json();

    const rental = {
      renterName: renter_name,
      carPlate: car_plate,
      startDate: new Date(start_date),
      endDate: new Date(end_date),
    };

    return NextResponse.json(
      {
        sucess: true,
        message: "Rental registered sucessfully",
        data: rental,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { sucess: false, message: "Internal server error", error: error },
      { status: 500 }
    );
  }
}
