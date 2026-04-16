import interactions_data from "../../../public/data/interactions.json";
import { Badge, Card, Dropdown, DropdownItem } from "flowbite-react";
import Interaction from "./Interaction/Interaction";
const TimelinePage = () => {
  const Interactions = [...interactions_data];
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

        {/* All Interactions */}
        <Card className="text-gray-500 dark:text-gray-300 justify-items-start">
          {Interactions.map((intercarion) => (
            <Interaction key={intercarion.id} interaction={intercarion} />
          ))}
        </Card>
      </div>
    </section>
  );
};

export default TimelinePage;
