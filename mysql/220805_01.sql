CREATE TABLE visitor (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(10) NOT NULL,
    comment mediumtext
);

-- DML CREATE
INSERT INTO visitor VALUES (1, '홍길동', '내가 왔다');
INSERT INTO visitor VALUES (2, '우영우', '거꾸로 해도 우영우');

-- DML UPDATE
UPDATE visitor SET id= 1
WHERE name = '홍길동';

-- DML DELETE
DELETE FROM visitor 
WHERE id='6';


SELECT * FROM visitor;