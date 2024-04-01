import { supabase } from "@/lib/supabase/client";
import { notFound } from "next/navigation";

export default async function Campus({
  params: { campusid },
}: {
  params: { campusid: string };
}) {
  const { data: campus } = await supabase
    .from("campuses")
    .select()
    .match({ campus_id: campusid })
    .single();
  if (!campus) {
    notFound();
  }
  return (
    <div>
{campus.name}
    </div>
  );
}
