import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existingItems = await storage.getGalleryItems();
  if (existingItems.length === 0) {
    await storage.createGalleryItem({
      title: "Rose & Scorpion Hand",
      category: "Tattoos",
      styleTags: "Color, Traditional",
      artistName: "Caelan",
      imageUrl: "/images/gallery-tattoo-1.png"
    });
    await storage.createGalleryItem({
      title: "Heart & Butterfly Script",
      category: "Tattoos",
      styleTags: "Black & Grey, Script",
      artistName: "Wyskii",
      imageUrl: "/images/gallery-tattoo-2.png"
    });
    await storage.createGalleryItem({
      title: "Egyptian Hand Design",
      category: "Tattoos",
      styleTags: "Color, Egyptian",
      artistName: "Caelan",
      imageUrl: "/images/gallery-tattoo-3.png"
    });
    await storage.createGalleryItem({
      title: "Floral Sleeve Detail",
      category: "Tattoos",
      styleTags: "Black & Grey, Floral",
      artistName: "Wyskii",
      imageUrl: "/images/gallery-tattoo-4.png"
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database with our provided images
  await seedDatabase();

  app.get(api.gallery.list.path, async (req, res) => {
    const items = await storage.getGalleryItems();
    res.json(items);
  });

  return httpServer;
}
