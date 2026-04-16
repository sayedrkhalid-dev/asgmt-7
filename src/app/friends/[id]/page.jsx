import friends from "../../../../public/data/friends.json";
import FriendDetailLeft from "@/components/FriendDetail/FriendDetailLeft/FriendDetailLeft";
import FriendDetailRight from "@/components/FriendDetail/FriendDetailRight/FriendDetailRight";

const FriendDetailPage = async ({ params }) => {
  const id = await params;
  const friend = friends.find((friend) => friend.id == id.id);

  return (
    <>
      <section>
        <div className="w-full max-w-11/12 mx-auto py-8 flex flex-col md:flex-row gap-2">
          <FriendDetailLeft friend={friend} />
          <FriendDetailRight friend={friend} />
        </div>
      </section>
    </>
  );
};

export default FriendDetailPage;
