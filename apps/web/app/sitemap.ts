import { getCampuses } from "@/lib/campus";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseurl = "https://callmap.app";

  const response = await getCampuses();

  const campuses = response?.map((campus) => {
    return { url: `${baseurl}/${campus?.campus_id}`, lastModified: new Date() };
  });

  return [
    {
      url: `${baseurl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/docs`,
      lastModified: new Date(),
    },
    ...(campuses as { url: string; lastModified: Date }[]),
  ];
}
