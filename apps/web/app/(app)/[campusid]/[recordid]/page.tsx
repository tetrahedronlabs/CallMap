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

  return <div>{record.location}</div>;
}
