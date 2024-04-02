import { supabase } from "./supabase/client";

export async function getRecord( recordid: string) {
  const { data: record } = await supabase
    .from("records")
    .select()
    .match({ record_id: recordid })
    .single();
  if (!record) {
    return null;
  }
  return record;
}