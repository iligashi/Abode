using System.ComponentModel.DataAnnotations;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

public class LandListing
{
    [Key]
    public int ListingID { get; set; }
    public int PropertyID { get; set; }
    public decimal SalePrice { get; set; }
}
