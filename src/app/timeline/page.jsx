"use client";
import { Card, Dropdown, DropdownItem } from "flowbite-react";
import Interaction from "./Interaction/Interaction";
import { useFriend } from "@/context/FriendContext";
import { useState } from "react";
import { Check } from "flowbite-react-icons/outline";

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
              <DropdownItem
                className="flex items-center gap-2"
                onClick={() => setSearchType("all")}
              >
                {searchType === "all" && <Check size={18} />}
                <span>All</span>
              </DropdownItem>
              <DropdownItem
                className="flex items-center gap-2"
                onClick={() => setSearchType("text")}
              >
                {searchType === "text" && <Check size={18} />}
                <span>Text</span>
              </DropdownItem>
              <DropdownItem
                className="flex items-center gap-2"
                onClick={() => setSearchType("video")}
              >
                {searchType === "video" && <Check size={18} />}
                <span>Video</span>
              </DropdownItem>
              <DropdownItem
                className="flex items-center gap-2"
                onClick={() => setSearchType("call")}
              >
                {searchType === "call" && <Check size={18} />}
                <span>Call</span>
              </DropdownItem>
            </Dropdown>
          </div>
        </Card>

        <Card className="mt-2 text-gray-500 dark:text-gray-300 justify-items-start">
          {timeline.length === 0 ? (
            <p className="text-gray-500 text-center">
              No interaction data available. Add some friends first!
            </p>
          ) : (
            searchedTimeline(searchType).map((interaction) => (
              <Interaction key={interaction.id} interaction={interaction} />
            ))
          )}
        </Card>
      </div>
    </section>
  );
};

export default TimelinePage;
