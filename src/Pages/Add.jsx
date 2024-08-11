import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../components/Header';

export const Add = ({ onUserAdded }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [role, setRole] = useState('Utilisateur');
  const [status, setStatus] = useState(true); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { nom, prenom, email, telephone, adresse, role, status };
      console.log('Données envoyées:', newUser); 
      const response = await axios.post('http://localhost:3000/users', newUser);
      navigate('/');
      console.log('Utilisateur ajouté:', response.data);
      if (onUserAdded) onUserAdded(response.data); 
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

  return (
    <div>
      <div className='w-full bg-gray-50'>
        <Header />

        <div className="w-full mx-auto bg-gray-100">
          <form onSubmit={handleSubmit} className='rounded-lg bg-white p-10'>
            <h2 className="text-2xl mb-4">Ajouter Utilisateur</h2>

            <div className='flex justify-between mb-4'>
              <div className="w-full mr-2">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="w-full ml-2">
                <label className="block text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className='flex justify-between mb-4'>
              <div className="w-full mr-2">
                <label className="block text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="w-full ml-2">
                <label className="block text-gray-700 mb-2">Prénom</label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className='flex justify-between mb-4'>
              <div className="w-full mr-2">
                <label className="block text-gray-700 mb-2">Rôle</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="Utilisateur">Admin</option>
                  <option value="Admin">Agence</option>
                  <option value="Manager">Mandataire</option>
                  <option value="Superviseur">Client</option>
                </select>
              </div>

              <div className="w-full ml-2">
                <label className="block text-gray-700 mb-2">Adresse</label>
                <input
                  type="text"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <button type="submit" className="mt-6 px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sauvegarder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
