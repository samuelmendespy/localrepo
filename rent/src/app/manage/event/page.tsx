"use client";

import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // Styles for the DateRangePicker
import "react-date-range/dist/theme/default.css"; // Default theme

const EventForm = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold text-center">Create Event</h2>

      <div className="mt-6">
        {/* Date Range Picker */}
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          months={2}
          ranges={state}
          direction="horizontal"
        />
      </div>

      {/* Add other form fields as needed */}
    </div>
  );
};

export default EventForm;
