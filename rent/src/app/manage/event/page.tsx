"use client";

import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays, differenceInDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const EventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // Calculate event duration
  const eventDuration =
    differenceInDays(dateRange[0].endDate, dateRange[0].startDate) + 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Event name: ${eventName}\nEvent duration: ${eventDuration} dias`);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-950">
        Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Type the event name"
            className="w-full p-2 text-gray-700 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Place
          </label>
          <input
            type="text"
            value={eventPlace}
            onChange={(e) => setEventPlace(e.target.value)}
            placeholder="Type the event place"
            className="w-full p-2 text-gray-700 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Date Range Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration
          </label>
          <DateRangePicker
            onChange={(item) => {
              console.log("Start Date:", item.selection.startDate);
              console.log("End Date:", item.selection.endDate);
              setDateRange([item.selection]);
            }}
            months={2}
            ranges={dateRange}
            direction="vertical"
            className="[&_.rdrDefinedRangesWrapper]:hidden" // Hide DefinedRanges section
          />
          <p className="text-gray-600 mt-2">
            Duration: <strong>{eventDuration} days</strong>
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
