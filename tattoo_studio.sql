-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 12, 2025 at 11:29 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tattoo_studio`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactinfos`
--

CREATE TABLE `contactinfos` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mapEmbedUrl` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `tiktok` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactinfos`
--

INSERT INTO `contactinfos` (`id`, `address`, `phone`, `email`, `mapEmbedUrl`, `createdAt`, `updatedAt`, `instagram`, `facebook`, `tiktok`) VALUES
(1, 'Jl. Kayu Aya No.51, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361', '62-8952-3758-811', 'fearlessinkbali@gmail.com', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0744473904424!2d115.15536567592851!3d-8.684470588442501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247004c77bad9%3A0x8ed9b34b2efb0ea3!2sFearless%20Ink%20Tattoo%20Studio%20Bali!5e0!3m2!1sen!2sid!4v1746451223107!5m2!1sen!2sid', '2025-05-05 11:48:48', '2025-05-10 11:40:48', 'https://www.instagram.com/fearlessinkbali/?hl=en', 'https://www.facebook.com/fearlessinktattoostudiobali', 'https://www.instagram.com/fearlessinkbali/?hl=en');

-- --------------------------------------------------------

--
-- Table structure for table `pagecontents`
--

CREATE TABLE `pagecontents` (
  `id` int(11) NOT NULL,
  `page` varchar(255) NOT NULL,
  `section` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pagecontents`
--

INSERT INTO `pagecontents` (`id`, `page`, `section`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 'home', 'hero_title', 'Tattoo Studio Bali', '2025-04-15 13:02:17', '2025-05-10 13:29:13'),
(2, 'home', 'hero_subtitle', 'Where your stories are carved in ink.', '2025-04-15 13:17:28', '2025-05-10 13:29:41'),
(8, 'home', 'about_title', 'About Fearless Ink Tattoo Studio', '2025-04-15 13:37:39', '2025-05-10 13:30:05'),
(12, 'home', 'about_image', '/uploads/1746448100029-115296112.jpg', '2025-04-17 11:54:28', '2025-05-05 12:28:20'),
(13, 'home', 'about_paragraph_1', 'Fearless Ink Tattoo Studio Bali is home to experienced artists who turn your ideas into permanent art. We value creativity, cleanliness, and your satisfaction.', '2025-04-19 11:15:34', '2025-05-10 13:30:40'),
(14, 'home', 'about_paragraph_2', 'Our studio is a sanctuary where artistic vision meets technical excellence. Every piece we create is a unique expression of your story.', '2025-04-19 11:15:44', '2025-04-19 11:17:45');

-- --------------------------------------------------------

--
-- Table structure for table `portfolioitems`
--

CREATE TABLE `portfolioitems` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `description` text,
  `style` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portfolioitems`
--

INSERT INTO `portfolioitems` (`id`, `title`, `imageUrl`, `description`, `style`, `createdAt`, `updatedAt`) VALUES
(3, 'Small Tattoo', '/uploads/1745064947343-830199325.jpg', 'Small minimalist tattoo ink', 'Black Tatto', '2025-04-14 16:22:54', '2025-04-19 12:16:01'),
(4, 'Hand Tatto', '/uploads/1745064910930-155040891.jpg', 'Hand tattoo minimalist', 'Tatto hand', '2025-04-14 16:23:01', '2025-04-19 12:15:18'),
(5, 'Best Tattoo Ink', '/uploads/1745064854973-252502513.jpg', 'Clear tattoo for the best', 'Cover-up Tatto', '2025-04-19 10:42:03', '2025-04-19 12:14:28'),
(6, 'Big Small Tattoo', '/uploads/1745065025631-416292858.jpg', 'Timeless art with detailed shading and depth.', 'Fine Line', '2025-04-19 12:17:05', '2025-04-19 12:17:05'),
(7, 'Yeahbo Tattoo', '/uploads/1745065044795-219142023.jpg', 'Very good tatto, will be here soon', 'Fine Line', '2025-04-19 12:17:24', '2025-04-19 12:17:24'),
(8, 'Serese Tatto', '/uploads/1745065071672-942623930.jpg', 'Timeless art with detailed shading and depth.', 'Stresa', '2025-04-19 12:17:51', '2025-04-19 12:17:51');

-- --------------------------------------------------------

--
-- Table structure for table `reels`
--

CREATE TABLE `reels` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reels`
--

INSERT INTO `reels` (`id`, `url`, `caption`, `createdAt`, `updatedAt`) VALUES
(9, 'DIN3MCvBI4A', '', '2025-05-05 13:15:57', '2025-05-05 13:15:57'),
(10, 'DILJ3ExhfZk', '', '2025-05-05 13:16:14', '2025-05-05 13:16:14'),
(11, 'DII-gu_hZ6V', '', '2025-05-05 13:16:28', '2025-05-05 13:16:28'),
(12, 'DHr0L4NBS-K', '', '2025-05-05 13:16:46', '2025-05-05 13:16:46'),
(13, 'DHh6_zSBMc9', '', '2025-05-05 13:17:01', '2025-05-05 13:17:01'),
(14, 'DHYHu4DBWQm', '', '2025-05-05 13:17:13', '2025-05-05 13:17:13'),
(15, 'DE6wIXmhvKI', '', '2025-05-10 13:35:50', '2025-05-10 13:35:50');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `description`, `imageUrl`, `price`, `duration`, `createdAt`, `updatedAt`) VALUES
(1, 'Fine Line Tatto', 'Timeless art with detailed shading and depth.', '/uploads/1746883910467-40025033.jpeg', 120, '120 Minutes', '2025-04-14 15:31:44', '2025-05-10 13:31:50'),
(2, 'Color Tattoo', 'Vibrant and bold colors that stand out.', '/uploads/1745063233004-817752760.jpg', 30, '60 Minutes', '2025-04-14 15:35:20', '2025-05-10 11:33:43'),
(4, 'Cover-up Tattoo', 'Transform your old ink into something fresh and meaningful.', '/uploads/1745063300593-997753676.jpg', 30, '60 Minutes', '2025-04-14 15:42:44', '2025-05-10 11:33:18'),
(8, 'Fine Line Tatto', 'Very good tatto, will be here soon', '/uploads/1745063927485-150474314.jpg', 30, '120 Minutes', '2025-04-19 11:58:47', '2025-05-10 11:33:24'),
(9, 'Coba', 'Timeless art with detailed shading and depth.', '/uploads/1746883966738-622954160.jpeg', 60, '120 Minutes', '2025-05-10 13:32:46', '2025-05-10 13:32:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin', '2025-04-14 12:44:47', '2025-04-14 12:44:47'),
(2, 'admin123', '$2b$10$vSUjtnek4gbfAe08eInM8.sl3tjZl6HOVOmEV6EiYF1CsqeZa6wIG', '2025-05-03 10:50:03', '2025-05-03 10:50:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactinfos`
--
ALTER TABLE `contactinfos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pagecontents`
--
ALTER TABLE `pagecontents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolioitems`
--
ALTER TABLE `portfolioitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reels`
--
ALTER TABLE `reels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `username_3` (`username`),
  ADD UNIQUE KEY `username_4` (`username`),
  ADD UNIQUE KEY `username_5` (`username`),
  ADD UNIQUE KEY `username_6` (`username`),
  ADD UNIQUE KEY `username_7` (`username`),
  ADD UNIQUE KEY `username_8` (`username`),
  ADD UNIQUE KEY `username_9` (`username`),
  ADD UNIQUE KEY `username_10` (`username`),
  ADD UNIQUE KEY `username_11` (`username`),
  ADD UNIQUE KEY `username_12` (`username`),
  ADD UNIQUE KEY `username_13` (`username`),
  ADD UNIQUE KEY `username_14` (`username`),
  ADD UNIQUE KEY `username_15` (`username`),
  ADD UNIQUE KEY `username_16` (`username`),
  ADD UNIQUE KEY `username_17` (`username`),
  ADD UNIQUE KEY `username_18` (`username`),
  ADD UNIQUE KEY `username_19` (`username`),
  ADD UNIQUE KEY `username_20` (`username`),
  ADD UNIQUE KEY `username_21` (`username`),
  ADD UNIQUE KEY `username_22` (`username`),
  ADD UNIQUE KEY `username_23` (`username`),
  ADD UNIQUE KEY `username_24` (`username`),
  ADD UNIQUE KEY `username_25` (`username`),
  ADD UNIQUE KEY `username_26` (`username`),
  ADD UNIQUE KEY `username_27` (`username`),
  ADD UNIQUE KEY `username_28` (`username`),
  ADD UNIQUE KEY `username_29` (`username`),
  ADD UNIQUE KEY `username_30` (`username`),
  ADD UNIQUE KEY `username_31` (`username`),
  ADD UNIQUE KEY `username_32` (`username`),
  ADD UNIQUE KEY `username_33` (`username`),
  ADD UNIQUE KEY `username_34` (`username`),
  ADD UNIQUE KEY `username_35` (`username`),
  ADD UNIQUE KEY `username_36` (`username`),
  ADD UNIQUE KEY `username_37` (`username`),
  ADD UNIQUE KEY `username_38` (`username`),
  ADD UNIQUE KEY `username_39` (`username`),
  ADD UNIQUE KEY `username_40` (`username`),
  ADD UNIQUE KEY `username_41` (`username`),
  ADD UNIQUE KEY `username_42` (`username`),
  ADD UNIQUE KEY `username_43` (`username`),
  ADD UNIQUE KEY `username_44` (`username`),
  ADD UNIQUE KEY `username_45` (`username`),
  ADD UNIQUE KEY `username_46` (`username`),
  ADD UNIQUE KEY `username_47` (`username`),
  ADD UNIQUE KEY `username_48` (`username`),
  ADD UNIQUE KEY `username_49` (`username`),
  ADD UNIQUE KEY `username_50` (`username`),
  ADD UNIQUE KEY `username_51` (`username`),
  ADD UNIQUE KEY `username_52` (`username`),
  ADD UNIQUE KEY `username_53` (`username`),
  ADD UNIQUE KEY `username_54` (`username`),
  ADD UNIQUE KEY `username_55` (`username`),
  ADD UNIQUE KEY `username_56` (`username`),
  ADD UNIQUE KEY `username_57` (`username`),
  ADD UNIQUE KEY `username_58` (`username`),
  ADD UNIQUE KEY `username_59` (`username`),
  ADD UNIQUE KEY `username_60` (`username`),
  ADD UNIQUE KEY `username_61` (`username`),
  ADD UNIQUE KEY `username_62` (`username`),
  ADD UNIQUE KEY `username_63` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactinfos`
--
ALTER TABLE `contactinfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pagecontents`
--
ALTER TABLE `pagecontents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `portfolioitems`
--
ALTER TABLE `portfolioitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `reels`
--
ALTER TABLE `reels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
