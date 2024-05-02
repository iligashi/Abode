using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wellnest_API.Models
{
    public class PropertyClass
    {
        public int PropertyID { get; set; }
        public string? City { get; set; }
        public string? ZIP { get; set; }
        public int Bedrooms { get; set; }

        public int Bathrooms { get; set; }
        public int SquareFeet { get; set; }
        public decimal Price { get; set; }

    }
}