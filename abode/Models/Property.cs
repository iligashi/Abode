using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    // Property model
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

        //public virtual ICollection<PropertyRent> PropertyRents { get; set; }
        //public virtual ICollection<PropertySale> PropertySales { get; set; }
    }
}