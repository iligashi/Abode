using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext
{
    public class UserAccountDbContext : DbContext
    {
        public UserAccountDbContext(DbContextOptions<UserAccountDbContext> options)
            : base(options)
        {
        }

        public DbSet<UserAccounts> UserAccounts { get; set; }
    }
}
