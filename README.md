# Abode: Real Estate Marketplace

A full-stack real estate marketplace where users can list and browse properties for sale and rent, houses, land, commercial spaces and vacation rentals, and message each other.

**Frontend:** React + TypeScript (Create React App) with Bootstrap
**Backend:** ASP.NET Core Web API with Entity Framework Core

## Features

- User registration, login and profile page
- Listings for:
  - Properties for sale
  - Properties for rent
  - Houses
  - Land
  - Commercial spaces
  - Vacation rentals
- Messaging between users
- Contact form (EmailJS)
- Admin dashboard

## Tech stack

| Area | Tools |
|---|---|
| Frontend | React 18, TypeScript, React Router, React Bootstrap, Axios, Font Awesome |
| Backend | ASP.NET Core Web API (C#), Entity Framework Core (code-first migrations) |
| Email | EmailJS |
| Dashboard | Bootstrap, Chartist |

## Project structure

```
src/          React frontend (views: Homepage, Login, SignUp, Profile, ContactUs, Dashboard)
abode/        ASP.NET Core Web API
  Controllers/            API endpoints (properties, rent, sale, houses, land, commercial,
                          vacation rentals, messaging, users, contact)
  ApplicationDbContext/   EF Core DbContexts
  Migrations/             Database migrations
Dashboard/    Admin dashboard template and assets
abode.sln     Visual Studio solution
```

## Getting started

### Prerequisites
- Node.js 16+
- .NET SDK
- Visual Studio 2022 (or the `dotnet` CLI)
- The database server set in `abode/appsettings.json`

### 1. Run the API
```bash
cd abode
dotnet restore
dotnet ef database update
dotnet run
```
Or open `abode.sln` in Visual Studio and press **F5**.

### 2. Run the frontend
From the project root:
```bash
npm install
npm start
```
Open http://localhost:3000.

---

Built by [Ilaz Gashi](https://github.com/iligashi)
