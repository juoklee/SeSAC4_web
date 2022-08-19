CREATE DATABASE swith;

USE swith;

CREATE TABLE user (
	user_id VARCHAR(20) NOT NULL PRIMARY KEY,
    user_password VARCHAR(45) NOT NULL,
    hint VARCHAR(100) NOT NULL,
    hint_answer VARCHAR(50) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    user_email VARCHAR(45) NOT NULL,
    user_image VARCHAR(100),
    category1 VARCHAR(20) NOT NULL,
    category2 VARCHAR(20) NOT NULL,
    category3 VARCHAR(20) NOT NULL,
    join_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE studygroup (
	study_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    head_id VARCHAR(20) NOT NULL,
    FOREIGN KEY (`head_id`) REFERENCES `user` (`user_id`),
    study_name VARCHAR(20) NOT NULL,
    study_category VARCHAR(10) NOT NULL,
    study_form VARCHAR(45) NOT NULL,
    study_recruit VARCHAR(3) NOT NULL,
    study_address VARCHAR(50),
    study_image VARCHAR(100),
    study_content VARCHAR(20) NOT NULL,
    start_period DATETIME NOT NULL,
    end_period DATETIME NOT NULL,
    study_regdate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    hasgtag MEDIUMTEXT,
    study_views INT DEFAULT 0
);

CREATE TABLE studymember (
	study_id INT NOT NULL,
    user_id VARCHAR(20) NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
    FOREIGN KEY (`study_id`) REFERENCES `studygroup` (`study_id`)
);

-- user 정보 등록 test
insert into user (user_id,  user_password, hint, hint_answer, user_name, user_email, category1, category2, category3) values('ssha', '1234', '이름은?', '시하', '시하', 'swith@naver.com', 'study', 'coding', 'cpding');

-- studygroup 정보 등록 test
INSERT INTO studygroup (head_id, study_name, study_category, study_form, study_recruit, study_image, study_content, start_period, end_period, hasgtag)
VALUES("aa", "swith", "IT", "온라인", "6", "public/studygroup/12314","안녕하세요 swith입니다", '2022-08-16', '2022-12-30', "#공부#그룹#화이팅" );

INSERT INTO studygroup (head_id, study_name, study_category, study_form, study_recruit, study_address, study_image, study_content, start_period, end_period, hasgtag)
VALUES("jubby", "jubby가 대장이다", "취업", "오프라인", "6", "서울시 영등포구 문래동", "public/studygroup/12314", "취업 공부같이 모집합니다.", '2022-08-16', '2022-12-30', "#공부#그룹#화이팅" );

-- 조회 test
SELECT * FROM user;
SELECT * FROM studygroup;
SELECT * FROM studymember;

-- 삭제 test
DELETE FROM user WHERE user_id='eeee';
DELETE FROM user WHERE user_id='rrrr';
DELETE FROM user WHERE user_id='ss';
DELETE FROM user WHERE user_id='dfd';

-- 가입하기 버튼 클릭시 test
INSERT INTO studymember VALUES (3, "aa");

-- join연습
SELECT * from user inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id where user.user_id="ssha";

-- ssha가 현재 3 스터디에 가입되었는지 확인 (가입 안되있을 때)
SELECT * from user inner join studymember on studymember.user_id = user.user_id where user.user_id="ssha" AND studymember.study_id=3;
SELECT * from studymember inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id;
SELECT * FROM studygroup where study_id=3;

-- 조장인 경우 ( group의 head_id = user_id)
SELECT * from user inner join studymember on studymember.user_id=user.user_id inner join studygroup on studygroup.head_id = user.user_id where user.user_id="정화" AND studygroup.study_id=4;

SELECT * from user inner join studygroup on studygroup.head_id=user.user_id  where user.user_id="정화" AND studygroup.study_id=4; -- 조장
SELECT * from user inner join studymember on studymember.user_id=user.user_id  where user.user_id="정화" AND studymember.study_id=4; -- 멤버
SELECT * FROM studygroup where study_id=3; -- 그룹 정보


-- ssha가 현재 3 스터디에 가입되었는지 확인 (가입 되었을 때)
SELECT * from user inner join studymember on studymember.user_id = user.user_id where user.user_id="jubby" AND studymember.study_id=4;
SELECT * from user inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id  where user.user_id="jubby" AND studymember.study_id=4;

-- 모든 정보에 where 조건만 걸기
SELECT * from user inner join studymember on studymember.user_id = user.user_id inner join studygroup on studygroup.study_id = studymember.study_id where user.user_id="jubby" AND studymember.study_id=4;


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
    
    
