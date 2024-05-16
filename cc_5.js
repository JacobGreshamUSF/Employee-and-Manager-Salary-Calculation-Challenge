U59555732 
// Define the Employee class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee ${this.name} has a monthly salary of $${this.salary.toFixed(2)}.`);
    }

    // Method to calculate annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Define the Manager subclass inheriting from Employee
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    // Override calculateAnnualSalary method to include bonus
    calculateAnnualSalary() {
        const bonus = this.salary * 0.15;
        const totalSalary = super.calculateAnnualSalary() + bonus;
        console.log(`Manager ${this.name} works in the ${this.department} department. Bonus: $${bonus.toFixed(2)}. Total annual salary: $${totalSalary.toFixed(2)}.`);
        return totalSalary;
    }
}

// Test Data
const manager1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
const manager2 = new Manager('Debbie Little', 7205, 'Finance');

// Calculate and log annual salaries for managers
console.log("\nAnnual Salaries:");
manager1.calculateAnnualSalary();
manager2.calculateAnnualSalary();
