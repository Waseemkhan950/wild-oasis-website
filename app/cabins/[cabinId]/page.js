import { getCabin } from "@/app/_lib/data-service";
import { getCabins } from "@/app/_lib/data-service";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

// This function will generate the title of the page dynamicly
export async function generateMetadata({ params }) {
  console.log("params", params.cabinId);
  const cabin = await getCabin(params.cabinId);
  console.log("cabin", cabin);
  return {
    title: `Cabin ${cabin.name} | The Wild Oasis`,
  };
}
// This function will be called at build time and make the cabinId available to the page; thus, the page can be rendered as static page instead of dynamic page, which will be much faster.
export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
}
export default async function Page({ params }) {
  const cabin = await getCabin(params?.cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="mb-10 text-center text-5xl font-semibold">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
