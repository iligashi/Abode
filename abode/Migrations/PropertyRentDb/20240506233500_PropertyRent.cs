using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Migrations.PropertyRentDb
{
    /// <inheritdoc />
    public partial class PropertyRent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    RentID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PropertyID = table.Column<int>(type: "INTEGER", nullable: false),
                    TenantID = table.Column<int>(type: "INTEGER", nullable: false),
                    LandlordID = table.Column<int>(type: "INTEGER", nullable: false),
                    RentStartDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    RentEndDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    RentAmount = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.RentID);
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
