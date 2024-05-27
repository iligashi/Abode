using System.ComponentModel.DataAnnotations;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    public class PropertyHouses
    {
        [Key]
        public int HousesID { get; set; }
        public int PropertyID { get; set; }
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }
        public decimal Size { get; set; }
        public int YearBuilt { get; set; }
        public int GarageSpaces { get; set; }
        public int Floors { get; set; }
        public byte[] Photos { get; set; }
        public string PhotoMimeType { get; set; }


        public int UserId { get; set; } // Property to hold the UserId of the associated user
        public User User { get; set; }
    }
}
