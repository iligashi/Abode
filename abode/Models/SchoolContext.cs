using System;
using Microsoft.EntityFrameworkCore;

namespace abode.Models
{
	public class SchoolContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public SchoolContext(DbContextOptions options) : base(options)
        {
		}
	}
}

