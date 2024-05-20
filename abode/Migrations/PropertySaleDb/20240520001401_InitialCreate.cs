using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Migrations.PropertySaleDb
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sale",
                columns: table => new
                {
                    SaleID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PropertyID = table.Column<int>(type: "INTEGER", nullable: false),
                    BuyerID = table.Column<int>(type: "INTEGER", nullable: false),
                    SellerID = table.Column<int>(type: "INTEGER", nullable: false),
                    SaletDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    SalePrice = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sale", x => x.SaleID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sale");
        }
    }
}
