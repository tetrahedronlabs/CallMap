import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "ByteSpider",
        disallow: "/",
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
    ],
    sitemap: `https://callmap.app/sitemap.xml`,
  };
}
