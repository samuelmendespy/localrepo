"use client";
import { useState } from "react";
import UserDialog from "../../../components/UserDialog";
import Icon from "@mdi/react";
import {
  mdiAccountPlus,
  mdiCalendarClock,
  mdiChevronLeft,
  mdiChevronRight,
  mdiDeleteForever,
  mdiMagnify,
  mdiPencil,
} from "@mdi/js";

const cars = [
  { id: 1, name: "Hyundai Santa Fe", salary: 250 },
  { id: 2, name: "JEEP Grand Cheroke", salary: 250 },
  { id: 3, name: "Ford Escape", salary: 220 },
  { id: 4, name: "Toyota RAV4", salary: 240 },
  { id: 5, name: "Kia Rio", salary: 300 },
];

export default function CarPage() {
  const [sortedCars, setSortedCars] = useState(cars);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...sortedCars].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedCars(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <div className="container">
      <div className="text-left py-6 pl-4">
        <p className="text-4xl font-semibold text-gray-800 dark:text-gray-200">
          Car Page
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-80 border-b-2 border-gray-400 focus-within:border-blue-600 ml-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none px-2 py-1"
        />
        <Icon path={mdiMagnify} size={1} />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yell text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          <Icon path={mdiAccountPlus} size={1} />
          ADD USER
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              {["id", "name", "salary", "Actions"].map((key) => (
                <th
                  key={key}
                  onClick={() => key !== "Actions" && sortData(key)}
                  className={`p-3 ${
                    key === "Actions"
                      ? "text-right"
                      : "text-left cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                  {sortConfig.key === key
                    ? sortConfig.direction === "asc"
                      ? "▲"
                      : "▼"
                    : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedCars.map((car) => (
              <tr key={car.id} className="border-t dark:border-gray-700">
                <td className="p-3">{car.id}</td>
                <td className="p-3">{car.name}</td>
                <td className="p-3">${car.salary.toLocaleString()}</td>
                <td className="p-3 text-right">
                  <button className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700">
                    <Icon path={mdiPencil} size={0.8} />
                  </button>
                  <button className="p-1 rounded hover:bg-blue-300 dark:hover:bg-blue-700">
                    <Icon path={mdiCalendarClock} size={0.8} />
                  </button>
                  <button className="p-1 rounded hover:bg-red-300 dark:hover:bg-red-700">
                    <Icon path={mdiDeleteForever} size={0.8} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex justify-end">
          <div className="flex items-center space-x-2">
            <label
              htmlFor="quantity"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Rows per page:
            </label>
            <select
              name="quantity"
              id="quantity"
              className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-gray-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            >
              <option value="ten">10</option>
              <option value="twelve">12</option>
              <option value="fifteen">15</option>
              <option value="twenty">20</option>
            </select>
          </div>
          <div>1-5 of 5 |</div>
          <div className="flex flex-row justify-between">
            <Icon path={mdiChevronLeft} size={1} />
            <p>0</p>
            <Icon path={mdiChevronRight} size={1} />
          </div>
        </div>
        <UserDialog users={cars} />
      </div>
    </div>
  );
}
