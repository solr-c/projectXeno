DROP DATABASE IF EXISTS ex_db;
CREATE DATABASE ex_db;

USE ex_db;

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(100) NULL,
	lastname VARCHAR(100) NULL,
	username VARCHAR(100) NULL,
	email VARCHAR(100) NULL,
    password VARCHAR(100) NULL,
	PRIMARY KEY(id)
);

CREATE TABLE books (
  id INT NOT NULL auto_increment,
  userID VARCHAR(100) NULL,
  tags varchar(100) null,
  bookID varchar(100) null,
  PRIMARY KEY (id)
);

SELECT * FROM user;
select * from books;