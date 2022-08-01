-- DML INSERT
INSERT INTO user (ID, name, birthday) VALUES ('id1', '홍길동', '2022-08-01');
INSERT INTO user (ID, birthday) VALUES ('id2', '2022-08-01');
INSERT INTO user VALUES ('id3', '홍길동', '2022-08-01');

-- DML SELECT
SELECT * FROM user
;
SELECT * FROM user
WHERE name='홍길동'
;
SELECT * FROM user
WHERE name='홍길동' AND id='id1'
;
SELECT * FROM user
WHERE name='홍길동'
ORDER BY ID DESC
;
SELECT * FROM user
ORDER BY ID ASC LIMIT 2
;
SELECT * FROM user
LIMIT 2
;
SELECT name, birthday
FROM user
;

-- DML SQL
SELECT * FROM player 
WHERE height BETWEEN 160 AND 180;

SELECT * FROM player
WHERE position IN ('striker', 'goalkeeper');

SELECT * FROM player
WHERE position IN ('striker', 'goalkeeper');
-- 위의 IN과 동일
SELECT * FROM player
WHERE position='striker' OR  position='goalkeeper';

SELECT * FROM user
WHERE name LIKE '_주옥';

SELECT * FROM user
WHERE name LIKE '__옥';

SELECT * FROM user
WHERE name LIKE '%옥';

SELECT * FROM user
WHERE name LIKE '이%';

-- DML UPDATE
UPDATE user SET name='홍길동2'
WHERE ID != 'id2';

-- DML DELETE
DELETE FROM user 
WHERE name='이주옥';






