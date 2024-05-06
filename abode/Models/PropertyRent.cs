using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    // Property model
    public class PropertyRent
    {
        public int RentID { get; set; }
        public int PropertyID { get; set; }
        public int TenantID { get; set; }
        public int LandlordID { get; set; }
        public DateTime RentStartDate { get; set; }
        public DateTime RentEndDate { get; set; }
        public decimal RentAmount { get; set; }
       

        //public virtual ICollection<PropertyRent> PropertyRents { get; set; }
        //public virtual ICollection<PropertySale> PropertySales { get; set; }
    }
}