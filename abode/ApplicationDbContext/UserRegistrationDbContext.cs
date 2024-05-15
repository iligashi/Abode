using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext
{
    public class UserRegistrationDbContext : DbContext
    {
        public UserRegistrationDbContext(DbContextOptions<UserRegistrationDbContext> options) : base(options) { }

        public DbSet<UserRegistration> UserRegistration { get; set; }
        //public DbSet<Contact> Contacts { get; set; } // Add DbSet for Contacts
    }
}
