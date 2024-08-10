import React, { useState } from 'react';
import { CiFolderOn } from 'react-icons/ci';
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from 'react-icons/lu';

function Sidebar({ setActiveMenuItem }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuItems = [
    { 
      id: 'Configuration', 
      label: 'Configuration',
      icon: <IoMdSettings className="w-8 h-8 mr-4" />, 
      submenu: [
        { id: 'LISTES DES USERS', label: 'LISTES DES USERS' }
      ]
    },
    { 
      id: 'Nouveau', 
      label: 'Nouveau',
      icon: <CiFolderOn className="w-8 h-8 mr-4" />,
      submenu: null
    },
  ];

  const handleMenuClick = (item) => {
    if (item.submenu) {
      setOpenSubmenu(openSubmenu === item.id ? null : item.id);
    } else {
      setActiveMenuItem(item.id);
    }
  };

  return (
    <div className="w-1/4 bg-blue-800 text-white p-4 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-2xl py-3 font-bold mb-6">DEXCHANGE</h1>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => handleMenuClick(item)}
                className="w-full text-left py-2 px-4 text-2xl rounded hover:bg-blue-700 flex items-center"
              >
                {item.icon}
                {item.label}
              </button>
              {item.submenu && openSubmenu === item.id && (
                <ul className="ml-4 mt-2">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.id}>
                      <button
                        onClick={() => setActiveMenuItem(`${item.id}-${subItem.id}`)}
                        className="w-full text-left py-1 px-6 text-xl rounded hover:bg-blue-700"
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Trait de séparation et bouton de déconnexion */}
      <div className="border-t border-blue-700 mt-4">
        <div className="mb-4">
          <button
            onClick={() => console.log("Déconnexion")}
            className="w-full text-left py-2 text-xl rounded hover:bg-blue-700 flex items-center justify-center"
          >
            <LuLogOut className="w-10  h-10 mr-2" />
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
