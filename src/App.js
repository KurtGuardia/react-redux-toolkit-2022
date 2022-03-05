import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Employees from './components/Employees';
import Home from './components/Home';
import NavBar from './components/NavBar';
import UserList from './components/UserList';

function App() {
  return (
    <React.Fragment className='App'>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/employees'} element={<Employees />} />
        <Route path={'/counter'} element={<Counter />} />
        <Route path={'/users'} element={<UserList />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
