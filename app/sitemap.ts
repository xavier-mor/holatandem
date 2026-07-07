import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://holatandem.com/",
      lastModified: "2026-06-26",
    },
    {
      url: "https://holatandem.com/privacy",
      lastModified: "2026-06-02",
    },
    {
      url: "https://holatandem.com/aviso-legal",
      lastModified: "2026-06-08",
    },
  ];
}
