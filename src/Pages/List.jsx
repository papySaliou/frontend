
import React, { useState, useEffect } from 'react'; 
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import axios from 'axios'; 

export const List = () => { 
    const navigate = useNavigate();
  const [users, setUsers] = useState([]); // Déclaration de l'état local pour les utilisateurs

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []); 
  const handleAddUserClick = () => {
    navigate('/add');
  };

  const handleDeleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
  }
};

const handleEditUser = (id) => {
  navigate(`/update/${id}`);
};



  return (
    <div className="w-full p-4">
      <Header />
      <p className="font-bold text-2xl text-left mb-5">Configuration</p>
      <div className="relative w-full max-w-xl mb-4">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
        <input
          type="text"
          placeholder="Vous cherchez quel utilisateur..."
          className="w-full pl-12 p-2 border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-start mb-4">
        <button
          onClick={handleAddUserClick}
          className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ajouter un utilisateur +
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse rounded-md bg-white">
          <thead>
            <tr className="font-extralight text-gray-400">
              <th className="p-2">Nom</th>
              <th className="p-2">Prénom</th>
              <th className="p-2">Email</th>
              <th className="p-2">Adresse</th>
              <th className="p-2">Rôle</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="p-2">{user.nom}</td>
                <td className="p-2">{user.prenom}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.adresse}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold 
                      ${user.status ? 'text-green-500 bg-green-100 border ' :
                       'text-red-500 bg-red-100 border '}`}>
                         {user.status ? 'Actif' : 'Inactif'}
                    </span>
</td>
                {/* <td className={`p-2 ${user.status ? 'text-green-500' : 'text-red-500'}`}

                >{user.status ? 'Actif' : 'Inactif'}</td> */}
                <td className="p-2">
                  <button 
                  onClick={() => handleEditUser(user.id)}
                  className="py-1 px-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100">
                    VOIR
                  </button>
                  <button 
                  onClick={() => handleDeleteUser(user.id)}
                  className="py-1 px-2 bg-red-600 text-white rounded hover:bg-red-300 ml-2">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
