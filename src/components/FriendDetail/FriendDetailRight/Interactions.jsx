import {
  MessageDots,
  OutgoingCall,
  VideoCamera,
} from "flowbite-react-icons/outline";

const Interactions = ({ timeline }) => {
  return (
    <>
      {timeline?.map((interaction) => (
        <div
          key={interaction.id}
          className="flex items-center justify-between gap-2 mb-3"
        >
          <div className="flex items-center gap-2">
            {/* Interaction Icon */}
            {interaction.type === "call" ? (
              <OutgoingCall size={32} strokeWidth={1.5} />
            ) : interaction.type === "text" ? (
              <MessageDots size={32} strokeWidth={1.5} />
            ) : interaction.type === "video" ? (
              <VideoCamera size={32} strokeWidth={1.5} />
            ) : (
              ""
            )}

            {/* Interaction label and description */}
            <div>
              <h3 className="text-gray-900 dark:text-gray-50  font-semibold capitalize">
                {interaction.type}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
                {interaction.description}
              </p>
            </div>
          </div>

          {/* Interaction date */}
          <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
            {interaction.date}
          </span>
        </div>
      ))}
    </>
  );
};

export default Interactions;
