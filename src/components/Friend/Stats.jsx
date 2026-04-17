import Stat from "./Stat";

const Stats = ({ friends }) => {
  const onTrackFriends = friends.filter(
    (friend) => friend.status === "on-track",
  );

  const overDueFriends = friends.filter(
    (friend) => friend.status === "overdue",
  );

  return (
    <ul className="mb-10 pb-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-200 dark:border-gray-600">
      <Stat stat={friends} label={"Total Friends"} />
      <Stat stat={onTrackFriends} label={"On-Track"} />
      <Stat stat={overDueFriends} label={"Need Attention"} />
      <Stat stat={friends} label={"Interactions This Month"} />
    </ul>
  );
};

export default Stats;
