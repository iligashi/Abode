﻿
namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    public class UserRegistration
    {
        
        public int UserRegistrationId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

