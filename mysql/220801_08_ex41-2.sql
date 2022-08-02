CREATE DATABASE sesac;

CREATE TABLE user (
	user_id VARCHAR(15) NOT NULL PRIMARY KEY,
	user_name VARCHAR(10) NOT NULL,
    password VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    cellphone VARCHAR(15) NOT NULL,
    gender VARCHAR(2) DEFAULT "",
    birthday DATE, 
    user_address VARCHAR(50) DEFAULT "",
    join_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product (
	prod_id INT NOT NULL PRIMARY KEY,
    prod_name VARCHAR(15) NOT NULL,
    category VARCHAR(7) NOT NULL,
    prod_price INT NOT NULL,
    prod_option VARCHAR(10) DEFAULT "FREE"
);

CREATE TABLE ordered (
	user_id VARCHAR(15) NOT NULL,
    prod_id INT NOT NULL,
	order_id INT NOT NULL PRIMARY KEY,
    qty INT NOT NULL,
    order_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    order_price INT NOT NULL,
    order_address VARCHAR(50) NOT NULL,
    order_option VARCHAR(10) DEFAULT "FREE",
	FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (prod_id) REFERENCES product(prod_id)
);