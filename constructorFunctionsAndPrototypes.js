var employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.salary + "/hour, Status: " + this.status);
}

var employee1 = new Employee("Andrew", "Developer", 30);
var employee2 = new Employee("Nick", "Driver", "22");
var employee3 = new Employee("Dylan", "Cyber Security", 40);

employee2.status = "Part Time";

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

employees.push(employee1, employee2, employee3);

console.log(employees);