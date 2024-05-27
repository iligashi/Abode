using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Migrations.PropertyDb
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    PropertyID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Address = table.Column<string>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    State = table.Column<string>(type: "TEXT", nullable: false),
                    ZipCode = table.Column<string>(type: "TEXT", nullable: false),
                    PropertyType = table.Column<string>(type: "TEXT", nullable: false),
                    NumberOfBedrooms = table.Column<int>(type: "INTEGER", nullable: false),
                    NumberOfBathrooms = table.Column<int>(type: "INTEGER", nullable: false),
                    SquareFootage = table.Column<decimal>(type: "TEXT", nullable: false),
                    YearBuilt = table.Column<int>(type: "INTEGER", nullable: false),
                    PurchaseDate = table.Column<DateTime>(type: "TEXT", nullable: true),
                    PurchasePrice = table.Column<decimal>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.PropertyID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Properties");
        }
    }
}
