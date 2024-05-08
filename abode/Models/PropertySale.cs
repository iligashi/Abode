using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    // Property model
    public class PropertySale
    {
        [Key]
        public int SaleID { get; set; }
        public int PropertyID { get; set; }
        public int BuyerID { get; set; }
        public int SellerID { get; set; }
        public DateTime SaletDate { get; set; }
        public Decimal SalePrice { get; set; }
        

        //public virtual ICollection<PropertyRent> PropertyRents { get; set; }
        //public virtual ICollection<PropertySale> PropertySales { get; set; }
    }
}