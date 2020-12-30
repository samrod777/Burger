In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN
);