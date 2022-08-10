CREATE TABLE user (
	id VARCHAR(10) NOT NULL PRIMARY KEY,
	name VARCHAR(10) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phoneNumber VARCHAR(15),
    password VARCHAR(20) NOT NULL
);

-- DML CREATE
INSERT INTO user VALUES (1, '홍길동', '내가 왔다');
INSERT INTO user VALUES (2, '우영우', '거꾸로 해도 우영우');

-- DML UPDATE
UPDATE user SET id= 1
WHERE name = '홍길동';

-- DML DELETE
DELETE FROM user 
WHERE id='주옥';
SELECT * FROM user;


SELECT id, password FROM user WHERE id='ohwa' limit 1;
