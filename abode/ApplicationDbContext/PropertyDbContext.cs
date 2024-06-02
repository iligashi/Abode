using Microsoft.EntityFrameworkCore;

public class PropertyDbContext : DbContext
{
    public PropertyDbContext(DbContextOptions<PropertyDbContext> options) : base(options) { }

    public DbSet<Property> Properties { get; set; }
    public DbSet<PropertyPhoto> PropertyPhotos { get; set; }
}
