CREATE TABLE member (
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int(2),
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);
    