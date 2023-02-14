-- Create states table in kijani_bikeshare_4_africa with some data
CREATE DATABASE IF NOT EXISTS kijani_bikeshare_4_africa;
USE kijani_bikeshare_4_africa;
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
