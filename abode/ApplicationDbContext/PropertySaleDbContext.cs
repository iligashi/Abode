using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext
{
    public class PropertySaleDbContext : DbContext
    {
        public PropertySaleDbContext(DbContextOptions<PropertySaleDbContext> options) : base(options) { }

        public DbSet<PropertySale> Sale { get; set; }

        // DbSet properties for any related entities (PropertyRent, PropertySale, etc.) if applicable

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    // Configure entity relationships and other model configurations if needed
        //}
    }
}
