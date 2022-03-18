import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/features/user-list.feature';

const UserList = () => {
  const { loading, errorMessage, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  console.log(users);
  return (
    <React.Fragment>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <p className='h3 text-primary'>User</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati eum quisquam enim animi? Enim iusto rerum molestias amet
              consequuntur asperiores officia officiis rem molestiae placeat
              itaque, reiciendis quo dicta? Nostrum!
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {loading && <h2 className='h2'>Loading...</h2>}
            {loading === false && users.length < 1 && (
              <h2 className='h3'>{errorMessage}</h2>
            )}
            {loading === false && !errorMessage && (
              <table className='table table-hover text-center table-sthiped'>
                <thead className='bg-primary text-white'>
                  <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    console.log(user);
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.web}</td>
                        <td>{user.company.name}</td>
                        <td>{user.address.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserList;
