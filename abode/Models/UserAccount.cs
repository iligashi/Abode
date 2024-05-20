using System.ComponentModel.DataAnnotations;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    public class UserAccount

    {
        [Key]

        public long Id { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
