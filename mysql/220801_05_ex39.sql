DROP TABLE user;

CREATE TABLE user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM( 'F', 'M', '') default '',
    birthday DATE not null,
    age INT(3) not null default 0
);


