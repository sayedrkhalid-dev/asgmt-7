import { Badge, Card } from "flowbite-react";
import {
  ClockArrow,
  MessageDots,
  OutgoingCall,
  VideoCamera,
} from "flowbite-react-icons/outline";
import Link from "next/link";

const FriendDetailRight = ({ friend }) => {
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

          <Link href="/edit_friend">
            <Badge color="gray" size="sm" className="rounded cursor-pointer">
              Edit
            </Badge>
          </Link>
        </div>
      </Card>

      {/* Quick Check */}
      <Card>
        <h2 className="text-gray-900 dark:text-gray-50 md:text-xl font-semibold">
          Quick Check In
        </h2>
        <div className="grid md:grid-cols-3 gap-2">
          <Card className="text-gray-900 dark:text-white">
            <span className="inline-flex items-center gap-2">
              <OutgoingCall /> Call
            </span>
          </Card>

          <Card className="text-gray-900 dark:text-white">
            <span className="inline-flex items-center gap-2">
              <MessageDots />
              Text
            </span>
          </Card>

          <Card className="text-gray-900 dark:text-white">
            <span className="inline-flex items-center gap-2">
              <VideoCamera /> Video
            </span>
          </Card>
        </div>
      </Card>

      {/* Recent Interactions */}
      <Card className="text-gray-500 dark:text-gray-300">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 dark:text-gray-50 md:text-xl font-semibold">
            Recent Interactions
          </h2>

          <Badge color="gray" size="sm" className="rounded cursor-pointer">
            <span className="flex items-center gap-1">
              <ClockArrow size={18} />
              Full History
            </span>
          </Badge>
        </div>

        {/* Interraction Type */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <MessageDots size={36} strokeWidth={1.5} />
            <div>
              <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                Text
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                Asked for career advice
              </p>
            </div>
          </div>

          {/* Interaction date */}
          <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
            Jan 28, 2026
          </span>
        </div>

        {/* Interraction Type */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <OutgoingCall size={36} strokeWidth={1.5} />
            <div>
              <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                Meet Up
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                Industry conference meetup
              </p>
            </div>
          </div>

          {/* Interaction date */}
          <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
            Jan 28, 2026
          </span>
        </div>

        {/* Interraction Type */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <VideoCamera size={36} strokeWidth={1.5} />
            <div>
              <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                Video
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                Asked for career advice
              </p>
            </div>
          </div>

          {/* Interaction date */}
          <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
            Jan 28, 2026
          </span>
        </div>

        {/* Interraction Type */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <MessageDots size={36} strokeWidth={1.5} />
            <div>
              <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                Text
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                Asked for career advice
              </p>
            </div>
          </div>

          {/* Interaction date */}
          <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
            Jan 28, 2026
          </span>
        </div>
      </Card>
    </div>
  );
};

export default FriendDetailRight;
