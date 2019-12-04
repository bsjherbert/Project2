CREATE DATABASE exercise_db;

USE exercise_db;

CREATE TABLE exercise
(
	id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    type VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE input (
    id int NOT NULL AUTO_INCREMENT,
    sets INTEGER,
    weights INTEGER,
    comments VARCHAR(255)
);
