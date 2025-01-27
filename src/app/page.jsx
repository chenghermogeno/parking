"use client";

import { MapPin, Search, Bell, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DateTimePicker from "@/components/date-time-picker";
import ParkingCard from "@/components/parking-card";
import ParkingListItem from "@/components/faqs";
import BottomNav from "@/components/bottom-nav";
import { useState } from "react";
import FAQs from "@/components/faqs";
import { useRouter } from "next/navigation";

export default function Home() {
  // Initialize the state with default values
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Uptown Mall");

  const locations = ["Uptown Mall", "Uptown Parade", "Eastwood Mall"];

  const [startDate, setStartDate] = useState({
    date: "3 Feb, 2024",
    time: "7:00 AM",
  });

  const [endDate, setEndDate] = useState({
    date: "4 Feb, 2024",
    time: "9:00 PM",
  });

  const handleStartDateSelect = (date) => {
    setStartDate({
      date: date
        .toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        .replace(",", ""),
      time: date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    });
  };

  const handleEndDateSelect = (date) => {
    setEndDate({
      date: date
        .toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        .replace(",", ""),
      time: date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    });
  };

  const handleSubmit = () => {
    router.push("/navigate"); // Navigate to the navigate page
  };

  return (
    <div className="pb-16">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <img src="/logo.png" alt="ParkEase" className="h-8" />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <MapPin className="w-4 h-4 mr-1" />
              <span>{selectedLocation}</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
                {locations.map((location) => (
                  <button
                    key={location}
                    className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsOpen(false);
                    }}
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Main Content */}
      <div className="mt-20 px-4 space-y-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Reserve a Slot</h2>
        </div>
        {/* Date Time Picker */}
        <Card className="p-4 bg-[#1C1B4E] text-white">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-sm mb-2">Start</div>
              <DateTimePicker
                date={startDate.date}
                time={startDate.time}
                onSelect={handleStartDateSelect}
              />
            </div>
            <div>
              <div className="text-sm mb-2">End</div>
              <DateTimePicker
                date={endDate.date}
                time={endDate.time}
                onSelect={handleEndDateSelect}
              />
            </div>
          </div>
          <Button
            className="w-full text-white font-semibold py-3 px-6 rounded-lg bg-[#7B6EF6] hover:bg-[#7B6EF6]/90"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Card>

        {/* Recent Parking Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Let&apos;s Park Again</h2>
            <Button variant="link">See all</Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
            <ParkingCard
              name="Uptown Mall"
              image="/uptown-mall.jpg"
              price={50}
              distance={0.31}
              rating={4.5}
              reviews={12}
            />
            <ParkingCard
              name="Uptown Parade"
              image="/uptown-parade.png"
              price={50}
              distance={1.2}
              rating={4}
              reviews={531}
            />
          </div>
        </div>

        {/* Parking List */}
        <div className="space-y-4">
          <FAQs />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
