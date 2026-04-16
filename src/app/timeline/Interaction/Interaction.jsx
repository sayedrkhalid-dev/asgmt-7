import { Badge, Card, Dropdown, DropdownItem } from "flowbite-react";
import {
  MessageDots,
  OutgoingCall,
  VideoCamera,
} from "flowbite-react-icons/outline";

const Interaction = ({ interaction }) => {
  return (
    <>
      {/* Interraction */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          {interaction.type === "text" ? (
            <MessageDots size={36} strokeWidth={1.5} />
          ) : interaction.type === "call" ? (
            <OutgoingCall size={36} strokeWidth={1.5} />
          ) : (
            <VideoCamera size={36} strokeWidth={1.5} />
          )}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-gray-900 dark:text-gray-50  font-semibold capitalize">
                {interaction.type}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-xs">
                with {interaction.personName}
              </p>
            </div>
            {/* Interaction date */}
            <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
              {interaction.date}
            </span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Interaction;
