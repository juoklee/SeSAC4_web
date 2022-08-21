-- 멤버인지 아닌지 (check용)
SELECT * from studymember
where studymember.user_id="jubby" AND studymember.study_id=1;

-- 멤버이면 보낼 데이터 (user+group)
SELECT M.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views from user U 
inner join studymember M on M.user_id = U.user_id
inner join studygroup G on G.study_id = M.study_id 
where M.study_id=2;

-- 멤버가 아니면
-- 조장인지 아닌지 (check) & 멤버가 없으면 보낼 데이터
SELECT * from studygroup
where studygroup.head_id="jubby" AND studygroup.study_id=2;

-- 조장, 멤버가 있는지 없는지 (check) & 있으면 보낼 데이터 (?????)
SELECT M.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views from user U 
inner join studygroup G on G.head_id = U.user_id 
inner join studymember M on M.study_id = G.study_id 
where U.user_id="jubby" AND G.study_id=2;


-- 조장, 멤버가 없으면 user_id 없고, 있으면 개수만큼 나옴!! good
SELECT U.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views
FROM studygroup G
LEFT JOIN studymember AS M
   ON G.study_id = M.study_id
LEFT JOIN user AS U
    ON U.user_id = M.user_id
WHERE G.study_id = 3; 



-- 조장, 멤버가 없으면 보낼 데이터
-- 위에 것 쓰기


-- 가입X상태, 멤버가 있는지 없는지 (check) & 있으면 보낼 데이터
SELECT U.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views
FROM studygroup G
LEFT JOIN studymember AS M
   ON G.study_id = M.study_id
LEFT JOIN user AS U
    ON U.user_id = M.user_id
WHERE G.study_id = 3; 





SELECT M.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.study_category, G.study_image, G.study_content, G.start_period, G.end_period, G.hashtag, G.study_views 
from user U 
inner join studymember M on M.user_id = U.user_id
inner join studygroup G on G.study_id = M.study_id 
where M.study_id=3;



-- 가입X상태, 멤버가 없는 그룹이면 보낼 데이터
SELECT * from studygroup
where studygroup.study_id=3;



