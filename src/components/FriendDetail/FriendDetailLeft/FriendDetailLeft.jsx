import { Badge, Button, Card } from "flowbite-react";
import {
  Archive,
  Bell,
  CheckCircle,
  TrashBin,
} from "flowbite-react-icons/outline";
import Image from "next/image";

const FriendDetailLeft = ({ friend }) => {
  return (
    <aside className="w-full md:w-[30%] flex flex-col gap-2">
      {/* Detail Top */}
      <Card className="shadow-sm">
        {/* Card content */}
        <div className="flex flex-col items-center">
          {/* Frined Image */}
          <Image
            src={friend.image}
            alt={friend.name}
            width={96}
            height={96}
            className="mb-3 rounded-full shadow-lg object-cover"
          />

          <div className="mt-2 flex flex-col justify-center items-center">
            {/* Friend Name */}
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">
              {friend.name}
            </h2>

            <div className="mt-4 flex gap-2 items-center">
              {friend.tags.map((tag, index) => (
                <Badge
                  key={index}
                  color="indigo"
                  size="sm"
                  className="capitalize rounded-full"
                >
                  <span className="flex items-center gap-1">
                    <CheckCircle size={18} />
                    {tag}
                  </span>
                </Badge>
              ))}
            </div>

            <Badge
              color={
                friend.status === "on-track"
                  ? "info"
                  : friend.status === "upcoming"
                    ? "info"
                    : friend.status === "overdue"
                      ? "failure"
                      : friend.status === "almost due"
                        ? "warning"
                        : ""
              }
              size="sm"
              className="mt-4 capitalize rounded-full"
            >
              {friend.status}
            </Badge>

            {/* Friend bio */}
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 text-center">
              {friend.bio}
            </p>

            {/* Friend Email */}
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 text-center">
              Preferred:{"  "}
              <span className="font-semibold text-gray-400 dark:text-gray-200">
                {friend.email}
              </span>
            </p>
          </div>
        </div>
      </Card>

      {/* Detail Bottom */}
      <div className="flex flex-col gap-1">
        {/* Archive Button */}
        <Button
          color="alternative"
          className="text-gray-900 dark:text-white cursor-pointer"
        >
          <span className="flex items-center gap-2 my-4">
            <Archive size={20} /> Archive
          </span>
        </Button>

        {/* Snooze Button */}
        <Button
          color="alternative"
          className="text-gray-900 dark:text-white cursor-pointer"
        >
          <span className="flex items-center gap-2 my-4">
            <Bell size={20} />
            Snooze
          </span>
        </Button>

        {/* Delete Button */}
        <Button color="alternative" className="text-red-500 cursor-pointer">
          <span className="flex items-center gap-2 my-4">
            <TrashBin size={20} /> Delete
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default FriendDetailLeft;
