using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;







namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{



    public class Contact
    {

        public int ContactID { get; set; }


        public string Fname { get; set; }

        public string Lname { get; set; }


        public string Email { get; set; }

        public string Subject { get; set; }
    }
}