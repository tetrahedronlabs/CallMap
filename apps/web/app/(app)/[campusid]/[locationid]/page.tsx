export default async function Location({
  params: { campusid, locationid },
}: {
  params: { campusid: string; locationid: string };
}) {
  return (
    <div>
      {campusid},{locationid}
    </div>
  );
}
