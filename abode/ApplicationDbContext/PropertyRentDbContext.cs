using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext
{
    public class PropertyRentDbContext : DbContext
    {
        public PropertyRentDbContext(DbContextOptions<PropertyRentDbContext> options) : base(options) { }

        public DbSet<PropertyRent> Rent { get; set; }

        // DbSet properties for any related entities (PropertyRent, PropertySale, etc.) if applicable

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    // Configure entity relationships and other model configurations if needed
        //}
    }
}
