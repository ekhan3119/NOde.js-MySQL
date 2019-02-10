DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazonDB;

USE bamazonDB;
CREATE TABLE products(
    item_id INT AUTO_INCREMENT,
    product_name VARCHAR (255) NOT NULL,
    departmant_name VARCHAR (255) NOT NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

USE bamazonDB;
INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("shoes", 'men', 95, 10);

INSERT INTO products
  (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("purse", 'women', 50, 5);

INSERT INTO products
  (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("wallet", 'men', 70, 15);

INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("shirt", 'men', 66, 7);

INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("cologne", 'men', 105, 11);

INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("body spray", 'women', 125, 9);

INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("skirt", 'women', 55, 17);

INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("dress", 'women', 45, 12);

INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("belt", 'men', 30, 14);

INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("shampoo", 'beauty', 6, 10);

INSERT INTO products
    (product_name, departmant_name,price, stock_quantity)
  VALUES
    ("tooth paste", 'beauty', 5, 10);
USE bamazonDB;
SELECT * FROM products;

