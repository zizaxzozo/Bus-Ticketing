using System.ComponentModel.DataAnnotations.Schema;

namespace BusAPI.Models
{
    public class Booking
    {
        public int BookId { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string Email { get; set; }
        public int BusId { get; set; }
        public string BookDate { get; set; }
        public int NumberOfSeat { get; set; }
    }
}
