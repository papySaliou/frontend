import React, { useState } from 'react';
import SubMenu from './SubMenu';

const Menu = ({ title, subMenuItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    if (subMenuItems.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="menu-item">
      <div
        onClick={toggleSubMenu}
        className={`cursor-pointer py-2 px-4 ${subMenuItems.length > 0 ? 'hover:bg-blue-700' : ''}`}
      >
        {title}
      </div>
      {isOpen && subMenuItems.length > 0 && <SubMenu items={subMenuItems} />}
    </div>
  );
};

export default Menu;
