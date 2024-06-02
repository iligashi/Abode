using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

public class Property
{
    [Key]
    public int PropertyID { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
    public string PropertyType { get; set; }
    public int NumberOfBedrooms { get; set; }
    public int NumberOfBathrooms { get; set; }
    public decimal SquareFootage { get; set; }
    public int YearBuilt { get; set; }
    public DateTime? PurchaseDate { get; set; }
    public decimal? PurchasePrice { get; set; }

    public virtual ICollection<PropertyPhoto> Photos { get; set; }
}

public class PropertyPhoto
{
    [Key]
    public int PhotoID { get; set; }
    public int PropertyID { get; set; }
    public string PhotoURL { get; set; }

    [ForeignKey("PropertyID")]
    public virtual Property Property { get; set; }
}
