import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
        <img src="/Fotinha.png" alt="Raquel Quirino" />
      <h2>Raquel Quirino</h2>
      <p className="subtitle">
        Desenvolvedora de jogos e full‑stack.<br/>
        Estudante de Ciência da Computação na Unifor.
      </p>
      <div className="tech-box">
        <div className="tech-title">Linguagens e ferramentas</div>
        <div className="tech-icons">
          <img src="/icons/csharp.svg" alt="C#" />
          <img src="/icons/cpp.svg" alt="C++" />
          <img src="/icons/angular.svg" alt="Angular" />
          <img src="/icons/react.svg" alt="React" />
          <img src="/icons/typescript.svg" alt="TS" />
          <img src="/icons/javascript.svg" alt="JS" />
        </div>
      </div>
      <div className="socials">
        <i className="fab fa-github" />
        <i className="fab fa-linkedin" />
      </div>
    </div>
  );
}
