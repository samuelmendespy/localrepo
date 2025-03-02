import { NextResponse } from "next/server";

const cars: Car[] = [
  { id: 1, plate: "Hyundai Santa Fe", minimun_salary: 250 },
  { id: 2, plate: "JEEP Grand Cheroke", minimun_salary: 250 },
  { id: 3, plate: "Ford Escape", minimun_salary: 220 },
  { id: 4, plate: "Toyota RAV4", minimun_salary: 240 },
  { id: 5, plate: "Kia Rio", minimun_salary: 300 },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const plate = searchParams.get("plate")?.toLowerCase() || "";

  const filteredCars = cars.filter((car) =>
    car.plate.toLowerCase().includes(plate)
  );

  return NextResponse.json({ cars: filteredCars });
}
