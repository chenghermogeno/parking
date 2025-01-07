"use client";

import { PenIcon as P, CheckCircle, Star, X } from "lucide-react";
import { cn } from "@/lib/utils";
import BottomNav from "@/components/bottom-nav";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Parking Booking Success",
      message: "Your booking has been processed",
      time: "34 minutes ago",
      type: "booking",
      icon: P,
      iconClass: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Payment Successful",
      message: "Your payment ₱45 successfully paid",
      time: "2 hours ago",
      type: "success",
      icon: CheckCircle,
      iconClass: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      title: "Get Additional Discounts",
      message: "Get a discount for 3 times parking",
      time: "4 hours ago",
      type: "discount",
      icon: Star,
      iconClass: "bg-orange-100 text-orange-600",
    },
    {
      id: 4,
      title: "Parking Booking Cancelled",
      message: "Parking booking payment cancelled",
      time: "A day ago",
      type: "cancelled",
      icon: X,
      iconClass: "bg-red-100 text-red-600",
    },
    {
      id: 5,
      title: "Payment Successful",
      message: "Your payment ₱45 successfully paid",
      time: "2 days ago",
      type: "success",
      icon: CheckCircle,
      iconClass: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Notifications</h1>
      </div>

      <div className="divide-y">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex gap-4 p-4">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                notification.iconClass
              )}
            >
              <notification.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold">{notification.title}</h3>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
