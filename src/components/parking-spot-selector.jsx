"use client";

import { ArrowLeft, ArrowRight, Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ParkingSpotSelector() {
  const floors = [
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
    "4th Floor",
    "5th Floor",
  ];
  const spots = [
    { row: "A", spots: [null, { id: "A-2" }, { id: "A-3" }] },
    { row: "B", spots: [{ id: "B-1" }, null, { id: "B-3" }] },
    { row: "C", spots: [null, { id: "C-2" }, { id: "C-3" }] },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 border-b flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Choose Spot</h1>
        </header>

        {/* Floor selector */}
        <div className="p-4 border-b overflow-auto">
          <Tabs defaultValue="1st Floor">
            <TabsList className="w-full flex gap-2 justify-start h-auto p-0 bg-transparent">
              {floors.map((floor) => (
                <TabsTrigger
                  key={floor}
                  value={floor}
                  className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {floor}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Parking grid */}
        <div className="flex-1 p-4">
          <div className="space-y-4">
            {spots.map((row) => (
              <div key={row.row} className="flex items-center">
                <div className="w-8 text-center font-medium text-gray-500">
                  {row.row}
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4">
                  {row.spots.map((spot, index) => {
                    const spotId = `${row.row}-${index + 1}`;
                    const isSelected = spotId === "B-2";
                    return (
                      <div
                        key={spotId}
                        className={`aspect-square border rounded-lg flex items-center justify-center relative ${
                          isSelected
                            ? "bg-green-100 border-green-200"
                            : "bg-gray-50"
                        }`}
                      >
                        {spot && (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="w-12 h-12 text-indigo-900"
                            fill="currentColor"
                          >
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
                            <circle cx="7.5" cy="14.5" r="1.5" />
                            <circle cx="16.5" cy="14.5" r="1.5" />
                          </svg>
                        )}
                        {isSelected && (
                          <div className="absolute top-2 right-2">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Pathway */}
          <div className="mt-4 h-8 bg-gray-200 rounded-md flex items-center justify-center text-sm text-gray-600">
            Pathway
          </div>

          {/* Entry/Exit indicators */}
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span>Entry</span>
              <ArrowRight className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1">
              <span>Exit</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t p-4 flex items-center justify-between bg-white">
          <div>
            <div className="font-medium">Spot B-2 Selected</div>
            <div className="text-sm text-gray-600">Price $48/hr</div>
          </div>
          <Button className="px-8">Book Spot</Button>
        </div>
      </div>
    </div>
  );
}
