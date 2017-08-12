using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using InterviewTask.WebApi.Models;

namespace InterviewTask.WebApi.DAL
{
    public interface IEmployeeRepository : IDisposable
    {
        IEnumerable<Employee> GetEmployees();
        Employee GetEmployeeById(int employeeId);

    }
}