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


CREATE TABLE UserProfile (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50),
    surname NVARCHAR(50),
    email NVARCHAR(100),
    bio NVARCHAR(MAX),
    phoneNumber NVARCHAR(20),
    profileImageUrl NVARCHAR(MAX),
    status NVARCHAR(50)
);
INSERT INTO UserProfile (name, surname, email, bio, phoneNumber, profileImageUrl, status)
VALUES
('Ili', 'Gashi', 'ili.gashi@gashi.com', 'Passionate about technology and innovation.', '1234567890', 'http://ili.jpg/profile1.jpg', 'Active'),
('Didi', 'Rexha', 'didi.rexha@gashi.com', 'Enthusiastic about programming and problem-solving.', '9876543210', 'http://didi.png/profile2.jpg', 'Inactive'),
('Rina', 'Rina', 'rina.rina@gashi.com', 'Creative thinker with a passion for design and art.', '5551234567', 'http://rina.jpg/profile3.jpg', 'Active');


SELECT * FROM UserProfile;
