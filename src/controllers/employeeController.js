const Employee = require("../models/Employee");

exports.listEmployees = async (
  _,
  { page = 1, limit = 10, sortBy = "name" },
  context
) => {
  const skip = (page - 1) * limit;
  return Employee.find().sort(sortBy).skip(skip).limit(limit);
};

exports.getEmployeeById = async (_, { id }, context) => {
  return Employee.findById(id);
};

exports.addEmployee = async (
  _,
  { name, age, class: className, subjects, attendance, email },
  context
) => {
  if (email) {
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      throw new Error("Employee with this email already exists");
    }
  }

  const newEmployee = new Employee({
    name,
    age,
    class: className,
    subjects,
    attendance,
    email,
  });

  await newEmployee.save();
  return newEmployee;
};

exports.updateEmployee = async (
  _,
  { id, name, age, class: className, subjects, attendance },
  context
) => {
  return Employee.findByIdAndUpdate(
    id,
    { name, age, class: className, subjects, attendance },
    { new: true }
  );
};
