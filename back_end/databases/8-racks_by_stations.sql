-- Create states table in kijani_bikeshare_8_africa with some data
CREATE DATABASE IF NOT EXISTS kijani_bikeshare_8_africa;
USE kijani_bikeshare_8_africa;
CREATE TABLE IF NOT EXISTS cities ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO cities (name) VALUES ("Nairobi"), ("Lusaka"), ("Lagos"), ("Kigali"), ("Kampala");

CREATE TABLE IF NOT EXISTS areas ( 
    id INT NOT NULL AUTO_INCREMENT, 
    city_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(city_id) REFERENCES cities(id)
);
INSERT INTO areas (city_id, name) VALUES (1, "Karen"), (1, "Lavington"), (1, "CBD"), (1, "South C"), (1, "Upper Hill");
INSERT INTO areas (city_id, name) VALUES (2, "Kabulonga"), (2, "Roma");
INSERT INTO areas (city_id, name) VALUES (3, "Ikeja"), (3, "Egbeda"), (3, "Satelite Town");
INSERT INTO areas (city_id, name) VALUES (4, "Kimironko");
INSERT INTO areas (city_id, name) VALUES (5, "Lugala"), (5, "Kagoma"), (5, "Bulambiro"), (5, "Makerere");


CREATE TABLE IF NOT EXISTS stations ( 
    id INT NOT NULL AUTO_INCREMENT, 
    area_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(area_id) REFERENCES areas(id)
);

INSERT INTO stations (area_id, name) 
VALUES 
    (1, "Karen Station 1"), (1, "Karen Station 2"), (1, "Karen Station 3"), 
    (2, "Lavington Station 1"), (2, "Lavington Station 2"), (2, "Lavington Station 3"), 
    (3, "CBD Station 1"), (3, "CBD Station 2"), (3, "CBD Station 3"), 
    (4, "South C Station 1"), (4, "South C Station 2"), (4, "South C Station 3"), 
    (5, "Upper Hill Station 1"), (5, "Upper Hill Station 2"), (5, "Upper Hill Station 3"), 
    (6, "Kabulonga Station 1"), (6, "Kabulonga Station 2"), (6, "Kabulonga Station 3"), 
    (7, "Roma Station 1"), (7, "Roma Station 2"), (7, "Roma Station 3"), 
    (8, "Ikeja Station 1"), (8, "Ikeja Station 2"), (8, "Ikeja Station 3"), 
    (9, "Egbeda Station 1"), (9, "Egbeda Station 2"), (9, "Egbeda Station 3"), 
    (10, "Satelite Town Station 1"), (10, "Satelite Town Station 2"), (10, "Satelite Town Station 3"), 
    (11, "Kimironko Station 1"), (11, "Kimironko Station 2"), (11, "Kimironko Station 3"), 
    (12, "Lugala Station 1"), (12, "Lugala Station 2"), (12, "Lugala Station 3"), 
    (13, "Kagoma Station 1"), (13, "Kagoma Station 2"), (13, "Kagoma Station 3"), 
    (14, "Bulambiro Station 1"), (14, "Bulambiro Station 2"), (14, "Bulambiro Station 3"), 
    (15, "Makerere Station 1"), (15, "Makerere Station 2"), (15, "Makerere Station 3");


CREATE TABLE IF NOT EXISTS racks (
    id INT NOT NULL AUTO_INCREMENT,
    station_id INT NOT NULL,
    number_of_docks INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (station_id) REFERENCES stations(id)
);

INSERT INTO racks (station_id, name) 
VALUES (1, 20), (2, 20), (3, 20), (4, 20), (5, 20), 
       (6, 20), (7, 20), (8, 20), (9, 20), (10, 20),
       (11, 20), (12, 20), (13, 20), (14, 20), (15, 20), 
       (16, 20), (17, 20), (18, 20), (19, 20), (20, 20),
       (21, 20), (22, 20), (23, 20), (24, 20), (25, 20), 
       (26, 20), (27, 20), (28, 20), (29, 20), (30, 20),
       (31, 20), (32, 20), (33, 20), (34, 20), (35, 20), 
       (36, 20), (37, 20), (38, 20), (39, 20), (40, 20),
       (41, 20), (42, 20), (43, 20), (44, 20), (45, 20);


/*INSERT INTO racks (station_id, name) VALUES
(1, "Rack 1"), (1, "Rack 2"), (1, "Rack 3"),
(2, "Rack 4"), (2, "Rack 5"), (2, "Rack 6"),
(3, "Rack 7"), (3, "Rack 8"), (3, "Rack 9"),
(4, "Rack 10"), (4, "Rack 11"), (4, "Rack 12"),
(5, "Rack 13"), (5, "Rack 14"), (5, "Rack 15");*/

CREATE TABLE IF NOT EXISTS docks (
    id INT NOT NULL AUTO_INCREMENT,
    rack_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (rack_id) REFERENCES racks(id)
);

/*DECLARE @i INT = 1;
DECLARE @number_of_docks INT;
DECLARE @number_of_docks_for_each_rack INT = 2;
DECLARE @number_of_docks_for_all_racks INT = 90;

WHILE @i <= 45 BEGIN
    SET @number_of_docks = @number_of_docks_for_each_rack * @i;
    INSERT INTO docks (rack_id)
    VALUES (@i), (@i);
    SET @i = @i + 1;
END;

<F5><F5><F5><F5>INSERT INTO docks (rack_id, name) VALUES
(1, "Dock 1"), (1, "Dock 2"),
(2, "Dock 3"), (2, "Dock 4"),
(3, "Dock 5"), (3, "Dock 6"),
(4, "Dock 7"), (4, "Dock 8"),
(5, "Dock 9"), (5, "Dock 10");

SET @i = 1;
SET @rack_id = 1;
SET @dock_id = 1;
SET @number_of_docks_for_each_rack = 2;

WHILE @i <= 45 DO
  SET @rack_id = @i;
  INSERT INTO docks (rack_id, dock_id, name)
  VALUES (@rack_id, @dock_id, CONCAT("Dock ", @dock_id)), (@rack_id, @dock_id + 1, CONCAT("Dock ", @dock_id + 1));
  SET @i = @i + 1;
  SET @dock_id = @dock_id + @number_of_docks_for_each_rack;
END WHILE;*/

DELIMITER $$

CREATE PROCEDURE insert_docks()
BEGIN
DECLARE v_i INT DEFAULT 1;
DECLARE v_rack_id INT DEFAULT 1;
DECLARE v_dock_id INT DEFAULT 1;
DECLARE v_number_of_docks_for_each_rack INT DEFAULT 2;

WHILE v_i <= 45 DO
SET v_rack_id = v_i;
INSERT INTO docks (rack_id, dock_id, name)
VALUES (v_rack_id, v_dock_id, CONCAT("Dock ", v_dock_id)), (v_rack_id, v_dock_id + 1, CONCAT("Dock ", v_dock_id + 1));
SET v_i = v_i + 1;
SET v_dock_id = v_dock_id + v_number_of_docks_for_each_rack;
END WHILE;
END $$

DELIMITER ;
