import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://drakapoor.com",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://drakapoor.com/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
