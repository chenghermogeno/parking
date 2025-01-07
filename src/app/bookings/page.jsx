"use client";

import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav";

export default function BookingPage() {
  const bookings = [
    {
      id: 1,
      name: "Uptown Mall",
      date: "Monday, October 24",
      time: "8:00 AM - 12:00 PM",
      price: "₱60",
      status: "Confirmed",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Uptown Parade",
      date: "Saturday, October 22",
      time: "8:00 AM - 7:00 PM",
      price: "₱24",
      status: "Confirmed",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Eastwood Mall",
      date: "Friday, October 21",
      time: "8:00 AM - 4:00 PM",
      price: "₱45",
      status: "Canceled",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Uptown Parade",
      date: "Thursday, October 20",
      time: "8:00 AM - 2:00 PM",
      price: "₱93",
      status: "Confirmed",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "Uptown Mall",
      date: "Wednesday, October 19",
      time: "8:00 AM - 12:00 PM",
      price: "₱34",
      status: "Canceled",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      name: "Uptown Mall",
      date: "Tuesday, October 18",
      time: "8:00 AM - 12:00 PM",
      price: "₱64",
      status: "Confirmed",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-semibold">Bookings</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search className="w-5 h-5" />
        </button>
      </div>

      <div className="border-b">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="w-full grid grid-cols-2 p-0 h-12 bg-transparent">
            <TabsTrigger
              value="active"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Completed
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="divide-y">
        {bookings.map((booking) => (
          <div key={booking.id} className="flex gap-4 p-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={booking.image}
                alt={booking.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold truncate">{booking.name}</h3>
                <div className="flex-shrink-0">
                  <span className="font-semibold">{booking.price}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{booking.date}</p>
              <p className="text-sm text-gray-600">{booking.time}</p>
              <div className="mt-2">
                <Badge
                  variant={
                    booking.status === "Confirmed" ? "success" : "secondary"
                  }
                  className={
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                  }
                >
                  {booking.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
