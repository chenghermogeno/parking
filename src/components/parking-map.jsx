"use client";

import { cn } from "@/lib/utils";

export function ParkingMap({ selectedSlot, layout }) {
  return (
    <div className="relative w-full aspect-[5/4] bg-gray-100 rounded-lg p-4">
      {/* Left row of parking slots */}
      <div className="absolute left-4 top-4 space-y-2">
        {[1, 2, 3, 4].map((slot) => (
          <div
            key={`left-${slot}`}
            className={cn(
              "w-20 h-8 bg-gray-200 rounded",
              selectedSlot === `left-${slot}` && "bg-purple-500"
            )}
          />
        ))}
      </div>

      {/* Right row of parking slots */}
      <div className="absolute right-4 top-4 space-y-2">
        {[1, 2, 3, 4].map((slot) => (
          <div
            key={`right-${slot}`}
            className={cn(
              "w-20 h-8 bg-gray-200 rounded",
              selectedSlot === `right-${slot}` && "bg-purple-500"
            )}
          />
        ))}
      </div>

      {/* Bottom row of parking slots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {[1, 2, 3].map((slot) => (
          <div
            key={`bottom-${slot}`}
            className={cn(
              "w-8 h-20 bg-gray-200 rounded",
              selectedSlot === `bottom-${slot}` && "bg-purple-500"
            )}
          />
        ))}
      </div>

      {/* Navigation path */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 50 90 L 50 50 L 80 50"
          stroke="#7B6EF6"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 2"
        />
        {/* Navigation point */}
        <circle cx="80" cy="50" r="3" fill="#7B6EF6" />
      </svg>
    </div>
  );
}
