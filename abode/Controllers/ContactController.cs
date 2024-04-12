using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using WebApplication1.Models;

namespace abode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ContactController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT fname, lname, email, subject
                FROM dbo.contact";

            DataTable table = new DataTable();
           
           string sqlDataSource = _configuration.GetConnectionString("ContactAppCon");
            SqlDataReader myReader;
            
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Contact contact)
        {
            string query = @"
                INSERT INTO dbo.contact (fname, lname, email, subject)
                VALUES (@Fname, @Lname, @Email, @Subject)";

            using (SqlConnection myCon = new SqlConnection(_configuration.GetConnectionString("ContactAppCon")))
            {
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Fname", contact.Fname);
                    myCommand.Parameters.AddWithValue("@Lname", contact.Lname);
                    myCommand.Parameters.AddWithValue("@Email", contact.Email);
                    myCommand.Parameters.AddWithValue("@Subject", contact.Subject);

                    myCon.Open();
                    myCommand.ExecuteNonQuery();
                }
            }

            return new JsonResult("Added Successfully");
        }

        // Other CRUD methods (PUT, DELETE) can be implemented similarly
    }
}
