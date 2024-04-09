import { supabase } from "./supabase/client";

export async function getRecord(recordid: string) {
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

export async function getCoordinate(parsedlocation: string) {
  const { data: location } = await supabase
    .from("ucsd_locations")
    .select()
    .match({ parsed_location: parsedlocation })
    .single();
  if (!location) {
    return null;
  }
  return location;
}
