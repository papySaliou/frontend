// src/components/Content.jsx
import React from 'react';
import Index from '../pages';

function Content({ activeMenuItem }) {
  let content;

  // Logique pour déterminer quel contenu afficher
  if (activeMenuItem === 'Configuration-LISTES DES USERS') {
    content = <Index />;
  } else {
    content = (
      <div>
        <h2 className="text-3xl font-bold mb-4">
          {activeMenuItem.charAt(0).toUpperCase() + activeMenuItem.slice(1)}
        </h2>
        <p>Contenu pour {activeMenuItem}</p>
      </div>
    );
  }

  return <div className="flex-1 ">{content}</div>;
}

export default Content;
