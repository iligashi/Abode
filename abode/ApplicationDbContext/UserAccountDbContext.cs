using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext
{
    public class UserAccountDbContext : DbContext
    {
        public UserAccountDbContext(DbContextOptions<UserAccountDbContext> options) : base(options) { }

        public DbSet<UserAccount> UserAccount { get; set; }
        //public DbSet<Contact> Contacts { get; set; } // Add DbSet for Contacts
    }
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> parent of 615726b (Revert "Merge branch 'main' of https://github.com/iligashi/Abode")
=======
}
>>>>>>> parent of 615726b (Revert "Merge branch 'main' of https://github.com/iligashi/Abode")
