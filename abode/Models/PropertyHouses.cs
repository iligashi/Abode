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
        public byte[] Photos { get; set; } // Add this line for the Photos column
    }
}
