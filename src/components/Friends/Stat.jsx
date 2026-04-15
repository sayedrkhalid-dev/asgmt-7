import { Card } from "flowbite-react";

const Stat = ({ stat, label }) => {
  return (
    <Card className="dark:bg-gray-800/50 text-gray-900 dark:text-gray-50">
      <div className="flex flex-col gap-1 items-center justify-center">
        <span className="text-2xl font-semibold">{stat.length}</span>
        <span className="flex items-center text-center font-normal text-gray-500 dark:text-gray-400">
          {label}
        </span>
      </div>
    </Card>
  );
};

export default Stat;
