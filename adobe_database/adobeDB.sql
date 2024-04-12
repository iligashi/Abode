CREATE DATABASE adobe;
USE adobe;



CREATE TABLE contact (
id int IDENTITY(1,1) PRIMARY KEY,
fname varchar(50) NOT NULL,
  lname varchar(50) NOT NULL,
  email varchar(255) NOT NULL,
  subject text NOT NULL
)






INSERT INTO contact (fname, lname, email, subject) VALUES
('John', 'Doe', 'john.doe@example.com', 'Inquiry about product availability'),
('Jane', 'Smith', 'jane.smith@example.com', 'Request for quotation'),
('Mike', 'Johnson', 'mike.johnson@example.com', 'Feedback on customer service'),
('Emily', 'Brown', 'emily.brown@example.com', 'Technical support request'),
('David', 'Lee', 'david.lee@example.com', 'General inquiry');
