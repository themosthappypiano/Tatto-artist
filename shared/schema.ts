import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const galleryItems = sqliteTable("gallery_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  category: text("category").notNull(), // e.g., 'Tattoos', 'Piercings'
  styleTags: text("style_tags"), // e.g., 'Black & Grey', 'Color'
  artistName: text("artist_name"),
  imageUrl: text("image_url").notNull(),
});

export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({ id: true });
export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
