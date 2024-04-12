import { supabase } from "./supabase/client";

export async function getRecord(
  campusid: string,
  locationid: string,
  recordid: string,
) {
  const { data: record } = await supabase
    .from("records")
    .select()
    .match({ campus: campusid })
    .match({ parsed_location: locationid })
    .match({ record_id: recordid })
    .single();
  if (!record) {
    return null;
  }
  return record;
}

export async function getCoordinate(parsedlocation: string) {
  const { data: location } = await supabase
    .from("locations")
    .select()
    .match({ parsed_location: parsedlocation })
    .single();
  if (!location) {
    return null;
  }
  return location;
}
