"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFriend } from "@/context/FriendContext";

const COLORS = ["#8B5CF6", "#10B981", "#F59E0B"];

export default function FriendsPieChart({ isAnimationActive = true }) {
  const { timeline } = useFriend();

  const processPieData = () => {
    if (!timeline || timeline.length === 0) return [];

    // Count interactions by type
    const interactionCounts = {
      text: 0,
      call: 0,
      video: 0,
    };

    timeline.forEach((interaction) => {
      const type = interaction.type;
      if (type === "text") interactionCounts["text"]++;
      else if (type === "call") interactionCounts["call"]++;
      else if (type === "video") interactionCounts["video"]++;
    });

    // Map to display names
    const displayNames = {
      text: "Text",
      call: "Phone",
      video: "Video",
    };

    return Object.entries(interactionCounts)
      .filter(([_, value]) => value > 0)
      .map(([type, value]) => ({
        name: displayNames[type] || type,
        value,
      }));
  };

  const pieData = processPieData();

  const renderLegend = ({ payload }) => (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {payload?.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-gray-900 dark:text-gray-300 font-semibold">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );

  if (pieData.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">
          No interaction data available. Add some friends first!
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            paddingAngle={3}
            cornerRadius={8}
            isAnimationActive={isAnimationActive}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
