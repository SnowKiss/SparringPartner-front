import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/signup">Inscription</Link></li>
        <li><Link to="/login">Connexion</Link></li>
        <li><Link to="/profile">Profil</Link></li>
        <li><Link to="/search">Recherche</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
