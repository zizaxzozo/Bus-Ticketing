using BusAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace BusAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        // To access the config from appsettings.json, we need to make use of dependency injection
        private readonly IConfiguration _configuration;

        public BookingsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // API GET method to get booking details
        [HttpGet]
        public JsonResult Get()
        {
            // Stored Procedures recommended
            string query = @"
                    select BookId, FirstName, LastName, Email, BusId, BookDate, NumberOfSeat from dbo.Booking
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BusAppCon"); // to store connection string
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        // API POST method to insert data
        [HttpPost]
        public JsonResult Post(Booking boo)
        {
            // Stored Procedures recommended
            string query = @"
                    insert into dbo.Booking values
                    ('" + boo.FirstName + @"'
                    ,'" + boo.LastName + @"'
                    ,'" + boo.Email + @"'
                    ,'" + boo.BusId + @"'
                    ,'" + boo.BookDate + @"'
                    ,'" + boo.NumberOfSeat + @"')
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BusAppCon"); // to store connection string
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        // API PUT method to update data
        [HttpPut]
        public JsonResult Put(Booking boo)
        {
            // Stored Procedures recommended
            string query = @"
                    update dbo.Booking set
                    FirstName = '" + boo.FirstName + @"'
                    ,LastName = '" + boo.LastName + @"'
                    ,Email = '" + boo.Email + @"'
                    ,BusId = '" + boo.BusId + @"'
                    ,BookDate = '" + boo.BookDate + @"'
                    ,NumberOfSeat = '" + boo.NumberOfSeat + @"'
                    where BookId = " + boo.BookId + @"
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BusAppCon"); // to store connection string
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        // API DELETE method to delete data
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            // Stored Procedures recommended
            string query = @"
                    delete from dbo.Booking
                    where BookId = " + id + @"
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BusAppCon"); // to store connection string
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        // Get BusId as a dropdownlist
        [Route("GetAllBuses")]
        public JsonResult GetAllBuses()
        {
            // Stored Procedures recommended
            string query = @"
                    select BusId, BusFrom, BusTo from dbo.Bus
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BusAppCon"); // to store connection string
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}
