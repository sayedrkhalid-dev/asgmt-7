import friends_data from "../../../public/data/friends.json";
import FriendCom from "./FriendCom";
import Stats from "./Stats";

const FriendsCom = () => {
  return (
    <section>
      <div className="w-full max-w-11/12 mx-auto py-8">
        <Stats friends={friends_data} />

        <h3 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
          Your Friends
        </h3>
        <div className="mt-4">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
            {friends_data.map((friend) => (
              <FriendCom key={friend.id} friend={friend} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FriendsCom;
