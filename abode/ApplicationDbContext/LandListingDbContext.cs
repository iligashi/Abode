namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext
{
    using Microsoft.EntityFrameworkCore;

  
        public class LandListingDbContext : DbContext
        {
            public LandListingDbContext(DbContextOptions<LandListingDbContext> options) : base(options) { }

            public DbSet<LandListing> LandListings { get; set; }
        }
    
}
