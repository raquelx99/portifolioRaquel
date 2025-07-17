// src/data.js

export const portfolioData = {
  profile: {
    name: "Raquel Quirino",
    title: "Desenvolvedora de jogos e full-stack.",
    subtitle: "Estudante de ciências da computação na Unifor.",
    // Você pode adicionar links para as imagens das tecnologias aqui
  },
  categories: {
    JOGOS: [
      {
        id: 1,
        title: "Patowheel",
        tags: [],
        description: `
          <p>Este projeto foi desenvolvido como um estudo prático de interfaces de usuário (UI) utilizando o motor de jogos Unity. O objetivo principal foi criar uma experiência interativa e visualmente agradável que explorasse os principais conceitos de design de UI, animações, responsividade e interação com elementos de gameplay.</p>
          <p><strong>Principais funcionalidades implementadas:</strong></p>
          <ul>
            <li>Sistema de Roleta Interativa: Uma roleta com diferentes resultados foi criada utilizando física via Rigidbody2D para girar e parar suavemente.</li>
            <li>Animações de UI: Transições suaves e feedback visual para interações do usuário.</li>
          </ul>
        `
      },
      {
        id: 2,
        title: "Hades",
        tags: [],
        description: `
          <p>Um jogo de ficção científica com forte componente psicológico, cuja mecânica central é a alternância entre duas realidades contrastantes. O jogador transita constantemente entre: uma nave espacial futurística, uma casa antiga e abandonada.</p>
          <p>Ao alternar entre esses dois mundos, o jogador deve coletar fragmentos de memória, decifrar códigos e solucionar puzzles que conectam passado e futuro, desvendando o mistério por trás de uma catástrofe temporal. A cada troca de realidade, novas peças da narrativa se revelam, exigindo atenção aos detalhes e raciocínio integrado para avançar na história até o seu desfecho.</p>
        `
      }
    ],
    WEB: [
      {
        id: 1,
        title: "Gestão Esportiva",
        tags: ["Front-end", "Back-end"],
        description: `
          <p>Projeto desenvolvido para digitalizar e modernizar o gerenciamento de carteirinhas estudantis e o controle de uso dos espaços esportivos do ginásio.</p>
          <p>O sistema tem como objetivo digitalizar a carteirinha do ginásio e facilitar a gestão das mesmas, assim como digitalizar o acesso aos horários das quadras disponíveis pelos alunos e simplificar a edição dos horários pelos funcionários.</p>
          <p><strong>Funcionalidades principais:</strong></p>
          <ul>
            <li>Cadastro de estudantes e funcionários com perfis distintos.</li>
            <li>Geração de carteirinha digital com QR Code.</li>
            <li>Agendamento e visualização de horários das quadras.</li>
          </ul>
        `
      }
    ],
    MOBILE: [
      {
        id: 1,
        title: "Literati",
        tags: ["Back-end"],
        description: `
          <p>Desenvolvimento de sistema de comunidades para o app de livros "Literati". Integrei o app ao Firebase, criando funcionalidades para:</p>
          <ul>
            <li>Criar, deletar e gerenciar comunidades;</li>
            <li>Postar conteúdo com texto e imagem;</li>
            <li>Sistema de curtidas em posts;</li>
            <li>Gestão de administradores e moderadores (adição e remoção);</li>
            <li>Definição e atualização de imagens de capa;</li>
            <li>Exclusão de comunidades;</li>
          </ul>
        `
      }
    ]
  }
};