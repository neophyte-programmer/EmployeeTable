using System.ComponentModel.DataAnnotations;

namespace InterviewTask.WebApi.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Title { get; set; }
        public int ProductsSold { get; set; }
        public string Referal { get; set; }
    }
}