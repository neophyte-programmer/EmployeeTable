using InterviewTask.WebApi.Models;

namespace InterviewTask.WebApi.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<InterviewTask.WebApi.Models.EmployeesContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(EmployeesContext context)
        {
            context.Employees.AddOrUpdate(x => x.Id,
                new Employee
                {
                    Id = 1,
                    FirstName = "Tom",
                    LastName = "Miller",
                    ProductsSold = 10,
                    Referal = "Andrew Smith",
                    Title = "PM"
                },
                new Employee
                {
                    Id = 2,
                    FirstName = "Andrew",
                    LastName = "Smith",
                    ProductsSold = 2,
                    Referal = null,
                    Title = "DEV"
                });
        }
    }
}
