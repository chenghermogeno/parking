"use client";

import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PaymentMethod() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container p-4 flex h-14 items-center mx-auto bg-[#1C1B4E]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 sm:left-6"
            onClick={() => router.push("/review-booking")}
          >
            <ArrowLeft className="h-4 w-4 text-white" />
            <span className="sr-only">Go back</span>
          </Button>
          <h1 className="text-lg font-semibold flex-1 text-center text-white">
            Payment Method
          </h1>
        </div>
      </header>

      <main className="container px-4 sm:px-6 py-6 space-y-6 max-w-md mx-auto">
        <section>
          <h2 className="text-sm font-medium mb-3">Saved Cards</h2>
          <div className="grid gap-4">
            <Card className="relative p-4 overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900 text-white w-[340px] h-[200px] mx-auto">
              <div className="relative z-10 flex flex-col justify-between h-full">
                <p className="font-medium text-lg mb-2">Juan Dela Cruz</p>
                <div className="space-y-1">
                  <p className="text-base opacity-90">**** **** **** 1527</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-70">Exp Date</p>
                      <p className="text-sm">01/27</p>
                    </div>
                    <Image
                      src="/placeholder.svg"
                      alt="Visa"
                      width={50}
                      height={16}
                      className="opacity-50"
                    />
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent"
                style={{
                  maskImage:
                    "radial-gradient(circle at 90% 90%, transparent 20%, black 70%)",
                }}
              />
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium mb-3">Other Payment Methods</h2>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start h-14 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/placeholder.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span>GCash</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start h-14 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/placeholder.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span>InstaPay</span>
              </div>
            </Button>
          </div>
        </section>

        <Button
          className="w-full mt-6 bg-[#7B6EF6] hover:bg-[#7B6EF6]/90 text-white text-base font-semibold py-6 px-6 rounded-lg"
          onClick={() => router.push("/success")}
        >
          Proceed to Payment
        </Button>
      </main>
    </div>
  );
}
