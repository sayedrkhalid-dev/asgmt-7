"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import interactions_data from "../../../public/data/interactions.json";

const interactions = [...interactions_data];

const pieData = Object.values(
  interactions.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = { name: item.type.toUpperCase(), value: 0 };
    }
    acc[item.type].value += 1;
    return acc;
  }, {}),
);

// Modern, beautiful color palette
const COLORS = [
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#3B82F6",
  "#EC4899",
];

export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {
  // Calculate total for percentage display
  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  // Custom legend renderer
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {payload.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
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
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl">
      <div className="relative">
        <ResponsiveContainer width={400} height={400}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              cornerRadius={8}
              paddingAngle={3}
              dataKey="value"
              isAnimationActive={isAnimationActive}
              animationDuration={800}
              animationEasing="ease-out"
              stroke="white"
              strokeWidth={2}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  className="cursor-pointer transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              content={renderLegend}
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
