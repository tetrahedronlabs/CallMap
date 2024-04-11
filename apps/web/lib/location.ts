import { supabase } from "./supabase/client";

export async function getLocations() {
  const { data: locations } = await supabase.from("locations").select("*");
  return locations;
}
