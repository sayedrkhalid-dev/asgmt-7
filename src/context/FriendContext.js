"use client";

import { createContext, useState, useContext } from "react";
const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addInteraction = (personName, type) => {
    const newInteraction = {
      id: Date.now(),
      type, // "text" | "call" | "video"
      personName, // Person Name
      description: `You have just ${type} with ${personName}`,
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
  const context = useContext(FriendContext);
  if (!context)
    throw new Error("useFriend must be used inside <FriendProvider>");
  return context;
};
