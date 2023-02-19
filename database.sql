CREATE TABLE
IF NOT EXISTS `publications` (
	`id` INTEGER NOT NULL auto_increment,
	`title` VARCHAR (255) NOT NULL,
	`description` VARCHAR (255),
	`user_id` INTEGER NOT NULL,
	`create_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = INNODB;



CREATE TABLE
IF NOT EXISTS `users` (
	`id` INTEGER NOT NULL auto_increment,
	`name` VARCHAR (255) NOT NULL,
	`last_name` VARCHAR (255) NOT NULL,
	`email` VARCHAR (255) NOT NULL UNIQUE,
	`password` VARCHAR (255) NOT NULL,
	`role` VARCHAR (255) NOT NULL,
	`create_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = INNODB;

