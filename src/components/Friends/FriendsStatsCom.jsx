import FriendsStatCom from "./FriendsStatCom";

const FriendsStatsCom = ({ friends }) => {
  const onTrackFriends = friends.filter(
    (friend) => friend.status === "on-track",
  );

  const overDueFriends = friends.filter(
    (friend) => friend.status === "overdue",
  );

  return (
    <ul className="mb-10 pb-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-200 dark:border-gray-600">
      <FriendsStatCom stat={friends} label={"Total Friends"} />
      <FriendsStatCom stat={onTrackFriends} label={"On-Track"} />
      <FriendsStatCom stat={overDueFriends} label={"Need Attention"} />
      <FriendsStatCom stat={friends} label={"Interactions This Month"} />
    </ul>
  );
};

export default FriendsStatsCom;
