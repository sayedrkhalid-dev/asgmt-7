"use client";

import { Button } from "flowbite-react";
import {
  MessageDots,
  OutgoingCall,
  VideoCamera,
} from "flowbite-react-icons/outline";
import { useFriend } from "@/context/FriendContext";
import toast from "react-hot-toast";

const QuickCheckIn = ({ friend, label }) => {
  const { addInteraction } = useFriend();

  return (
    <Button
      color="alternative"
      className="text-gray-900 dark:text-white cursor-pointer"
      onClick={() => {
        addInteraction(friend.name, label);
        toast.success(
          `Added ${label.toUpperCase()} Interaction on Timeline successfully!`,
        );
      }}
    >
      <span className="inline-flex items-center gap-2 my-4">
        {label === "call" ? (
          <OutgoingCall />
        ) : label === "text" ? (
          <MessageDots />
        ) : label === "video" ? (
          <VideoCamera />
        ) : (
          ""
        )}
        {label}
      </span>
    </Button>
  );
};

export default QuickCheckIn;
