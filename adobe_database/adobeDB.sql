CREATE DATABASE adobe;
USE adobe;

CREATE TABLE SystemAdmin (
    AdminID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100) UNIQUE
);

CREATE TABLE contact (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL, 
    email VARCHAR(255) NOT NULL,
    subject TEXT NOT NULL
);

CREATE TABLE UserProfile (
    UserID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Name NVARCHAR(MAX) NOT NULL,
    Surname NVARCHAR(50) NOT NULL,
    Bio NVARCHAR(MAX),
    PhoneNumber NVARCHAR(20) NOT NULL,
    ProfileImageUrl NVARCHAR(MAX),
    Status NVARCHAR(50),
    ContactID INT,
    FOREIGN KEY (ContactID) REFERENCES contact(id)
);

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

CREATE TABLE Favorites (
    UserID INT,
    PropertyID INT,
    PRIMARY KEY (UserID, PropertyID),
    FOREIGN KEY (UserID) REFERENCES UserProfile(UserID),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE OnlinePayments (
    PaymentID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    PropertyID INT,
    Amount DECIMAL(15, 2) NOT NULL,
    PaymentDate DATETIME,
    FOREIGN KEY (UserID) REFERENCES UserProfile(UserID),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE Notifications (
    NotificationID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    Message TEXT,
    NotificationDate DATETIME,
    FOREIGN KEY (UserID) REFERENCES UserProfile(UserID)
);

CREATE TABLE Messaging (
    MessageID INT PRIMARY KEY IDENTITY(1,1),
    SenderID INT,
    ReceiverID INT,
    Message TEXT,
    SendDate DATETIME,
    FOREIGN KEY (SenderID) REFERENCES UserProfile(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES UserProfile(UserID)
);

CREATE TABLE ReviewsRatings (
    ReviewID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    PropertyID INT,
    Rating INT,
    Comment TEXT,
    ReviewDate DATETIME,
    FOREIGN KEY (UserID) REFERENCES UserProfile(UserID),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE PremiumAccount (
    UserID INT PRIMARY KEY,
    UpgradeDate DATE,
    Benefits NVARCHAR(MAX),
    FOREIGN KEY (UserID) REFERENCES UserProfile(UserID)
);

CREATE TABLE ExclusiveDeals (
    DealID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    DealDescription NVARCHAR(MAX),
    FOREIGN KEY (UserID) REFERENCES UserProfile(UserID)
);

CREATE TABLE EarlyAccess (
    AccessID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    AccessDate DATE,
    FOREIGN KEY (UserID) REFERENCES UserProfile(UserID)
);


CREATE TABLE ResidentialListings (
    ListingID INT PRIMARY KEY,
    PropertyID INT,
    SalePrice DECIMAL(15, 2),
    RentPrice DECIMAL(15, 2),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE CommercialListings (
    ListingID INT PRIMARY KEY,
    PropertyID INT,
    Type NVARCHAR(50),
    SalePrice DECIMAL(15, 2),
    RentPrice DECIMAL(15, 2),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE LandListings (
    ListingID INT PRIMARY KEY,
    PropertyID INT,
    SalePrice DECIMAL(15, 2),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE IndustrialListings (
    ListingID INT PRIMARY KEY,
    PropertyID INT,
    Type NVARCHAR(50),
    SalePrice DECIMAL(15, 2),
    RentPrice DECIMAL(15, 2),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE VacationRentals (
    ListingID INT PRIMARY KEY,
    PropertyID INT,
    DailyRate DECIMAL(15, 2),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE ForeclosureListings (
    ListingID INT PRIMARY KEY,
    PropertyID INT,
    SalePrice DECIMAL(15, 2),
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID)
);

CREATE TABLE PropertyRent (
    RentID INT PRIMARY KEY IDENTITY(1,1),
    PropertyID INT NOT NULL,
    TenantID INT,
    LandlordID INT,
    RentStartDate DATETIME NOT NULL,
    RentEndDate DATETIME,
    RentAmount DECIMAL(15, 2) NOT NULL,
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID),
    FOREIGN KEY (TenantID) REFERENCES Client(ClientID),
    FOREIGN KEY (LandlordID) REFERENCES Client(ClientID)
);

CREATE TABLE PropertySale (
    SaleID INT PRIMARY KEY IDENTITY(1,1),
    PropertyID INT NOT NULL,
    BuyerID INT,
    SellerID INT,
    SaleDate DATETIME NOT NULL,
    SalePrice DECIMAL(15, 2) NOT NULL,
    FOREIGN KEY (PropertyID) REFERENCES Property(PropertyID),
    FOREIGN KEY (BuyerID) REFERENCES Client(ClientID),
    FOREIGN KEY (SellerID) REFERENCES Client(ClientID)
);
