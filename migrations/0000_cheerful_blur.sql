CREATE TABLE `gallery_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`category` text NOT NULL,
	`style_tags` text,
	`artist_name` text,
	`image_url` text NOT NULL
);
