-- Create states table in kijani_bikeshare_7_africa with some data
CREATE DATABASE IF NOT EXISTS kijani_bikeshare_7_africa;
USE kijani_bikeshare_7_africa;
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
