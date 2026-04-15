import {
  Badge,
  Card,
  Dropdown,
  DropdownDivider,
  DropdownItem,
} from "flowbite-react";
import {
  CheckCircle,
  DeleteRow,
  Edit,
  Shield,
} from "flowbite-react-icons/outline";
import { Clock } from "flowbite-react-icons/outline";
import Image from "next/image";
import Link from "next/link";

const FriendCom = ({ friend }) => {
  return (
    <Link href={"/"}>
      <Card className="shadow-sm cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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

          {/* Friend Name */}
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {friend.name}
          </h5>

          {/* Friend Profession */}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {friend.profession}
          </span>

          <div className="mt-2 flex flex-col justify-center items-center">
            <Badge color="gray" size="sm" className=" rounded-full">
              <span className="flex items-center gap-1">
                <Clock size={18} />
                {friend.days_since_contact} days ago
              </span>
            </Badge>

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
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FriendCom;
