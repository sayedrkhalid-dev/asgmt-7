import friends_data from "../../../public/data/friends.json";
import FriendsStatsCom from "./FriendsStatsCom";
import FriendCom from "./FriendCom";
import Link from "next/link";

const FriendsCom = () => {
  return (
    <section>
      <div className="w-full max-w-11/12 mx-auto py-8">
        <FriendsStatsCom friends={friends_data} />

        <h3 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
          Your Friends
        </h3>
        <div className="mt-4">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
            {friends_data.map((friend) => (
              <Link href={`/friends/${friend.id}`} key={friend.id}>
                <FriendCom friend={friend} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FriendsCom;
