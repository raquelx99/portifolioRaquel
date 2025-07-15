import React from 'react';
import './Projects.css';

const data = {
  jogos: [
    {
      title: 'Hades',
      description:
        'Um jogo de ficção científica com forte componente psicológico…',
    },
    {
      title: 'PatosWheel',
      description:
        'Estudo prático em Unity VR, mecânica de roleta interativa…',
    },
  ],
  web: [
    {
      title: 'Gestão Esportiva',
      description:
        'Projetos de digitalização de carteirinhas e horários de quadras…',
    },
  ],
  mobile: [
    {
      title: 'Literati Communities',
      description:
        'Sistema de comunidades em app de livros integrado ao Firebase…',
    },
  ],
};

export default function Projects({ tab, index, onNext, onPrev }) {
  const list = data[tab] || [];
  const proj = list[index] || { title: '--', description: '--' };

  return (
    <div className="projects-page">
      <div className="header">
        <h3>PROJETOS</h3>
        <p className="category">
          Desenvolvimento de {tab === 'jogos' ? 'Jogos' : tab === 'web' ? 'Web' : 'Mobile'}
        </p>
      </div>
      <div className="project-card">
        <div className="video-placeholder">
          <i className="fas fa-play-circle" />
        </div>
        <h4>{proj.title}</h4>
        <p className="desc">{proj.description}</p>
      </div>
      <div className="nav-buttons">
        <button onClick={onPrev} disabled={index === 0}>
          <i className="fas fa-chevron-right left" />
        </button>
        <button onClick={onNext} disabled={index + 1 >= list.length}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}