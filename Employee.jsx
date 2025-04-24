import React from 'react'
import EmployeeNode from "./EmployeeNode";

const employees = [
    {
        id: 1,
        name: "Alice",
        department: "Engineering",
        reportees: [
            {
                id: 2,
                name: "Bob",
                department: "Engineering",
                reportees: [
                    {
                        id: 4,
                        name: "Daisy",
                        department: "Engineering",
                        reportees: []
                    }
                ]
            },
            {
                id: 3,
                name: "Charlie",
                department: "Product",
                reportees: []
            }
        ]
    }
];
const Employee = () => {
    return (
        <div>Employee Hierarchy
            <div>
                {employees.map((employee) => (
                    <EmployeeNode key={employee.id} employee={employee} />
                ))}
            </div>
        </div>
    )
}
export default Employee
