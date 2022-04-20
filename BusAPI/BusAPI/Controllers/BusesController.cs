using BusAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace BusAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusesController : ControllerBase
    {
        // To access the config from appsettings.json, we need to make use of dependency injection
        private readonly IConfiguration _configuration;

        public BusesController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // API GET method to get bus details
        [HttpGet]
        public JsonResult Get()
        {
            // Stored Procedures recommended
            string query = @"
                    select BusId, BusPlate, BusFrom, BusTo, StartAt, SeatType, SeatNumber, SeatAvail from dbo.Bus
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BusAppCon"); // to store connection string
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query, myCon))
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
        public JsonResult Post(Bus bus)
        {
            // Stored Procedures recommended
            string query = @"
                    insert into dbo.Bus values
                    ('" + bus.BusPlate + @"'
                    ,'" + bus.BusFrom + @"'
                    ,'" + bus.BusTo + @"'
                    ,'" + bus.StartAt + @"'
                    ,'" + bus.SeatType + @"'
                    ,'" + bus.SeatNumber + @"'
                    ,'" + bus.SeatAvail + @"')
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
        public JsonResult Put(Bus bus)
        {
            // Stored Procedures recommended
            string query = @"
                    update dbo.Bus set
                    BusPlate = '" + bus.BusPlate + @"'
                    ,BusFrom = '" + bus.BusFrom + @"'
                    ,BusTo = '" + bus.BusTo + @"'
                    ,StartAt = '" + bus.StartAt + @"'
                    ,SeatType = '" + bus.SeatType + @"'
                    ,SeatNumber = '" + bus.SeatNumber + @"'
                    ,SeatAvail = '" + bus.SeatAvail + @"'
                    where BusId = " + bus.BusId + @"
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
                    delete from dbo.Bus
                    where BusId = " + id + @"
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
    }
}
