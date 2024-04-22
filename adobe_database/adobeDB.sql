CREATE DATABASE adobe;
USE adobe;



CREATE TABLE contact (
id int IDENTITY(1,1) PRIMARY KEY,
fname varchar(50) NOT NULL,
  lname varchar(50) NOT NULL, 
  email varchar(255) NOT NULL,
  subject text NOT NULL
)








CREATE TABLE UserProfile (
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    name NVARCHAR(MAX) NOT NULL,
    surname NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    bio NVARCHAR(MAX),
    phoneNumber NVARCHAR(20) NOT NULL,
    profileImageUrl NVARCHAR(MAX),
    status NVARCHAR(50)
);
INSERT INTO UserProfile (name, surname, email, bio, phoneNumber, profileImageUrl, status)
VALUES
('Ili', 'Gashi', 'ili.gashi@gashi.com', 'Passionate about technology and innovation.', '1234567890', 'http://ili.jpg/profile1.jpg', 'Active'),
('Didi', 'Rexha', 'didi.rexha@gashi.com', 'Enthusiastic about programming and problem-solving.', '9876543210', 'http://didi.png/profile2.jpg', 'Inactive'),
('Rina', 'Rina', 'rina.rina@gashi.com', 'Creative thinker with a passion for design and art.', '5551234567', 'http://rina.jpg/profile3.jpg', 'Active');


SELECT * FROM UserProfile;


CREATE TABLE Property (
    PropertyID INT PRIMARY KEY,
    Address VARCHAR(255),
    City VARCHAR(100),
    State VARCHAR(50),
    ZIP VARCHAR(20),
    Type VARCHAR(50),
    Bedrooms INT,
    Bathrooms INT,
    Price DECIMAL(15, 2),
    SquareFeet INT
);

CREATE TABLE Agent (
    AgentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(20)
);

CREATE TABLE Client (
    ClientID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(20)
);

CREATE TABLE Transaksion (
    TransactionID INT PRIMARY KEY,
    PropertyID INT,
    BuyerID INT,
    SellerID INT,
    AgentID INT,
    TransactionDate DATE,
    Price DECIMAL(15, 2),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID),
    FOREIGN KEY (BuyerID) REFERENCES Client(ClientID),
    FOREIGN KEY (SellerID) REFERENCES Client(ClientID),
    FOREIGN KEY (AgentID) REFERENCES Agent(AgentID)
);
