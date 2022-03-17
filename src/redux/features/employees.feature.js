import { createSlice } from '@reduxjs/toolkit';
import { EmployeeService } from '../../services/employeeService';

const employees = EmployeeService.getAllEmployees();

const initialState = {
  employees: employees,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    selection: function (state, action) {
      state.employees = state.employees.map((employee) => {
        if (employee.id === action.payload) {
          return { ...employee, isSelected: !employee.isSelected };
        } else return employee;
      });
    },
  },
});

export const { selection } = employeesSlice.actions;
export default employeesSlice;
