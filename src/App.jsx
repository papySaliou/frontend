import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { List } from './Pages/List';
import Sidebar from './components/Sidebar';
import { Add } from './Pages/Add';
import { Update } from './Pages/Update';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar setActiveMenuItem={setActiveMenuItem} />
        <div className="flex-1 p-10">
          <Routes>
            <Route path="/" element={<List activeMenuItem={activeMenuItem} />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />         
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
