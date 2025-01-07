"use client";

import { ChevronRight, Lock, Bell, Shield, LogOut, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav";

export default function AccountPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen text-gray-900">
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-semibold">Account</h1>
      </div>
      {/* Profile Header */}
      <div className="p-6 flex items-center gap-4 bg-[#1C1B4E]">
        <div className="relative">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src="/placeholder.svg?height=64&width=64"
              alt="Jennifer"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            className="absolute bottom-0 right-0 rounded-full w-6 h-6 bg-primary"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white">John Doe</h1>
          <p className="text-gray-400 ">john.doe@gmail.com</p>
        </div>
      </div>

      {/* Account Section */}
      <div className="px-6 py-4 text-gray-900 bg-white">
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 bg-opacity-20 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <span>Change Password</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 bg-opacity-20 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-purple-400" />
              </div>
              <span>Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 bg-opacity-20 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-400" />
              </div>
              <span>Privacy Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 bg-opacity-20 rounded-xl flex items-center justify-center">
                <LogOut className="w-5 h-5 text-purple-400" />
              </div>
              <span>Sign Out</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Payment Cards */}
      <div className="px-6 py-4 text-gray-900">
        <h2 className="text-lg mb-4">Payment Cards</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div>Main card</div>
                <div className="text-sm text-gray-400">9432 **** **** ****</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div>John's card</div>
                <div className="text-sm text-gray-400">**** 6857</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center gap-3 text-purple-400">
            <Plus className="w-5 h-5" />
            <span>Add new card</span>
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
