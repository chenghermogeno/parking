"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BottomNav from "@/components/bottom-nav";
import ParkingMap from "@/components/parking-map";

function NavigatePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1B4E] border-b border-white/10">
        <div className="flex items-center justify-center p-4">
          <h1 className="text-white text-lg font-semibold">
            Navigate to Your Slot
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-8 bg-white">
        <div className="mb-6 px-4">
          <Select
            defaultValue="basement-2"
            className="text-indigo-600 border-gray-600"
          >
            <SelectTrigger className="py-6 bg-white/10 text-indigo-600 text-base font-medium w-full focus:ring-gray-500">
              <SelectValue placeholder="Select basement" />
            </SelectTrigger>
            <SelectContent className="bg-white text-gray-900 text-base font-normal">
              <SelectItem value="basement-2">Basement 2</SelectItem>
              <SelectItem value="basement-3">Basement 3</SelectItem>
              <SelectItem value="basement-4">Basement 4</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Parking Map */}
        <div className="mb-4">
          <ParkingMap />
          {/* selectedSlot="right-4" */}
        </div>

        {/* Parking Details */}
      </div>
      <BottomNav />
    </div>
  );
}

export default NavigatePage;
