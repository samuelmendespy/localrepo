import { NextResponse } from "next/server";

const renters: Renter[] = [
  { id: 1, name: "Hyundai Santa Fe", salary: 250 },
  { id: 2, name: "JEEP Grand Cheroke", salary: 250 },
  { id: 3, name: "Ford Escape", salary: 220 },
  { id: 4, name: "Toyota RAV4", salary: 240 },
  { id: 5, name: "Kia Rio", salary: 300 },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name")?.toLowerCase() || "";

  const filteredRenters = renters.filter((renter) =>
    renter.name.toLowerCase().includes(name)
  );

  return NextResponse.json(filteredRenters);
}
