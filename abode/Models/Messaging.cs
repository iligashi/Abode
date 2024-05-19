using System.ComponentModel.DataAnnotations;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models
{
    public class Messaging
    {
        [Key]
        public int MessageID { get; set; }
        public int SenderID { get; set; }
        public int ReceiverID { get; set; }
        public string Message { get; set; }
        public DateTime SendDate { get; set; }
    }

}
