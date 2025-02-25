import { NextResponse } from "next/server";

export async function GET() {
  const cars: Renter[] = [
    { id: 1, name: "Hyundai Santa Fe", salary: 250 },
    { id: 2, name: "JEEP Grand Cheroke", salary: 250 },
    { id: 3, name: "Ford Escape", salary: 220 },
    { id: 4, name: "Toyota RAV4", salary: 240 },
    { id: 5, name: "Kia Rio", salary: 300 },
  ];

  return NextResponse.json(cars);
}
