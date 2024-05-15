using System.ComponentModel.DataAnnotations;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    public class VacationRental
    {
        [Key]
        public int ListingID { get; set; }
        public int PropertyID { get; set; }
        public decimal DailyRate { get; set; }
    }
}
