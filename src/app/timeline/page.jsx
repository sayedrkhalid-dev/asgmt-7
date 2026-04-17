"use client";
import { Card, Dropdown, DropdownItem } from "flowbite-react";
import Interaction from "./Interaction/Interaction";
import { useFriend } from "@/context/FriendContext";

const TimelinePage = () => {
  const { timeline } = useFriend();

  return (
    <section>
      <div className="w-full max-w-11/12 mx-auto py-8">
        <Card>
          <div>
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
              Timeline
            </h1>
            <Dropdown
              label="Filter Timeline"
              dismissOnClick={false}
              className="py-2"
            >
              <DropdownItem>Text</DropdownItem>
              <DropdownItem>Meet up</DropdownItem>
              <DropdownItem>Video</DropdownItem>
              <DropdownItem>Call</DropdownItem>
            </Dropdown>
          </div>
        </Card>

        <Card className="text-gray-500 dark:text-gray-300 justify-items-start">
          {timeline.map((interaction) => (
            <Interaction key={interaction.id} interaction={interaction} />
          ))}
        </Card>
      </div>
    </section>
  );
};

export default TimelinePage;
