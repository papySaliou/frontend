import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { List } from './components/List';
import AddUsers from './pages/addUsers';
// import { List } from './components/List';
// import AddUsers from './pages/AddUsers';

function App() {
  const [users, setUsers] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState(null); // Ajout de setActiveMenuItem

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar setActiveMenuItem={setActiveMenuItem} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<List users={users} />} />
            <Route path="/add-user" element={<AddUsers onUserAdded={handleUserAdded} />} />
            {/* <Route path="/see-user" element={<UpdateUsers onUserAdded={handleUserUpdated} />} /> */}
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
