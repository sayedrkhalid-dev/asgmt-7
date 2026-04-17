import LoadingSpinner from "@/components/LoadigSpinner/LoadingSpinner";

export default function Loading() {
  return (
    <section>
      <div className="w-full max-w-11/12 mx-auto py-8 flex justify-center">
        <LoadingSpinner />
      </div>
    </section>
  );
}
