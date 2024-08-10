// src/components/Index.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import { Header } from '..components/Header';
// import { List } from './List';
import { Header } from '../components/Header';
import { List } from '../components/List';

function Index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Il y a eu une erreur lors de la récupération des utilisateurs !', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <List users={users} />
    </div>
  );
}

export default Index;
