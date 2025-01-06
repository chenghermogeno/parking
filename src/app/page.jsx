import { MapPin, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DateTimePicker from "@/components/date-time-picker";
import ParkingCard from "@/components/parking-card";
import ParkingListItem from "@/components/parking-list-item";
import BottomNav from "@/components/bottom-nav";

export default function Home() {
  return (
    <div className="pb-16">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-start">
            <div className="text-xs text-muted-foreground">Your Location</div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">San Francisco, California</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-20 px-4 space-y-6">
        {/* Date Time Picker */}
        <Card className="p-4 bg-[#1C1B4E] text-white">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-sm mb-2">Start</div>
              <DateTimePicker date="3 Feb, 2024" time="7:00 AM" />
            </div>
            <div>
              <div className="text-sm mb-2">End</div>
              <DateTimePicker date="4 Feb, 2024" time="9:00 PM" />
            </div>
          </div>
          <Button className="w-full bg-[#7B6EF6] hover:bg-[#7B6EF6]/90">
            Search
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
              name="North Cerie District"
              image="/placeholder.svg?height=200&width=300"
              price={48}
              distance={0.31}
              rating={4.5}
              reviews={12}
            />
            <ParkingCard
              name="Spliter Garage"
              image="/placeholder.svg?height=200&width=300"
              price={50}
              distance={1.2}
              rating={4}
              reviews={531}
            />
          </div>
        </div>

        {/* Parking List */}
        <div className="space-y-4">
          <ParkingListItem
            name="Blue Skies Parking"
            distance={0.31}
            available={27}
            rating={4}
            reviews={12}
            price={60}
          />
          <ParkingListItem
            name="Crosswalk Lot"
            distance={1.23}
            available={34}
            rating={3}
            reviews={23}
            price={58}
          />
          <ParkingListItem
            name="Plenty Spaces Parking"
            distance={0.48}
            available={2}
            rating={4}
            reviews={45}
            price={55}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
