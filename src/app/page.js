import friends_data from "../../public/data/friends.json";
import BannerCom from "@/components/BannerCom";
import Friend from "@/components/Friend/Friend";
import FriendsStatsCom from "@/components/Friend/Stats";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <BannerCom />
      <section>
        <div className="w-full max-w-11/12 mx-auto py-8">
          <FriendsStatsCom friends={friends_data} />

          <h3 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
            Your Friends
          </h3>
          <div className="mt-4">
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
              {friends_data.map((friend) => (
                <Link href={`/${friend.id}`} key={friend.id}>
                  <Friend friend={friend} />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
