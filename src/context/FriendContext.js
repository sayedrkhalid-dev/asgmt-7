"use client";

import { createContext, useState, useContext } from "react";
import interactions_data from "../../public/data/interactions.json";

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([...interactions_data]);

  const addInteraction = (personName, type) => {
    const newInteraction = {
      id: Date.now(),
      type, // "text" | "call" | "video"
      personName,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
    };

    setTimeline((prev) => [newInteraction, ...prev]);
  };

  return (
    <FriendContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
};

// Custom hook for convenience
export const useFriend = () => {
  const ctx = useContext(FriendContext);
  if (!ctx) throw new Error("useFriend must be used inside <FriendProvider>");
  return ctx;
};
