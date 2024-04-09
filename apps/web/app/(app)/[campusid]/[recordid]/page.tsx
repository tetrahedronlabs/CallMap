import { SinglePointMap } from "@/components/maps/single-point";
import { getRecord, getCoordinate } from "@/lib/record";

export default async function Campus({
  params: { recordid },
}: {
  params: { recordid: string };
}) {
  const record = await getRecord(recordid);
  const location = await getCoordinate(record!.parsed_location!);

  if (!record) {
    return <div>Record not found</div>;
  }

  return (
    <>
      <div className="w-full h-[36rem]">
        <SinglePointMap
          latitude={location!.latitude!}
          longitude={location!.longitude!}
          zoom={15.5}
        />
      </div>
    </>
  );
}
