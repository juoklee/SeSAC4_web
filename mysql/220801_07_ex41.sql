-- 1
SELECT * FROM user
ORDER BY birthday ASC;

-- 2
SELECT * FROM user
WHERE gender = 'M'
ORDER BY name DESC;

-- 3
SELECT id, name FROM user
WHERE birthday LIKE '199%';

-- 4
SELECT * FROM user
WHERE birthday LIKE '_____06%'
ORDER BY birthday ASC;

-- 5
SELECT * FROM user
WHERE gender = 'M' AND birthday LIKE '197%';

-- 6
SELECT * FROM user
ORDER BY age DESC
LIMIT 3;

-- 7
SELECT * FROM user
WHERE age BETWEEN 25 AND 50;

-- 8
UPDATE user SET pw='12345678'
WHERE id = 'hong1234';
SELECT * FROM user;

-- 9
DELETE FROM user 
WHERE id = 'jungkrat';
SELECT * FROM user;