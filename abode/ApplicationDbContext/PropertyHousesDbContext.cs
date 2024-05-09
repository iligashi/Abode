using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext
{
    public class PropertyHousesDbContext : DbContext
    {
        public PropertyHousesDbContext(DbContextOptions<PropertyHousesDbContext> options) : base(options) { }

        public DbSet<PropertyHouses> Houses { get; set; }

        // DbSet properties for any related entities (PropertyRent, PropertySale, etc.) if applicable

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    // Configure entity relationships and other model configurations if needed
        //}
    }
}
