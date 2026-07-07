import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://holatandem.com/",
      lastModified: "2026-07-07",
    },
    {
      url: "https://holatandem.com/en",
      lastModified: "2026-07-07",
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
