DROP DATABASE IF EXISTS ex_db;
CREATE database ex_db;

USE ex_db;

CREATE TABLE authXeno (
	authID int not null auto_increment,
	userName VARCHAR(100) NULL,
	eMail VARCHAR(100) NULL,
    password VARCHAR(100) NULL,
	PRIMARY KEY(authID)
);