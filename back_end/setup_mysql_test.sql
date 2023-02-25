-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS kijani_test_db;
CREATE USER IF NOT EXISTS 'kijani_test'@'localhost' IDENTIFIED BY 'kijani_test_pwd';
GRANT ALL PRIVILEGES ON `kijani_test_db`.* TO 'kijani_test'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'kijani_test'@'localhost';
FLUSH PRIVILEGES;
