import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HolaTandem",
    short_name: "HolaTandem",
    description:
      "Done-for-you WhatsApp AI for Costa del Sol salons, clinics and estate agents.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#0D2B45",
    icons: [
      {
        src: "/assets/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/assets/apple-touch-icon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/assets/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
