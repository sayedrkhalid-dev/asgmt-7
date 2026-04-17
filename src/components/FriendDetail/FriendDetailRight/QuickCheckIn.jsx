import { Button, Card } from "flowbite-react";
import {
  MessageDots,
  OutgoingCall,
  VideoCamera,
} from "flowbite-react-icons/outline";

const QuickCheckIn = ({ friend, label }) => {
  const curr_date = new Date();
  console.log(curr_date);
  return (
    <Button
      color="alternative"
      className="text-gray-900 dark:text-white cursor-pointer"
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
