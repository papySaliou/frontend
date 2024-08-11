import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUsers = ({ onUserAdded }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [role, setRole] = useState('Utilisateur');
  const [status, setStatus] = useState(true); // `true` pour Actif, `false` pour Inactif

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { nom, prenom, email, telephone, adresse, role, status };
      console.log('Données envoyées:', newUser); // Vérifie les données
      const response = await axios.post('http://localhost:3000/users', newUser);
      console.log('Utilisateur ajouté:', response.data);
      onUserAdded(response.data);
      navigate('/'); // Redirection vers la liste des utilisateurs
    } catch (error) {
      if (error.response) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', error.response.data);
      } else if (error.request) {
        console.error('Aucune réponse reçue du serveur:', error.request);
      } else {
        console.error('Erreur:', error.message);
      }
    }
  };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newUser = { nom, prenom, email, telephone, adresse, role, status };
//       const response = await axios.post('http://localhost:3000/users', newUser);
//       console.log('Utilisateur ajouté:', response.data);
//       onUserAdded(response.data);
//       navigate('/'); // Redirection vers la liste des utilisateurs
//     } catch (error) {
//       if (error.response) {
//         console.error('Erreur lors de l\'ajout de l\'utilisateur:', error.response.data);
//       } else if (error.request) {
//         console.error('Aucune réponse reçue du serveur:', error.request);
//       } else {
//         console.error('Erreur:', error.message);
//       }
//     }
//   };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Ajouter un Utilisateur</h2>

      <p className='py-5'>ADAMA DIOUM</p>
      <form onSubmit={handleSubmit}>

        

        <div className='flex justify-between'>
        <div className="">
          <label className="block text-gray-700  mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        
        <div className="">
          <label className="block text-gray-700  mb-2">Téléphone</label>
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>


        </div>
       
        <div className='flex justify-between'>
        <div className="">
          <label className="block text-gray-700  mb-2">Nom</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="">
          <label className="block text-gray-700  mb-2">Prénom</label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        </div>
        
        <div className='flex justify-between'>
        <div className="">
          <label className="block text-gray-700  mb-2">Rôle</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="Utilisateur">Utilisateur</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Superviseur">Superviseur</option>
          </select>
        </div>

        <div className="">
          <label className="block text-gray-700  mb-2">Adresse</label>
          <input
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        
        </div>
        
        
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value === 'Actif')}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value={true}>Actif</option>
            <option value={false}>Inactif</option>
          </select>
        </div> */}
        <button type="submit" className="mt-6 px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
