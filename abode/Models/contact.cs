using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace WebApplication1.Models
{
    public class Contact
    {
        // Define properties that match the columns in the SQL table
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public string? Email { get; set; }
        public string? Subject { get; set; }
    }
}
