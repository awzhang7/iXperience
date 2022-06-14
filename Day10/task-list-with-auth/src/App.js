import React, { useEffect, useState } from 'react';
// import bootstrap styling from node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase/firebase';


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

// import the component pages
import TasksPage from './components/tasks/TasksPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

import Navbar from './components/common/Navbar';

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}