using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.ApplicationDbContext
{
    public class CommercialListingDbContext : DbContext
    {
        public CommercialListingDbContext(DbContextOptions<CommercialListingDbContext> options) : base(options) { }

        public DbSet<CommercialListing> CommercialListings { get; set; }
    }
}
