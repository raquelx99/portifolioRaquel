import React from 'react';

function LeftPage({ profile }) {
  return (
    <div className="page left-page">
      <div className="profile-section">
        <div className="avatar-container">
          <img src="/Fotinha.png" alt="Raquel Quirino" className="avatar" />
        </div>
        <h1>{profile.name}</h1>
        <p>{profile.title}<br />{profile.subtitle}</p>
      </div>
      
      <div className="skills-section">
        <div className="skills-header">
          <h3>Linguagens e ferramentas</h3>
        </div>
        <div className="skills-body">
            <img src="/c-sharp.svg" alt="Ícone do C#" />
            <img src="/c++.svg" alt="Ícone do C++" />
            <img src="/angular.svg" alt="Ícone do Angular" />
            <img src="/react.svg" alt="Ícone do React" />
            <img src="/typescript.svg" alt="Ícone do TypeScript" />
            <img src="/javascript.svg" alt="Ícone do JavaScript" />
            <img src="/java.svg" alt="Ícone do Java" />
            <img src="/unity.svg" alt="Ícone do Unity" />
            <img src="/godot.svg" alt="Ícone do Godot" />
            <img src="/game-maker.svg" alt="Ícone do Game Maker" />
            <img src="/kotlin.svg" alt="Ícone do Kotlin" />
        </div>
      </div>
      
      <div className="social-links">
        <a href="https://github.com/raquelx99" target="_blank" rel="noopener noreferrer">
          <img src="/Github.svg" alt="Meu perfil no GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/raquel-albuquerque-93a053328" target="_blank" rel="noopener noreferrer">
          <img src="/Linkedin.svg" alt="Meu perfil no LinkedIn" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default LeftPage;