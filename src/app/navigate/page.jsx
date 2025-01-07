"use client";

import { Card } from "@/components/ui/card";
import { ParkingMap } from "@/components/parking-map";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BottomNav from "@/components/bottom-nav";

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
      <div className="pt-24 px-4 pb-8 bg-white">
        <div className="mb-6">
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
        <div className="mb-6">
          <ParkingMap selectedSlot="right-4" />
        </div>

        {/* Parking Details */}
        <Card className="bg-white/10 border-0 pb-5">
          <div className="p-4 text-center">
            {/* <h2 className="text-xl font-semibold mb-2">Basement 4</h2> */}
            <p className="text-lg mb-1">Slot Panda 405</p>
            <p className="text-sm text-gray-400">December 26, 2024</p>
            <p className="text-sm text-gray-400">10:AM to 2:00 PM</p>
          </div>
        </Card>
        <div className="p-4 text-center">
          <p className="text-sm text-gray-400">
            Click next to proceed with the reservation.
          </p>
        </div>
        <button
          onClick={() => (window.location.href = "/payment")}
          className="w-full bg-[#7B6EF6] hover:bg-[#7B6EF6]/90 text-white text-normal font-semibold py-3 px-6 rounded-lg"
        >
          Next
        </button>
      </div>
      <BottomNav />
    </div>
  );
}

export default NavigatePage;
