import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../components/Header';

export const Update = () => {
  const { id } = useParams();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [role, setRole] = useState('Utilisateur');
  const [status, setStatus] = useState(true); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(response => {
        const userData = response.data;
        setNom(userData.nom);
        setPrenom(userData.prenom);
        setEmail(userData.email);
        setTelephone(userData.telephone);
        setAdresse(userData.adresse);
        setRole(userData.role);
        setStatus(userData.status);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setError('Erreur lors du chargement des données de l\'utilisateur.');
        console.error('Erreur:', error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { nom, prenom, email, telephone, adresse, role, status };
      console.log('Données envoyées:', updatedUser); 
      const response = await axios.put(`http://localhost:3000/users/${id}`, updatedUser);
      setSuccess('Utilisateur mis à jour avec succès !');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setError('Erreur lors de la mise à jour de l\'utilisateur.');
      console.error('Erreur:', error.response || error.message);
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <div className='w-full bg-gray-50'>
        <Header />

        <div className="w-full mx-auto bg-gray-100">
          <form onSubmit={handleSubmit} className='rounded-lg bg-white p-10'>
            <h2 className="text-2xl mb-4">Modifier Utilisateur</h2>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

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
                  <option value="Admin">Admin</option>
                  <option value="Agence">Agence</option>
                  <option value="Mandataire">Mandataire</option>
                  <option value="Client">Client</option>
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
              Modifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
