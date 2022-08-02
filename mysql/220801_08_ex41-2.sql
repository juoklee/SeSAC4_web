CREATE DATABASE sesac;

CREATE TABLE user (
	user_id varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
);