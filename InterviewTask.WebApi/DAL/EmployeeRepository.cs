using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using InterviewTask.WebApi.Models;

namespace InterviewTask.WebApi.DAL
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeesContext _context;

        public EmployeeRepository(EmployeesContext context)
        {
            _context = context;
        }

       public IEnumerable<Employee> GetEmployees()
       {
           return _context.Employees.ToList();
       }

        public Employee GetEmployeeById(int employeeId)
        {
            return _context.Employees.Find(employeeId);
        }

        private bool _disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this._disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}