"use client";
import { Card, Dropdown, DropdownItem } from "flowbite-react";
import Interaction from "./Interaction/Interaction";
import { useFriend } from "@/context/FriendContext";
import { useState } from "react";

const TimelinePage = () => {
  const { timeline } = useFriend();
  const [searchType, setSearchType] = useState("all");
  const searchedTimeline = (type) => {
    if (searchType.toLowerCase() === "all") return timeline;
    return timeline.filter(
      (interaction) => interaction.type === type.toLowerCase(),
    );
  };

  return (
    <section>
      <div className="w-full max-w-11/12 mx-auto py-8">
        <Card>
          <div>
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
              Timeline
            </h1>
            <Dropdown
              color="alternative"
              label={`Search By:  ${searchType.toUpperCase()}`}
              className="py-2"
            >
              <DropdownItem onClick={() => setSearchType("all")}>
                All
              </DropdownItem>
              <DropdownItem onClick={() => setSearchType("text")}>
                Text
              </DropdownItem>
              <DropdownItem onClick={() => setSearchType("video")}>
                Video
              </DropdownItem>
              <DropdownItem onClick={() => setSearchType("call")}>
                Call
              </DropdownItem>
            </Dropdown>
          </div>
        </Card>

        <Card className="mt-2 text-gray-500 dark:text-gray-300 justify-items-start">
          {searchedTimeline(searchType).map((interaction) => (
            <Interaction key={interaction.id} interaction={interaction} />
          ))}
        </Card>
      </div>
    </section>
  );
};

export default TimelinePage;
