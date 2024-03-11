CREATE DATABASE IF NOT EXISTS mercado_de_pulgas;
USE mercado_de_pulgas;

CREATE TABLE IF NOT EXISTS `users` (
   `id` VARCHAR(50) PRIMARY KEY NOT NULL,
   `user_name` VARCHAR(80) NOT NULL,
   `user_email` VARCHAR(100) NOT NULL,
   `user_lastName` VARCHAR(80) NOT NULL,
   `bisiness_name` VARCHAR(80),
   `user_password` VARCHAR(25) NOT NULL,
   `user_address` VARCHAR(100) NOT NULL,
   `user_phone` INT NOT NULL,
   `image` VARCHAR(50) NOT NULL,
   `user_role` ENUM('admin', 'user') NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` DATETIME
);

CREATE TABLE IF NOT EXISTS `product` (
   `id` VARCHAR(50) PRIMARY KEY NOT NULL,
   `product_name` VARCHAR(80) NOT NULL,
   `price` DECIMAL NOT NULL,
   `id_discount` INT NOT NULL,
   `id_stock` INT NOT NULL,
   `id_user` VARCHAR(50) NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME
);

CREATE TABLE IF NOT EXISTS `description` (
   `id` INT NOT NULL,
   `description` TEXT NOT NULL,
   `id_pproduct` VARCHAR(100) NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `category` (
   `id` INT NOT NULL AUTO_INCREMENT ,
   `category` VARCHAR(50) NOT NULL,
   `id_product` VARCHAR(255) NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `product_image` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `image` VARCHAR(80) NOT NULL,
   `id_product` VARCHAR(50) NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `coments` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `coment` TEXT NOT NULL,
   `id_product` VARCHAR(50) NOT NULL,
   `id_user` VARCHAR(50) NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `discount` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `discount_on` BOOLEAN NOT NULL,
   `discount` TINYINT,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `stock` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `in_stock` BOOLEAN NOT NULL,
   `stock` TINYINT NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE  IF NOT EXISTS `detail` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `detail` VARCHAR(150) NOT NULL,
   `id_product` VARCHAR(100) NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`id`)
);


ALTER TABLE `product` ADD CONSTRAINT `FK_2422bac2-a2b5-4be1-82d4-f1e807c2dfda` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`)  ;

ALTER TABLE `product` ADD CONSTRAINT `FK_90f9fd01-ef4f-40d5-bc1e-56298a5633a3` FOREIGN KEY (`id_discount`) REFERENCES `discount`(`id`)  ;

ALTER TABLE `product` ADD CONSTRAINT `FK_b1a22478-7d2e-43a2-b039-ceea13d41d38` FOREIGN KEY (`id_stock`) REFERENCES `stock`(`id`)  ;

ALTER TABLE `description` ADD CONSTRAINT `FK_33fb762a-69ad-4e70-a69a-5461c3c17cac` FOREIGN KEY (`id_pproduct`) REFERENCES `product`(`id`)  ;

ALTER TABLE `category` ADD CONSTRAINT `FK_2b81e9fb-1ee9-48cc-b20c-be5918d553a7` FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)  ;

ALTER TABLE `product_image` ADD CONSTRAINT `FK_ed7f0ad0-ae35-4e88-b09d-87a60c272c5e` FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)  ;

ALTER TABLE `coments` ADD CONSTRAINT `FK_dc4ecdb7-0870-4a38-83cf-f7b28462d6cd` FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)  ;

ALTER TABLE `coments` ADD CONSTRAINT `FK_ca2c1052-20d9-4847-a7e5-0e544986dbb3` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`)  ;

ALTER TABLE `detail` ADD CONSTRAINT `FK_c8b5856f-3fb3-42e4-b9e2-e3688263056a` FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)  ;