"use client";

import { SinglePointMap } from "@/components/maps/single-point";
import { getRecord } from "@/lib/record";

export default async function Campus({
  params: { recordid },
}: {
  params: { recordid: string };
}) {
  const record = await getRecord(recordid);

  if (!record) {
    return <div>Record not found</div>;
  }

  return (
    <>
      <SinglePointMap
        latitude={32.88121374}
        longitude={-117.23759}
        zoom={15.5}
      />
    </>
  );
}
