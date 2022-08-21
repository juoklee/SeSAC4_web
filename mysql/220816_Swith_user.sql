CREATE DATABASE swith;

USE swith;

CREATE TABLE user (
	user_id VARCHAR(20) NOT NULL PRIMARY KEY,
    user_password VARCHAR(45) NOT NULL,
    hint VARCHAR(100) NOT NULL,
    hint_answer VARCHAR(50) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    user_email VARCHAR(45) NOT NULL,
    user_image VARCHAR(100) NOT NULL,
    category1 VARCHAR(20) NOT NULL,
    category2 VARCHAR(20) NOT NULL,
    category3 VARCHAR(20) NOT NULL,
    join_date DATETIME NOT NULL,
    studylist INT
);


-- DML CREATE
INSERT INTO user VALUES (1, '홍길동', '내가 왔다');
INSERT INTO user VALUES (2, '우영우', '거꾸로 해도 우영우');

-- DML UPDATE
UPDATE user SET id= 1
WHERE name = '홍길동';

-- DML DELETE
DELETE FROM user 
WHERE id='6';


SELECT * FROM user;