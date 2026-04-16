import { Banner } from "flowbite-react";
import { CirclePlus } from "flowbite-react-icons/outline";

export default function BannerCom() {
  return (
    <Banner className="bg-gray-50 dark:bg-gray-700">
      <div className="flex w-full max-w-11/12 mx-auto my-8 flex-col items-center text-center border-b border-gray-200 p-4 dark:border-gray-600">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h1 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">
            Friends to keep close in your life
          </h1>
          <p className="flex items-center font-normal text-gray-500 dark:text-gray-300 px-16">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="flex shrink-0 items-center mt-8">
          <a
            href="/addfriend"
            className="mr-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-700 px-3 py-2 font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            <CirclePlus />
            Add a Friend
          </a>
        </div>
      </div>
    </Banner>
  );
}
