CREATE DATABASE swith; -- DB 생성 

USE swith; -- DB 사용
 
-- TABLE 생성
CREATE TABLE user (
	user_id VARCHAR(20) NOT NULL PRIMARY KEY, -- 유저 id
    user_password VARCHAR(45) NOT NULL, -- 유저 비밀번호
    hint VARCHAR(10) NOT NULL, -- 비밀번호 찾기 질문 (1, 2, 3, ..)
    hint_answer VARCHAR(50) NOT NULL, -- 비밀번호 찾기 답
    user_name VARCHAR(20) NOT NULL, -- 유저 닉네임
    user_email VARCHAR(45) NOT NULL, -- 유저 이메일
    user_image VARCHAR(100) DEFAULT 'user_default.jpg', -- 유저 프로필 이미지
    category1 VARCHAR(20) NOT NULL, -- 관심 카테고리 1
    category2 VARCHAR(20) NOT NULL, -- 관심 카테고리 2
    category3 VARCHAR(20) NOT NULL, -- 관심 카테고리 3
    join_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP -- 유저 가입 날짜
);

CREATE TABLE studygroup (
	study_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 스터디 그룹 id
    head_id VARCHAR(20) NOT NULL, -- 그룹장의 user_id
    FOREIGN KEY (`head_id`) REFERENCES `user` (`user_id`),
    study_name VARCHAR(20) NOT NULL, -- 그룹 명
    study_category VARCHAR(10) NOT NULL, -- 그룹 카테고리 
    study_form VARCHAR(45) NOT NULL, -- 그룹 형식 (온라인, 오프라인)
    study_recruit VARCHAR(3) NOT NULL, -- 그룹 모집 인원 수
    study_address VARCHAR(50), -- 오프라인일 경우 주소
    study_image VARCHAR(100) DEFAULT 'group_default.jpg', -- 그룹 프로필 이미지
    study_content MEDIUMTEXT NOT NULL, -- 그룹 소개
    start_period DATE NOT NULL, -- 그룹 시작일
    end_period DATE NOT NULL, -- 그룹 종료일 
    study_regdate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 그룹 게시물 등록 날짜
    hashtag MEDIUMTEXT, -- 해시태그 (#으로 구분)
    study_views INT DEFAULT 0 -- 조회수
);

CREATE TABLE studymember (
    member_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- primary key 있어야해서 생성함
	study_id INT NOT NULL, -- 스터디 그룹 id
    user_id VARCHAR(20) NOT NULL, -- 그룹장이 아닌 일반 멤버의 user_id
    FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
    FOREIGN KEY (`study_id`) REFERENCES `studygroup` (`study_id`)
);

CREATE TABLE likes (
    likes_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- primary key 있어야해서 생성함
    user_id VARCHAR(20) NOT NULL, -- 좋아요 한 유저의 id
    study_id INT NOT NULL, -- 좋아요 한 스터디 그룹 id
    FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
    FOREIGN KEY (`study_id`) REFERENCES `studygroup` (`study_id`)
);

-- user 정보 등록 test
insert into user (user_id,  user_password, hint, hint_answer, user_name, user_email, category1, category2, category3) values('ssha', '1234', '이름은?', '시하', '시하', 'swith@naver.com', 'study', 'coding', 'cpding');

-- studygroup 정보 등록 test
INSERT INTO studygroup (head_id, study_name, study_category, study_form, study_recruit, study_image, study_content, start_period, end_period, hashtag)
VALUES("juok", "group1", "IT", "온라인", "6", "/public/studygroup/12314","안녕하세요 group1입니다", '2022-08-16', '2022-12-30', "#공부#그룹#화이팅" );

INSERT INTO studygroup (head_id, study_name, study_category, study_form, study_recruit, study_address, study_image, study_content, start_period, end_period, hashtag)
VALUES("jubby", "group2", "취업", "오프라인", "6", "서울시 영등포구 문래동", "public/studygroup/12314", "취업 공부같이 모집합니다.", '2022-08-16', '2022-12-30', "#공부#그룹#화이팅" );

INSERT INTO studygroup (head_id, study_name, study_category, study_form, study_recruit, study_address, study_image, study_content, start_period, end_period, hashtag)
VALUES("ssha", "group3", "취업", "오프라인", "3", "서울시 영등포구 문래동", "public/studygroup/12314", "취업 공부같이 모집합니다.", '2022-08-16', '2022-12-30', "#공부#그룹#화이팅" );

-- 조회 test
SELECT * FROM user;
SELECT * FROM studygroup;
SELECT * FROM studymember;
SELECT * FROM likes;

-- 삭제 test
DELETE FROM user WHERE user_id='ohwa';
DELETE FROM user WHERE user_id='rrrr';
DELETE FROM user WHERE user_id='ss';
DELETE FROM user WHERE user_id='dfd';
DELETE FROM studymember WHERE user_id='juok';
DELETE FROM studygroup WHERE study_id=1;
-- 가입하기 버튼 클릭시 test
INSERT INTO studymember (study_id, user_id) VALUES (3, "juok");
INSERT INTO studymember (study_id, user_id) VALUES (3, "sejun22");
INSERT INTO studymember (study_id, user_id)  VALUES (2, "ssha");
INSERT INTO studymember VALUES (2, "ohwa");
INSERT INTO studymember VALUES (2, "juok");

-- join연습
SELECT * from user inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id where user.user_id="ssha";

-- ssha가 현재 3 스터디에 가입되었는지 확인 (가입 안되있을 때)
SELECT * from user inner join studymember on studymember.user_id = user.user_id where user.user_id="ssha" AND studymember.study_id=3;
SELECT * from studymember inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id;
SELECT * FROM studygroup where study_id=3;

-- M.user_id, U.user_name, U.user_image, G.study_id, G.head_id, G.study_name, G.study_content, G.study_form, G.study_address, G.study_recruit, G.start_period, G.end_period 

-- 조장
SELECT * from user inner join studygroup on studygroup.head_id=user.user_id  where user.user_id="ssha" AND studygroup.study_id=3; 

-- 조장2
SELECT * from studygroup  where studygroup.head_id="juok" AND studygroup.study_id= 3;


-- 조장일 때만 정보 나옴
SELECT * from user U inner join studygroup G on G.head_id = U.user_id inner join studymember M on M.study_id = G.study_id where U.user_id="juok" AND G.study_id=1;

-- 멤버일 때 정보 나옴
SELECT * from user inner join studymember on studymember.user_id=user.user_id  where user.user_id="ohwa" AND studymember.study_id=1;

-- 멤버


SELECT * from user inner join studymember on studymember.user_id=user.user_id  where user.user_id="정화" AND studymember.study_id=4; -- 멤버
SELECT * FROM studygroup where study_id=3; -- 그룹 정보


-- ssha가 현재 3 스터디에 가입되었는지 확인 (가입 되었을 때)
SELECT * from user inner join studymember on studymember.user_id = user.user_id where user.user_id="jubby" AND studymember.study_id=4;
SELECT * from user inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id  where user.user_id="jubby" AND studymember.study_id=4;

-- 모든 정보에 where 조건만 걸기
SELECT * from user inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id where user.user_id="jubby" AND studymember.study_id=4;


-- 탈퇴 기능
DELETE FROM studymember WHERE user_id='juok' AND study_id=2;

-- * 로그인 상태
-- 조장이면: 게시물 수정하기 버튼 -> 게시물 수정페이지로
-- 일반멤버이면: 탈퇴하기 버튼
-- 가입안한상태 이면: 가입하기 버튼

--  * 로그인 아닌 상태
-- 아예 상세페이지 접근 불가 -> 로그인 페이지로

-- 메인페이지에서 get으로 param(userid, studyid) 넣어서 보내면  detailedPost_index 실행되면서 여러 정보 보내줌(group정보, 멤버인지, 조장인지) 이거를 then으로 받아서??

SELECT COUNT(*) FROM user WHERE user_id=1;

SELECT user.username, study.studyname from user inner join studymember on studymember.userid = user.userid inner join studygroup on studygroup.study_id = studymember.studyid where user.userid=1;

create database test;
use test;
create table user (
	user_id int(2) not null primary key,
    username varchar(4) 
);
insert into user values (4,'abcd');
create table studygroup (
	study_id int(2) not null primary key,
    user_id int(2) not null,
    studyname varchar(10),
    foreign key (user_id) references user(user_id)
    );
insert into studygroup values(2,4,'sesac4');
    
create table studymember (
	id int(5) not null primary key,
    study_id int(2) not null,
    user_id int(2) not null,
    foreign key (study_id) references studygroup(study_id),
    foreign key (user_id) references user(user_id)
    );
    insert into studymember values(5,2,3);
    
    
select * from studymember;
select * from studygroup inner join user on user.user_id = studygroup.user_id where study_id=1;
SELECT * from user inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id;
    
    
