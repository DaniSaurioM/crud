-- creando base de datos

CREATE DATABASE crud;

use crud;

--creado tabla

CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    birthday DATE NOT NULL,
    gender VARCHAR(50) NOT NULL,
    address VARCHAR(150) NOT NULL,
    maritalStatus VARCHAR(50) NOT NULL,
    identification VARCHAR(13) NOT NULL
);

