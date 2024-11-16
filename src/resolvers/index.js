const authController = require("../controllers/authController");
const employeeController = require("../controllers/employeeController");

const resolvers = {
  Query: {
    employees: async (_, args, context) => {
      authController.isAuthenticated(context);
      return employeeController.listEmployees(_, args, context);
    },
    employee: async (_, { id }, context) => {
      authController.isAuthenticated(context);
      return employeeController.getEmployeeById(_, { id }, context);
    },
  },
  Mutation: {
    register: async (_, args) => authController.register(_, args),
    login: async (_, args) => authController.login(_, args),
    addEmployee: async (_, args, context) => {
      authController.isAdmin(context);
      return employeeController.addEmployee(_, args, context);
    },
    updateEmployee: async (_, args, context) => {
      authController.isAdmin(context);
      return employeeController.updateEmployee(_, args, context);
    },
  },
};

module.exports = resolvers;
