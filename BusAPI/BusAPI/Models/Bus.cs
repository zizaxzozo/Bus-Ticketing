namespace BusAPI.Models
{
    public class Bus
    {
        public int BusId { get; set; }
        public string BusPlate { get; set; }
        public string BusFrom { get; set; }
        public string BusTo { get; set; }
        public string StartAt { get; set; }
        public string SeatType { get; set; }
        public int SeatNumber { get; set; }
        public int SeatAvail { get; set; }
    }
}
