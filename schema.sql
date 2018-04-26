create database bamazon;

use bamazon;



create table products(

item_id INT NOT NULL AUTO_INCREMENT,
product_name varchar(255) NOT NULL,
department_name varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quanity INT NOT NULL,git
PRIMARY KEY (id)
);
)
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (1,'Sunglasses','Apperal',10,189);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (2,'Phone Stand','Electronics',8,74);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (3,'Iron','Home',20,49);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (4,'Conditioner','Beauty',7,393);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (5,'Candle','Home',3,585);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (6,'Phone Charger','Electronics',5,348);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (7,'HD TV','Electronics',350,50);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (8,'Hat','Apperal',20,150);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (9,'Coffee Pot','Home',40,70);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quanity`) VALUES (10,'Hair Dryer','Beauty',25,325);
