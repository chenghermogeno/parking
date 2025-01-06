import Link from "next/link";
import { Home, Calendar, Heart, Bell, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around py-2">
        <Link href="/" className="flex flex-col items-center p-2">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/bookings" className="flex flex-col items-center p-2">
          <Calendar className="h-5 w-5" />
          <span className="text-xs mt-1">Bookings</span>
        </Link>
        {/* <Link href="/favorites" className="flex flex-col items-center p-2">
          <Heart className="h-5 w-5" />
          <span className="text-xs mt-1">Favorites</span>
        </Link> */}
        <Link href="/notifications" className="flex flex-col items-center p-2">
          <Bell className="h-5 w-5" />
          <span className="text-xs mt-1">Notifications</span>
        </Link>
        <Link href="/account" className="flex flex-col items-center p-2">
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Account</span>
        </Link>
      </div>
    </div>
  );
}
