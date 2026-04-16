import { Badge, Card, Dropdown, DropdownItem } from "flowbite-react";
import {
  ClockArrow,
  MessageDots,
  OutgoingCall,
  VideoCamera,
} from "flowbite-react-icons/outline";
const TimelinePage = () => {
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

        {/* A Interactions */}
        <Card className="text-gray-500 dark:text-gray-300 justify-items-start">
          {/* Interraction */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageDots size={36} strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                    Text
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                    With Sayed R. Khalid
                  </p>
                </div>
                {/* Interaction date */}
                <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                  Jan 28, 2026
                </span>
              </div>
            </div>
          </Card>

          {/* Interraction */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageDots size={36} strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                    Text
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                    With Sayed R. Khalid
                  </p>
                </div>
                {/* Interaction date */}
                <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                  Jan 28, 2026
                </span>
              </div>
            </div>
          </Card>

          {/* Interraction */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageDots size={36} strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                    Text
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                    With Sayed R. Khalid
                  </p>
                </div>
                {/* Interaction date */}
                <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                  Jan 28, 2026
                </span>
              </div>
            </div>
          </Card>

          {/* Interraction */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageDots size={36} strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                    Text
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                    With Sayed R. Khalid
                  </p>
                </div>
                {/* Interaction date */}
                <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                  Jan 28, 2026
                </span>
              </div>
            </div>
          </Card>

          {/* Interraction */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageDots size={36} strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                    Text
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                    With Sayed R. Khalid
                  </p>
                </div>
                {/* Interaction date */}
                <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                  Jan 28, 2026
                </span>
              </div>
            </div>
          </Card>

          {/* Interraction */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageDots size={36} strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                    Text
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                    With Sayed R. Khalid
                  </p>
                </div>
                {/* Interaction date */}
                <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                  Jan 28, 2026
                </span>
              </div>
            </div>
          </Card>

          {/* Interraction */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageDots size={36} strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-900 dark:text-gray-50  font-semibold">
                    Text
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                    With Sayed R. Khalid
                  </p>
                </div>
                {/* Interaction date */}
                <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                  Jan 28, 2026
                </span>
              </div>
            </div>
          </Card>
        </Card>
      </div>
    </section>
  );
};

export default TimelinePage;
