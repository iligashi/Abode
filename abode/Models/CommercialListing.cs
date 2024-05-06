// Models/CommercialListing.cs
using System.ComponentModel.DataAnnotations;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

public class CommercialListing
{
    [Key]
    public int ListingID { get; set; }
    public int PropertyID { get; set; }
    public Property Property { get; set; } // Navigation property
    public string Type { get; set; }
    public decimal SalePrice { get; set; }
    public decimal RentPrice { get; set; }
}
