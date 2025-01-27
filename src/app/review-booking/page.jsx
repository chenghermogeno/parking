"use client";

import { ArrowLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import Link from "next/link";

export default function ReviewBooking() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container p-4 flex h-14 items-center mx-auto bg-[#1C1B4E]">
          <Link href="/payment" className="absolute left-4 sm:left-6">
            <ArrowLeft className="h-4 w-4 text-white " />
          </Link>
          <h1 className="text-lg font-semibold flex-1 text-center text-white">
            Review Booking
          </h1>
        </div>
      </header>
      <div className="bg-white min-h-screen flex justify-center items-start p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          {/* Date & Time */}
          <div className="border-b py-4 md:py-5">
            <div className="text-sm md:text-base text-gray-600 mb-1">
              Date & Time
            </div>
            <button className="w-full flex items-center justify-between">
              <div>
                <div className="font-medium text-base md:text-lg">
                  Monday, February 24
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  8:00 AM - 12:00 PM
                </div>
              </div>
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
            </button>
          </div>

          {/* Parking Space */}
          <div className="border-b py-4 md:py-5">
            <div className="text-sm md:text-base text-gray-600 mb-1">
              Parking Space
            </div>
            <button className="w-full flex items-center justify-between">
              <div>
                <div className="font-medium text-base md:text-lg">
                  Basement 2
                </div>
                <div className="text-sm md:text-base text-gray-600">Sedan</div>
              </div>
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
            </button>
          </div>

          {/* Payment Method */}
          <div className="border-b py-4 md:py-5">
            <div className="text-sm md:text-base text-gray-600 mb-1">
              Payment Method
            </div>
            <button className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-12 h-8 md:w-16 md:h-10 relative">
                  <Image
                    src="/gcash-logo.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-base md:text-lg">Gcash</span>
              </div>
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
            </button>
          </div>

          {/* Parking Details */}
          <div className="py-4 md:py-5">
            <div className="text-sm md:text-base text-gray-600 mb-1">
              Parking
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-base md:text-lg">Sedan</div>
                  <div className="text-sm md:text-base text-gray-600">
                    Sedan, ₱25 x 4 hours
                  </div>
                </div>
                <div className="font-medium text-base md:text-lg">₱100</div>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="border-t py-4 md:py-5">
            <div className="flex justify-between items-center mb-2 md:mb-3">
              <div className="font-medium text-base md:text-lg">Total</div>
              <div className="font-medium text-base md:text-lg">₱160</div>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="mt-6 md:mt-8">
            <Link href="/success">
              <Button className="w-full mt-6 bg-[#7B6EF6] hover:bg-[#7B6EF6]/90 text-white text-base font-semibold py-6 px-6 rounded-lg">
                Confirm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
