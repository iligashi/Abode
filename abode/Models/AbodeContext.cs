using Microsoft.EntityFrameworkCore;

namespace abode.Models
{
    public class AbodeContext : DbContext
    {

        public AbodeContext(DbContextOptions<AbodeContext> options) : base(options)
        {

        }
        public DbSet<Abode> Abodes { get; set; }
      
    }
}
