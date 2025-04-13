-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: expense_tracker
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Food'),(2,'Travel'),(3,'Bills'),(4,'Entertainment');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenses` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `amount` bigint NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
INSERT INTO `expenses` VALUES (1,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Food',1201,'2025-04-02 13:15:00','2025-04-12 16:31:39','2025-04-12 22:59:35'),(2,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Rent',10000,'2025-04-01 09:00:00','2025-04-12 16:31:39','2025-04-12 22:59:35'),(3,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Transport',800,'2025-04-03 08:45:00','2025-04-12 16:31:39','2025-04-12 22:59:35'),(5,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Gift',5000,'2025-04-10 18:45:00','2025-04-12 19:10:30','2025-04-12 22:59:35'),(6,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Gift',5000,'2025-04-10 18:45:00','2025-04-12 19:11:00','2025-04-12 22:59:35'),(7,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Gift',5000,'2025-04-10 18:45:00','2025-04-12 19:11:03','2025-04-12 22:59:35'),(8,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Food',1201,'2025-04-02 13:15:00','2025-04-12 19:12:17','2025-04-12 22:59:35'),(10,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/2764-fe0f.png','Anniversary',5000,'2025-04-24 00:00:00','2025-04-12 19:31:22','2025-04-13 03:39:31'),(13,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Test March Expense',10000,'2025-03-10 10:00:00','2025-04-13 03:35:35','2025-04-13 03:35:35'),(14,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png','Test March Expense',10000,'2025-03-10 10:00:00','2025-04-13 03:35:53','2025-04-13 03:35:53'),(15,7,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f958.png','Food and breverages',10000,'2025-04-23 00:00:00','2025-04-13 16:32:03','2025-04-13 16:32:03'),(16,7,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f60a.png','TEST',6544,'2025-04-16 00:00:00','2025-04-13 18:11:16','2025-04-13 18:11:16');
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `income`
--

DROP TABLE IF EXISTS `income`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `income` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `source` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `income_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `income`
--

LOCK TABLES `income` WRITE;
/*!40000 ALTER TABLE `income` DISABLE KEYS */;
INSERT INTO `income` VALUES (1,1,'?','Salary',9000.00,'2025-04-01 10:00:00','2025-04-12 16:31:33','2025-04-13 06:43:33'),(2,1,'?','Freelancing',15000.00,'2025-04-05 12:30:00','2025-04-12 16:31:33','2025-04-13 06:43:33'),(3,1,'?','Gift',546800.00,'2025-04-10 18:45:00','2025-04-12 16:31:33','2025-04-12 21:38:05'),(4,1,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4b0.png','Salary',25000.00,'2025-04-13 10:30:00','2025-04-13 05:50:06','2025-04-13 05:50:06'),(5,7,'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f957.png','Work',500000.00,'2025-04-13 00:00:00','2025-04-13 16:31:14','2025-04-13 16:31:14');
/*!40000 ALTER TABLE `income` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Shivanshu Nigam','shivanshunigam18@petpooja.com','ef23848f62e176c5cac2df2c669c63a5dc2101d8',1,'2025-04-12 16:13:44'),(2,'Diwakar','Diwakar@gmail.com','9a24ace3390fd7d1c5f993997a4bb62260d5b3d0',1,'2025-04-13 08:32:31'),(3,'SHIVANSHU NIGAM','shivanshunigam8asdsdas@gmail.com','23d42f5f3f66498b2c8ff4c20b8c5ac826e47146',1,'2025-04-13 08:59:52'),(4,'shivanshu nigam','shivanshunigam8gmail..com','ef23848f62e176c5cac2df2c669c63a5dc2101d8',1,'2025-04-13 09:17:27'),(5,'shivanshunigam8@gmail.com','shivanshunigam189@petpooja.com','62c1b0f17a6564d921a0ac66bbaabc7760f5fd13',1,'2025-04-13 16:26:03'),(7,'shivanshunigam8@gmail.com','shivanshunigam1894@petpooja.com','62c1b0f17a6564d921a0ac66bbaabc7760f5fd13',1,'2025-04-13 16:26:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'expense_tracker'
--

--
-- Dumping routines for database 'expense_tracker'
--
/*!50003 DROP PROCEDURE IF EXISTS `GetUserByEmail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserByEmail`(
    IN p_email VARCHAR(100)
)
BEGIN
    SELECT id, name, email, password, created_at
    FROM users
    WHERE email = p_email;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserData`(
IN p_userID INT
)
BEGIN
    SELECT id, name, email, created_at
    FROM users;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SignupUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SignupUser`(
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255)
)
BEGIN
    INSERT INTO users (name, email, password)
    VALUES (p_name, p_email, p_password);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_addExpense` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_addExpense`(
    IN p_userId BIGINT,
    IN p_icon VARCHAR(255),
    IN p_category VARCHAR(255),
    IN p_amount bigint,
    IN p_date DATETIME
)
BEGIN
    INSERT INTO expenses (user_id, icon, category, amount, date, created_at, updated_at)
    VALUES (p_userId, p_icon, p_category, p_amount, p_date, NOW(), NOW());
    
    select last_insert_id();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_addIncome` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_addIncome`(
    IN p_userId BIGINT,
    IN p_icon VARCHAR(255),
    IN p_category VARCHAR(255),
    IN p_amount bigint,
    IN p_date DATETIME
)
BEGIN
    INSERT INTO income (user_id, icon, source, amount, date, created_at, updated_at)
    VALUES (p_userId, p_icon, p_category, p_amount, p_date, NOW(), NOW());
    
    select last_insert_id();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_deleteExpenseById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_deleteExpenseById`(
    IN p_expenseId BIGINT
)
BEGIN
    DELETE FROM expenses WHERE id = p_expenseId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllExpense` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_getAllExpense`(
    IN p_userId BIGINT,
    IN p_category VARCHAR(100),
    IN p_fromDate DATE,
    IN p_toDate DATE
)
BEGIN
    SELECT id, user_id, icon, category, amount, date, created_at, updated_at
    FROM expenses
  WHERE 
    user_id = p_userId
    AND (p_category IS NULL OR category = p_category)
    AND (p_fromDate IS NULL OR p_toDate IS NULL OR DATE(date) BETWEEN p_fromDate AND p_toDate);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllIncome` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_getAllIncome`(
IN p_userId INT
)
BEGIN
    SELECT id, user_id, icon, source, amount, date, created_at, updated_at
    FROM income
    WHERE user_id = p_userId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getDashboardData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_getDashboardData`(
    IN p_userId BIGINT
)
BEGIN
    DECLARE totalIncome DECIMAL(10, 2) DEFAULT 0;
    DECLARE totalExpense DECIMAL(10, 2) DEFAULT 0;
    DECLARE last30DaysExpenseTotal DECIMAL(10, 2) DEFAULT 0;
    DECLARE last60DaysIncomeTotal DECIMAL(10, 2) DEFAULT 0;

    -- Total Income
    SELECT IFNULL(SUM(amount), 0) INTO totalIncome
    FROM income
    WHERE user_id = p_userId;

    -- Total Expense
    SELECT IFNULL(SUM(amount), 0) INTO totalExpense
    FROM expenses
    WHERE user_id = p_userId;

    -- Last 60 Days Income
    SELECT IFNULL(SUM(amount), 0) INTO last60DaysIncomeTotal
    FROM income
    WHERE user_id = p_userId
      AND date >= DATE_SUB(NOW(), INTERVAL 60 DAY);

    -- Last 30 Days Expense
    SELECT IFNULL(SUM(amount), 0) INTO last30DaysExpenseTotal
    FROM expenses
    WHERE user_id = p_userId
      AND date >= DATE_SUB(NOW(), INTERVAL 30 DAY);

    -- Final result
    SELECT 
        (totalIncome - totalExpense) AS total_balance,
        totalIncome AS total_income,
        totalExpense AS total_expense,
        last30DaysExpenseTotal AS last_30_days_expense,
        last60DaysIncomeTotal AS last_60_days_income;

    -- Last 5 transactions from income and expenses combined
    SELECT * FROM (
        SELECT id, icon, source AS title, amount, date, 'income' AS type
        FROM (
            SELECT * FROM income
            WHERE user_id = p_userId
            ORDER BY date DESC
            LIMIT 5
        ) AS income_recent

        UNION ALL

        SELECT id, icon, category AS title, amount, date, 'expense' AS type
        FROM (
            SELECT * FROM expenses
            WHERE user_id = p_userId
            ORDER BY date DESC
            LIMIT 5
        ) AS expense_recent
    ) AS combined
    ORDER BY date DESC
    LIMIT 5;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getExpenseCategories` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_getExpenseCategories`(IN p_userId BIGINT)
BEGIN
    SELECT DISTINCT category
    FROM expenses
    WHERE user_id = p_userId
      AND category IS NOT NULL
      AND category != ''
    ORDER BY category;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_GetMonthlyExpenditureChange` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_GetMonthlyExpenditureChange`(
    IN p_user_id INT
)
BEGIN
    DECLARE v_current_month_total DECIMAL(10,2) DEFAULT 0;
    DECLARE v_previous_month_total DECIMAL(10,2) DEFAULT 0;
    DECLARE v_percentage_change DECIMAL(10,2) DEFAULT 0;
    DECLARE v_formatted_change VARCHAR(20);

    -- Get total expenditure for current month
    SELECT IFNULL(SUM(amount), 0) INTO v_current_month_total
    FROM expenses
    WHERE user_id = p_user_id 
      AND MONTH(date) = MONTH(CURDATE()) 
      AND YEAR(date) = YEAR(CURDATE());

    -- Get total expenditure for previous month
    SELECT IFNULL(SUM(amount), 0) INTO v_previous_month_total
    FROM expenses
    WHERE user_id = p_user_id 
      AND MONTH(date) = MONTH(CURDATE() - INTERVAL 1 MONTH) 
      AND YEAR(date) = YEAR(CURDATE() - INTERVAL 1 MONTH);

    -- Calculate percentage change
    IF v_previous_month_total = 0 THEN
        SET v_percentage_change = 0;
    ELSE
        SET v_percentage_change = ((v_current_month_total - v_previous_month_total) / v_previous_month_total) * 100;
    END IF;

    -- Format percentage change as a string with %
    SET v_formatted_change = CONCAT(ROUND(v_percentage_change, 1), ' %');

    -- Return results
    SELECT 
        p_user_id AS user_id,
        v_current_month_total AS current_month_total,
        v_previous_month_total AS previous_month_total,
        v_formatted_change AS percentage_change;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getMonthlyPercentageChange` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_getMonthlyPercentageChange`()
BEGIN
    SELECT
        user_id,
        curr_month,
        prev_month,
        curr_total,
        prev_total,
        CASE 
            WHEN prev_total = 0 THEN NULL
            ELSE ROUND(((curr_total - prev_total) / prev_total) * 100, 2)
        END AS percent_change
    FROM (
        SELECT 
            user_id,
            DATE_FORMAT(date, '%Y-%m') AS curr_month,
            SUM(amount) AS curr_total,
            LAG(SUM(amount)) OVER (PARTITION BY user_id ORDER BY DATE_FORMAT(date, '%Y-%m')) AS prev_total,
            LAG(DATE_FORMAT(date, '%Y-%m')) OVER (PARTITION BY user_id ORDER BY DATE_FORMAT(date, '%Y-%m')) AS prev_month
        FROM expenses
        GROUP BY user_id, DATE_FORMAT(date, '%Y-%m')
    ) AS monthly_data;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getTop3ExpenseDaysPerUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_getTop3ExpenseDaysPerUser`()
BEGIN
    SELECT user_id, date, SUM(amount) AS total_spent
    FROM expenses
    GROUP BY user_id, date
    ORDER BY user_id, total_spent DESC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getUserStatistics` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_getUserStatistics`()
BEGIN
    -- Temporary table for storing monthly expenditure data
    CREATE TEMPORARY TABLE IF NOT EXISTS monthly_expenses AS
    SELECT 
        user_id,
        DATE_FORMAT(date, '%Y-%m') AS month,
        SUM(amount) AS total_spent
    FROM expenses
    GROUP BY user_id, DATE_FORMAT(date, '%Y-%m');

    -- Statistic 1: Top 3 expenditure days per user
    SELECT 
        user_id, 
        date,
        SUM(amount) AS total_spent
    FROM expenses
    GROUP BY user_id, date
    ORDER BY user_id, total_spent DESC
    LIMIT 3;

    -- Statistic 2: Percentage change in expenditure from the previous month
    SELECT 
        user_id,
        curr_month,
        prev_month,
        curr_total,
        prev_total,
        CASE 
            WHEN prev_total = 0 THEN NULL
            ELSE ROUND(((curr_total - prev_total) / prev_total) * 100, 2)
        END AS percent_change
    FROM (
        SELECT 
            user_id,
            DATE_FORMAT(date, '%Y-%m') AS curr_month,
            SUM(amount) AS curr_total,
            LAG(SUM(amount)) OVER (PARTITION BY user_id ORDER BY DATE_FORMAT(date, '%Y-%m')) AS prev_total,
            LAG(DATE_FORMAT(date, '%Y-%m')) OVER (PARTITION BY user_id ORDER BY DATE_FORMAT(date, '%Y-%m')) AS prev_month
        FROM expenses
        GROUP BY user_id, DATE_FORMAT(date, '%Y-%m')
    ) AS monthly_data;

    -- Statistic 3: Predicted total expenditure for next month
    SELECT 
        user_id,
        AVG(total_spent) AS predicted_next_month_expense
    FROM monthly_expenses
    WHERE month >= DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 3 MONTH), '%Y-%m')
    GROUP BY user_id;

    -- Clean up temporary table
    DROP TEMPORARY TABLE IF EXISTS monthly_expenses;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getUserStatisticsByUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_getUserStatisticsByUserId`(IN p_user_id INT)
BEGIN
    -- Statistic 1: Top 3 expenditure days for the given user
    SELECT 
        user_id, 
        DATE(date) AS date,
        SUM(amount) AS total_spent
    FROM expenses
    WHERE user_id = p_user_id
    GROUP BY user_id, DATE(date)
    ORDER BY total_spent DESC
    LIMIT 3;
    
    -- Separate result set for Statistic 2: Percentage change in expenditure from the previous month for the given user
    
    -- Separate result set for Statistic 3: Predicted total expenditure for next month for the given user
    SELECT 
        user_id,
        AVG(total_spent) AS predicted_next_month_expense
    FROM (
        SELECT 
            user_id,
            DATE_FORMAT(date, '%Y-%m') AS month,
            SUM(amount) AS total_spent
        FROM expenses
        WHERE user_id = p_user_id
        GROUP BY user_id, DATE_FORMAT(date, '%Y-%m')
    ) AS monthly_expenses
    WHERE month >= DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 3 MONTH), '%Y-%m')
    GROUP BY user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_predictNextMonthExpense` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_predictNextMonthExpense`()
BEGIN
    SELECT 
        user_id,
        AVG(monthly_total) AS predicted_next_month_expense
    FROM (
        SELECT 
            user_id,
            DATE_FORMAT(date, '%Y-%m') AS month,
            SUM(amount) AS monthly_total
        FROM expenses
        GROUP BY user_id, DATE_FORMAT(date, '%Y-%m')
        ORDER BY user_id, month DESC
    ) AS monthly_expenses
    WHERE month >= DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 3 MONTH), '%Y-%m')
    GROUP BY user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-13 19:07:20
