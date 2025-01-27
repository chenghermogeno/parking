"use client";

import { ChevronLeft, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ParkingTicket() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1B4E] border-b border-white/10">
          <div className="flex items-center justify-center p-4">
            <h1 className="text-white text-lg font-semibold">Parking Ticket</h1>
          </div>
        </header>

        {/* Ticket Content */}
        <div className="pt-24 pb-8 px-4">
          <Card className="p-6">
            {/* QR Code Section */}
            <div className="text-center mb-8">
              <p className="text-gray-600 text-sm mb-4">
                Barcodes are used on ticket machines to
                <br />
                open parking garage doors
              </p>
              <div className="inline-block bg-white p-4 rounded-xl shadow-sm">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  className="mx-auto"
                >
                  <path
                    fill="#000000"
                    d="M0 0h80v80H0zm20 20v40h40V20zm10 10h20v20H30zm90-30h80v80h-80zm20 20v40h40V20zm10 10h20v20h-20zM0 110h80v80H0zm20 20v40h40v-40zm10 10h20v20H30zm100-30h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm-30 10h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm-50 10h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm-50 10h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm-30 10h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm-40 10h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10zm20 0h10v10h-10z"
                  />
                </svg>
              </div>
            </div>

            <Separator className="my-6 border-dashed" />

            {/* Time Details */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Start</div>
                <div className="font-semibold">7:00 AM</div>
                <div className="text-sm text-gray-600">3 Feb, 2024</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">End</div>
                <div className="font-semibold">9:00 PM</div>
                <div className="text-sm text-gray-600">4 Feb, 2024</div>
              </div>
            </div>

            {/* Parking Details */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">The Floor</div>
                <div className="font-semibold">1st floor</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Spot</div>
                <div className="font-semibold">B-2</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Duration</div>
                <div className="font-semibold">2 hours</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <Button variant="outline" className="flex-1 gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </Card>
        </div>

        {/* Bottom Button */}
        <div className="p-4">
          <Link href="/bookings">
            <Button className="w-full mt-6 bg-[#7B6EF6] hover:bg-[#7B6EF6]/90 text-white text-base font-semibold py-6 px-6 rounded-lg">
              Go to Bookings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
