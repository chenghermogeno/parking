"use client";

import { ChevronLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function ParkingMap() {
  const [parkingRows, setParkingRows] = useState({
    top: [],
    middle: [],
    bottom: [],
  });
  const [filter, setFilter] = useState("all");

  const statusColors = {
    available: "bg-green-400",
    occupied: "bg-red-600",
    reserved: "bg-yellow-200",
  };

  useEffect(() => {
    const generateRandomSpots = (rowId) => {
      return Array.from({ length: 10 }, (_, index) => {
        const statuses = Object.keys(statusColors);
        const randomStatus =
          statuses[Math.floor(Math.random() * statuses.length)];
        return {
          id: `${rowId}${index + 1}`,
          status: randomStatus,
          color: statusColors[randomStatus],
        };
      });
    };

    setParkingRows({
      top: generateRandomSpots("E"),
      middle: generateRandomSpots("C"),
      bottom: generateRandomSpots("A"),
    });
  }, []);

  const getSpotStyle = (color) => {
    return cn(
      "aspect-[2/3] rounded flex items-center justify-center text-sm font-medium hover:opacity-90 transition-opacity",
      color
    );
  };

  const countAvailableSpots = () => {
    const allSpots = [
      ...parkingRows.top,
      ...parkingRows.middle,
      ...parkingRows.bottom,
    ];
    return allSpots.filter((spot) => spot.status === "available").length;
  };

  const totalSpots = 30; // 10 spots per row, 3 rows
  const availableSpots = countAvailableSpots();

  const filterSpots = (spots) => {
    if (filter === "all") return spots;
    return spots.filter((spot) => spot.status === filter);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto bg-white min-h-screen flex flex-col">
        {/* Header */}

        {/* Legend and Filter */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sticky top-[72px] bg-white z-10 border-b">
          <div className="flex justify-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-600 rounded mr-2"></div>
              <span>Occupied</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-200 rounded mr-2"></div>
              <span>Reserved</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              size="sm"
            >
              All
            </Button>
            <Button
              variant={filter === "available" ? "default" : "outline"}
              onClick={() => setFilter("available")}
              size="sm"
            >
              Available
            </Button>
            <Button
              variant={filter === "occupied" ? "default" : "outline"}
              onClick={() => setFilter("occupied")}
              size="sm"
            >
              Occupied
            </Button>
            <Button
              variant={filter === "reserved" ? "default" : "outline"}
              onClick={() => setFilter("reserved")}
              size="sm"
            >
              Reserved
            </Button>
          </div>
        </div>

        {/* Parking Grid */}
        <div className="flex-1 p-4 overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="bg-gray-100 rounded-lg p-6 space-y-4">
              {/* Top Row */}
              <div className="grid grid-cols-10 gap-2">
                {filterSpots(parkingRows.top).map((spot) => (
                  <button
                    key={spot.id}
                    className={cn(
                      getSpotStyle(spot.color),
                      "w-16 h-24 text-lg"
                    )}
                    aria-label={`Parking spot ${spot.id} - ${spot.status}`}
                  >
                    {spot.id}
                  </button>
                ))}
              </div>

              {/* First Pathway */}
              <div className="h-12 bg-gray-200 rounded flex items-center justify-between px-4 text-sm text-gray-600">
                <span>⟵ Entry</span>
                <span>Exit ⟶</span>
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-10 gap-2">
                {filterSpots(parkingRows.middle).map((spot) => (
                  <button
                    key={spot.id}
                    className={cn(
                      getSpotStyle(spot.color),
                      "w-16 h-24 text-lg"
                    )}
                    aria-label={`Parking spot ${spot.id} - ${spot.status}`}
                  >
                    {spot.id}
                  </button>
                ))}
              </div>

              {/* Second Pathway */}
              <div className="h-12 bg-gray-200 rounded flex items-center justify-between px-4 text-sm text-gray-600">
                <span>⟵ Entry</span>
                <span>Exit ⟶</span>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-10 gap-2">
                {filterSpots(parkingRows.bottom).map((spot) => (
                  <button
                    key={spot.id}
                    className={cn(
                      getSpotStyle(spot.color),
                      "w-16 h-24 text-lg"
                    )}
                    aria-label={`Parking spot ${spot.id} - ${spot.status}`}
                  >
                    {spot.id}
                  </button>
                ))}
              </div>

              {/* Elevator and Stairs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600">
                  Elevator
                </div>
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600">
                  Stairs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-4 mb-8 border-t bg-[#1C1B4E] text-white sticky bottom-0 z-10">
          <div className="flex justify-between items-center ">
            <div className="space-y-1">
              <h3 className="font-medium">Available Spots</h3>
              <div className="flex gap-2">
                <Badge variant="secondary" className="rounded-full">
                  {availableSpots}/{totalSpots} spots
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  {Math.round((availableSpots / totalSpots) * 100)}%
                </Badge>
              </div>
            </div>
            <Button
              onClick={() => (window.location.href = "/review-booking")}
              className="bg-[#7B6EF6] hover:bg-[#7B6EF6]/90 text-white px-12"
            >
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
