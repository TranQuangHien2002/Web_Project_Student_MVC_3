-- Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS loginCRUD;
-- Sử dụng cơ sở dữ liệu
USE loginCRUD;
-- Tạo bảng user
CREATE TABLE IF NOT EXISTS user (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(255),
    password VARCHAR(50)
);
-- Tạo bảng studentstudent
CREATE TABLE IF NOT EXISTS student (
    ID_student INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    classname VARCHAR(50),
    ID INT,
    FOREIGN KEY (ID) REFERENCES user(ID)
);
 CREATE TABLE room (
    ID_room INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    infor TEXT,
    ID INT,
    FOREIGN KEY (ID) REFERENCES user(ID)
);
INSERT INTO user (name, email, password) VALUES
('Nguyen Van A', 'nguyen.a@example.com', 'password123'),
('Tran Quang Hien', 'a@gmail.com', 'aA123456'),
('Le Van C', 'le.c@example.com', 'abc@123');
 
INSERT INTO student (name, email, classname, ID) VALUES
('Pham Van X', 'pham.x@example.com', 'Class A', 1),
('Nguyen Thi Y', 'nguyen.y@example.com', 'Class B', 2),
('Tran Van Z', 'tran.z@example.com', 'Class C', 3);
 
INSERT INTO room (name, infor,ID) VALUES
('Class A', 'Class A infor',2),
('Class B', 'Class B infor',2),
('Class C', 'Class C infor',1);
