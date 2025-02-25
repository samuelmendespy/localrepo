import { NextResponse } from "next/server";

export async function GET() {
  const cars: Car[] = [
    { id: 1, name: "Hyundai Santa Fe", minimun_salary: 250 },
    { id: 2, name: "JEEP Grand Cheroke", minimun_salary: 250 },
    { id: 3, name: "Ford Escape", minimun_salary: 220 },
    { id: 4, name: "Toyota RAV4", minimun_salary: 240 },
    { id: 5, name: "Kia Rio", minimun_salary: 300 },
  ];

  return NextResponse.json(cars);
}
