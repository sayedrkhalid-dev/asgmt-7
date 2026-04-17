"use client";

import { Badge, Button, Card } from "flowbite-react";
import { ClockArrow } from "flowbite-react-icons/outline";
import QuickCheckIn from "./QuickCheckIn";
import Link from "next/link";

import Interactions from "./Interactions";
import { useFriend } from "@/context/FriendContext";

const FriendDetailRight = ({ friend }) => {
  const { timeline } = useFriend();

  return (
    <div className="w-full md:w-[70%] flex flex-col gap-2">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
        {/* Total contact day stat */}
        <Card className="w-full text-gray-900 dark:text-gray-50">
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="text-xl font-semibold">
              {friend.days_since_contact}
            </span>
            <span className="flex items-center text-sm text-center font-normal text-gray-500 dark:text-gray-300">
              Days Since Contact
            </span>
          </div>
        </Card>

        <Card className="w-full text-gray-900 dark:text-gray-50">
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="text-xl font-semibold">{friend.goal}</span>
            <span className="flex items-center text-sm text-center font-normal text-gray-500 dark:text-gray-300">
              Goal (Days)
            </span>
          </div>
        </Card>

        <Card className="w-full col-span-2 md:col-span-1 text-gray-900 dark:text-gray-50">
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="text-xl font-semibold">
              {friend.days_since_contact}
            </span>
            <span className="flex items-center text-sm text-center font-normal text-gray-500 dark:text-gray-300">
              Interractions This Month
            </span>
          </div>
        </Card>
      </div>

      {/* Friend Relationship */}
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="md:text-xl font-medium text-gray-900 dark:text-white">
              Relationship Goal
            </h2>
            <p className="mt-4 text-sm md:text-base font-semibold text-gray-500 dark:text-gray-300">
              Connect every{" "}
              <span className="text-gray-900 dark:text-gray-300 font-bold">
                30 days
              </span>
            </p>
          </div>

          <Link href="/edit">
            <Button
              outline
              color="gray"
              className="bg-gray-300/10 text-gray-900 dark:text-white cursor-pointer"
            >
              <span className="py-2">Edit</span>
            </Button>
          </Link>
        </div>
      </Card>

      {/* Quick Check-In Buttons  */}
      <Card>
        <h2 className="text-gray-900 dark:text-gray-50 md:text-xl font-semibold">
          Quick Check In
        </h2>
        <div className="grid md:grid-cols-3 gap-2">
          {/* Quick-Check-In Call Button */}
          <QuickCheckIn friend={friend} label="call" />

          {/* Quick-Check-In Text Button */}
          <QuickCheckIn friend={friend} label="text" />

          {/* Quick-Check-In Video Button */}
          <QuickCheckIn friend={friend} label="video" />
        </div>
      </Card>

      {/* Recent Interactions */}
      <Card className="text-gray-500 dark:text-gray-300">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 dark:text-gray-50 md:text-xl font-semibold">
            Recent Interactions
          </h2>

          <Link href="/timeline">
            <Badge color="gray" size="sm" className="rounded cursor-pointer">
              <span className="flex items-center gap-1">
                <ClockArrow size={18} />
                Full History
              </span>
            </Badge>
          </Link>
        </div>

        {timeline.length === 0 ? (
          <p className="py-4 text-gray-500 text-center">
            No recent interaction data available. Add some friends first!
          </p>
        ) : (
          <Interactions timeline={timeline} />
        )}
      </Card>
    </div>
  );
};

export default FriendDetailRight;
