import { Card } from "flowbite-react";
import InteractionPie from "./PieChart";
const StatsPage = () => {
  return (
    <section>
      <div className="w-full max-w-11/12 mx-auto py-8">
        <h1 className="mb-4 text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Friendship Analytics
        </h1>

        <Card className="text-gray-900 dark:text-gray-50">
          <h5 className="font-semibold">By Interaction Type</h5>

          <InteractionPie />
        </Card>
      </div>
    </section>
  );
};

export default StatsPage;
