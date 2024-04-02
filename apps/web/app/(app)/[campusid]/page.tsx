import { getCampus } from "@/lib/campus";

export default async function Campus({
  params: { campusid },
}: {
  params: { campusid: string };
}) {
  const campus = await getCampus(campusid);

  return <div>{campus.name}</div>;
}
