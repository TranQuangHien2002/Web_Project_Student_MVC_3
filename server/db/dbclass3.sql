-- Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS loginCRUD22;

-- Sử dụng cơ sở dữ liệu
USE loginCRUD22;

-- Tạo bảng user
CREATE TABLE IF NOT EXISTS user (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(255),
    password VARCHAR(50)
);

-- Tạo bảng room
CREATE TABLE IF NOT EXISTS room (
    ID_room INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    infor TEXT,
    ID INT,
    FOREIGN KEY (ID) REFERENCES user(ID)
);

-- Tạo bảng student
CREATE TABLE IF NOT EXISTS student (
    ID_student INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    classname VARCHAR(50),
    ID INT,
    FOREIGN KEY (ID) REFERENCES room(ID_room)
);

-- Thêm dữ liệu
INSERT INTO user (name, email, password) VALUES
('Nguyen Van A', 'nguyen.a@example.com', 'password123'),
('Tran Quang Hien A', 'a@gmail.com', 'aA123456'),
('Tran Quang Hien B', 'b@gmail.com', 'aA123456'),
('Le Van C', 'le.c@example.com', 'abc@123');

INSERT INTO room (name, infor, ID) VALUES
('Class A-1', 'Class A-1 infor', 1),
('Class A-2', 'Class A-2 infor', 1),
('Class B-1', 'Class B-2 infor', 2),
('Class B-2', 'Class B-2 infor', 2),
('Class C-1', 'Class C-1 infor', 3),
('Class C-2', 'Class C-2 infor', 3),
('Class D-1', 'Class D-1 infor', 4),
('Class D-2', 'Class D-2 infor', 4);

INSERT INTO student (name, email, classname, ID) VALUES
('Pham Van X', 'pham.x@example.com', 'Class A-1', 1),
('Nguyen Thi Y', 'nguyen.y@example.com', 'Class A-1', 1),
('Nguyen Thi A', 'nguyen.y@example.com', 'Class A-2', 2),
('Nguyen Thi c', 'nguyen.y@example.com', 'Class B-1', 3),
('Nguyen Thi Q', 'nguyen.y@example.com', 'Class B-1', 3),
('Nguyen Thi Y', 'nguyen.y@example.com', 'Class B-2', 4),
('a', 'nguyen.y@example.com', 'Class C-1', 5),
('Nguyen Thi aY', 'nguyen.y@example.com', 'Class C-2', 6),
('Nguyen Thi O', 'nguyen.y@example.com', 'Class C-2', 6),
('Tran Van Z', 'tran.z@example.com', 'Class D-1', 7);

