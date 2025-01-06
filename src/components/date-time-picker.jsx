"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateTimePicker({ date, time, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  // Simply initialize with current date/time
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
    if (onSelect) {
      onSelect(date);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-lg p-3 text-black" onClick={handleClick}>
      <div className="text-lg font-medium">{time}</div>
      <div className="text-sm text-muted-foreground">{date}</div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={handleClose}
        >
          <div
            className="bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleChange}
              showTimeSelect
              inline
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
