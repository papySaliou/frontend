import React from 'react';
import user from '../assets/user.png';

export const Header = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white p-4 ">
      <p className="font-semibold text-lg">Utilisateur</p>
      <div className="flex items-center space-x-4">
        <img src={user} alt="User" className="w-8 h-8 rounded-full" />
        <div className="text-sm">
          <p className="font-medium">Omar Fall</p>
          <h3 className="text-gray-600">fallo@dexchange.sn</h3>
        </div>
      </div>
    </div>
  );
};
