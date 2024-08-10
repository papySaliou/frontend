import React from 'react';

const SubMenu = ({ items }) => {
  return (
    <ul className="sub-menu">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default SubMenu;
