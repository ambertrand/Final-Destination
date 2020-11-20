CREATE DATABASE IF NOT EXISTS `whileyouarethere`;
USE `whileyouarethere`;

CREATE TABLE IF NOT EXISTS `groups` (
  `id` char(36) CHARACTER SET NOT NULL,
  `group_name` varchar(255),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
);

CREATE TABLE IF NOT EXISTS `items` (
  `id` char(36) CHARACTER SET NOT NULL,
  `group_store_ID` int,
  `store_ID` int,
  `store_item` varchar(255),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
);

CREATE TABLE IF NOT EXISTS `stores` (
  `id` char(36) CHARACTER SET NOT NULL,
  `group_ID` int,
  `group_store_ID` int,
  `store_name` varchar(255),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
);


CREATE TABLE IF NOT EXISTS `usergroups` (
  `id` char(36) CHARACTER SET NOT NULL,
  `user_ID` int,
  `group_ID` int,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
);


CREATE TABLE IF NOT EXISTS `users` (
  `id` char(36) CHARACTER SET NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `group_name` varchar(255) NOT NULL,
  `socket_ID` varchar(255),
  `shopper` tinyint(1),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
);

