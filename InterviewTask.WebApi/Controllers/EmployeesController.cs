using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using InterviewTask.WebApi.DAL;
using InterviewTask.WebApi.Models;

namespace InterviewTask.WebApi.Controllers
{
    [EnableCors("*", "*", "*")]
    public class EmployeesController : ApiController
    {
        private readonly IEmployeeRepository _repo;

        public EmployeesController(IEmployeeRepository repo)
        {
            _repo = repo;
        }

        // GET: api/Employees
        public IQueryable<Employee> GetEmployees()
        {
            return _repo.GetEmployees().AsQueryable();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _repo.Dispose();
            }
            base.Dispose(disposing);
        }

        #region server validation example

        /*[ResponseType(typeof(TableDataViewModel))]
        public TableDataViewModel GetEmployees(string sortColumnName = "FirstName", string sortOrder = "asc",
            int pageSize = 10, int currentPage = 1)
        {
            List<Employee> List = new List<Employee>();
            int totalPage = 0;
            int totalRecord = 0;

            var emp = _repo.GetEmployees();
            totalRecord = emp.Count();
            if (pageSize > 0)
            {
                totalPage = totalRecord / pageSize + ((totalRecord % pageSize) > 0 ? 1 : 0);
                var param = sortColumnName;
                var pi = typeof(Employee).GetProperty(param);
                if (sortOrder == "asc")
                    List = emp.OrderBy(x => pi.GetValue(x, null)).Skip(pageSize * (currentPage - 1)).Take(pageSize)
                        .ToList();
                else
                    List = emp.OrderByDescending(x => pi.GetValue(x, null)).Skip(pageSize * (currentPage - 1))
                        .Take(pageSize).ToList();
            }
            else
            {
                List = emp.ToList();
            }
            
            var result = new TableDataViewModel()
            {
                List = List,
                TotalPage = totalPage,
                SortColumnName = sortColumnName,
                SortOrder = sortOrder,
                CurrentPage = currentPage,
                PageSize = pageSize
            };
            return result;
        } */

        #endregion
    }
}