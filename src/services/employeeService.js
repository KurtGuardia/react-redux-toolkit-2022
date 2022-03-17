export class EmployeeService {
  static employeeList = [
    {
      id: 1,
      name: 'Rick Sanchez',
      username: 'rick',
      email: 'ricksanchez@gmail.com',
      isSelected: false,
    },
    {
      id: 2,
      name: 'Morty Smith',
      username: 'morty',
      email: 'morty@gmail.com',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Summer Smith',
      username: 'summer',
      email: 'summer@gmail.com',
      isSelected: false,
    },
    {
      id: 4,
      name: 'Beth Sanchez',
      username: 'beth',
      email: 'beth@gmail.com',
      isSelected: false,
    },
    {
      id: 5,
      name: 'Jerry Smith',
      username: 'herry',
      email: 'jerrysmith@gmail.com',
      isSelected: false,
    },
  ];

  static getAllEmployees() {
    return this.employeeList;
  }
}
