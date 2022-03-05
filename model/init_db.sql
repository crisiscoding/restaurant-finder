

DROP TABLE if exists favourites;

CREATE TABLE favourites(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL,
    `website` TEXT,
    `cuisine` VARCHAR(255),
    `notes` TEXT
);

INSERT INTO favourites (`name`, website, cuisine, notes)
VALUES ("Cristina", "www.cris.com", "vegan-friendly", "this is a test");

INSERT INTO favourites (`name`, website, cuisine, notes)
VALUES ("Meena", "www.meena.com", "vegetarian", "second test");

INSERT INTO favourites (`name`, website, cuisine, notes)
VALUES ("Laura", "www.laura.com", "gluten-free", "third test!");
