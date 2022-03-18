import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selection } from '../redux/features/employees.feature';

const Employees = () => {
  const staff = useSelector((state) => state.staff);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <p className='h3 text-primary'>Employees</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              amet veniam sed rem, aliquam quidem. Placeat molestiae itaque
              inventore minus, voluptatum officia iure sint? Exercitationem
              debitis dignissimos veniam beatae deserunt!
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <ul className='list-group'>
              {staff.employees.map((employee) => {
                return (
                  <li key={employee.id} className='list-group-item'>
                    <input
                      type='checkbox'
                      className='form-check-input me-2'
                      onChange={() => dispatch(selection(employee.id))}
                      checked={employee.isSelected}
                    />
                    {employee.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='col-md-6'>
            <div className='card my-2'>
              <div className='card-body'>
                <ul className='list-group'>
                  {staff.employees.map((employee) => {
                    return (
                      employee.isSelected && (
                        <div className=' m-2' key={employee.id}>
                          <li className='list-group-item'>
                            Name:{' '}
                            <span className='fw-bold'>{employee.name}</span>
                          </li>
                          <li className='list-group-item'>
                            Username:{' '}
                            <span className='fw-bold'>{employee.username}</span>
                          </li>
                          <li className='list-group-item'>
                            Email:{' '}
                            <span className='fw-bold'>{employee.email}</span>
                          </li>
                        </div>
                      )
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Employees;
