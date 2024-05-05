CREATE DATABASE abode;
USE abode;


CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Email  VARCHAR(255) UNIQUE NOT NULL, -- Increase the length to 100
    Password VARCHAR(255) NOT NULL,
    FirstName VARCHAR(255),
    LastName VARCHAR(255)
);
DROP TABLE Users;
INSERT INTO Users VALUES (11, 'test@test.gmail', 'ili', 'ilaz', 'Gashi');
INSERT INTO Users VALUES (12, 'didirexha1@gmail.com', 'didi', 'Didi', 'Rexha');
INSERT INTO Users VALUES (13, 'ilirexha1@gmail.com', 'didi', 'Didi', 'Rexha');

SELECT * 
FROM Users
ORDER BY UserID;

