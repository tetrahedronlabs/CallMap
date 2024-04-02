import { supabase } from "./supabase/client";
import { notFound } from "next/navigation";

export async function getCampus(campusid: string) {
  const { data: campus } = await supabase
    .from("campuses")
    .select()
    .match({ campus_id: campusid })
    .single();
  if (!campus) {
    notFound();
  }
  return campus;
}
