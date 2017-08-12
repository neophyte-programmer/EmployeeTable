using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InterviewTask.WebApi.Models
{
    public class TableDataViewModel
    {
        public IEnumerable<Employee> List { get; set; }
        public int TotalPage { get; set; }
        public string SortColumnName { get; set; }
        public string SortOrder { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
    }
}