import { useState } from 'react';

function SeeUsers() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: '',
    phoneNumber: '',
    firstName: '',
    address: '',
  });

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traitement des données du formulaire ici
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h2>Informations de base</h2>
        <label>
          Adresse e-mail :
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Nom :
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Rôle :
          <input type="text" name="role" value={formData.role} onChange={handleInputChange} />
        </label>
      </section>
      <section>
        <h2>Informations de contact</h2>
        <label>
          Prénom :
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Numéro de téléphone :
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </label>
        <label>
          Adresse :
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </label>
      </section>
      <button type="submit">Enregistrer</button>
      <button type="button" onClick={() => console.log(formData)}>Modifier</button>
    </form>
  );
}

export default SeeUsers;