-- Create states table in kijani_bikeshare_0_africa with some data
CREATE DATABASE IF NOT EXISTS kijani_bikeshare_0_africa;
USE kijani_bikeshare_0_africa;
CREATE TABLE IF NOT EXISTS cities ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO cities (name) VALUES ("Nairobi"), ("Lusaka"), ("Lagos"), ("Kigali"), ("Kampala");
