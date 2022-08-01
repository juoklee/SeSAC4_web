CREATE DATABASE sesac;

USE sesac;

CREATE TABLE user (
	ID varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
);

-- DDL ALTER
ALTER TABLE user drop column birthday;
ALTER TABLE user add column birthday date not null;

-- DDL delete
DROP TABLE user;
TRUNCATE TABLE user;


DESC user;






