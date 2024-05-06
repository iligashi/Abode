namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Bio { get; set; }
        public string PhoneNumber { get; set; }
        public string ProfileImageUrl { get; set; }
        public string Status { get; set; }
        public int ContactID { get; set; }

        // Navigation property
      //  public Contact Contact { get; set; }
    }
}
