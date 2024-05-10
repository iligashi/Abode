using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    // Property model
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


        //public virtual ICollection<PropertyRent> PropertyRents { get; set; }
        //public virtual ICollection<PropertySale> PropertySales { get; set; }
    }
}