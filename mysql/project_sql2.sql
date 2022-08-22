-- 조장일때만 나오고, member 수만큼 데이터가 나오는 쿼리 (member가 없으면 안나온다!)
SELECT U.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views from user U 
inner join studygroup G on G.head_id = U.user_id 
inner join studymember M on M.study_id = G.study_id 
where U.user_id="jubby" AND G.study_id=2;

-- 조장일때만 나오고 2-1
SELECT * from user
inner join studygroup on studygroup.head_id=user.user_id  where user.user_id="juok" AND studygroup.study_id=3;

-- , count(*) AS member_count

-- 조장일 때는 안나오고(당연히 가입안해도 안나옴), member 일때만 나오지만, member 정보가 다 나오지 않는다? 1-1
SELECT M.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views from user U 
inner join studymember M on M.user_id = U.user_id
inner join studygroup G on G.study_id = M.study_id 
where U.user_id="ssha" AND M.study_id=1;


-- 멤버라고 가정하에, 보낼 데이터 (member가 아무도 없이 조장만 있으면 안나옴) 1-2
SELECT M.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views 
from user U 
inner join studymember M on M.user_id = U.user_id
inner join studygroup G on G.study_id = M.study_id 
where M.study_id=2;



-- 2-2


-- 조장o, 멤버0명 일때 group 정보
SELECT M.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views 
from user U 
inner join studymember M on M.user_id = U.user_id
inner join studygroup G on G.study_id = M.study_id 
where M.study_id=2;


-- 어쩌다 걸린, 유저가 멤버로 가입되어 있는 그룹 정보 다 불러오기
SELECT M.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_image, G.start_period, G.end_period, G.hashtag, G.study_views
FROM studymember M
inner join User U on U.user_id = M.user_id
inner join studygroup G on G.study_id = M.study_id
WHERE M.user_id="ohwa";


-- SELECT A.상품, A.판매금액, B_TMP.생산연도 
-- FROM A 
-- INNER JOIN (SELECT 생산연도 FROM B  ORDER BY 생산연도 ASC FETCH FIRST 1 ROWS ONLY) AS B_TMP
-- ON 1 = 1;

-- 조장, 멤버가 있는지 없는지 (check) & 있으면 보낼 데이터 (?????)
SELECT U.user_id, U.user_name, U.user_image 
from user U, studygroup G
inner join studymember M on M.user_id = U.user_id
where U.user_id="jubby" AND g.study_id=2;


-- 멤버가 없으면 user_id 없고, 있으면 개수만큼 나옴
SELECT U.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views
FROM studygroup G
LEFT JOIN studymember AS M
   ON G.study_id = M.study_id
LEFT JOIN user AS U
    ON U.user_id = M.user_id
WHERE G.study_id = 1; 


-- 조장의 user 정보 읽기

