import LoadingSpinner from "@/components/LoadigSpinner/LoadingSpinner";

export default function Loading() {
  return (
    <section>
      <div className="w-full max-w-11/12 mx-auto py-8 flex flex-col md:flex-row gap-2">
        <LoadingSpinner />
      </div>
    </section>
  );
}
