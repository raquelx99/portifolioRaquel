export const portfolioData = {
  profile: {
    name: "Raquel Quirino",
    title: "Desenvolvedora de jogos, game designer e ilustradora.",
    subtitle: "Estudante de ciências da computação na Unifor.",
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
        `,
        technologies: [
          'c-sharp.svg',
          'unity.svg'
        ]
      },
      {
        id: 2,
        title: "Hades",
        tags: [],
        description: `
          <p>Um jogo de ficção científica com forte componente psicológico, cuja mecânica central é a alternância entre duas realidades contrastantes. O jogador transita constantemente entre: uma nave espacial futurística, uma casa antiga e abandonada.</p>
          <p>Ao alternar entre esses dois mundos, o jogador deve coletar fragmentos de memória, decifrar códigos e solucionar puzzles que conectam passado e futuro, desvendando o mistério por trás de uma catástrofe temporal. A cada troca de realidade, novas peças da narrativa se revelam, exigindo atenção aos detalhes e raciocínio integrado para avançar na história até o seu desfecho.</p>
        `,
        technologies: [
          'c-sharp.svg',
          'unity.svg'
        ]
      },
      {
        id: 3,
        title: "MedSim",
        tags: [],
        description: `
          <p>MedSim é um protótipo de simulador de atendimento médico em realidade virtual desenvolvido em Unity durante a Oficina de Férias do laboratório Vortex na Uniforem apenas 1 mês. O objetivo do projeto foi explorar o uso de VR no treinamento de estudantes de medicina, simulando o fluxo completo de um atendimento em consultório e incentivando o desenvolvimento do raciocínio clínico.</p>

        <p>No sistema, o jogador assume o papel de um médico e realiza um atendimento dividido em quatro etapas principais: <strong>anamnese, exame físico, solicitação de exames e diagnóstico</strong>. Durante a anamnese, o jogador conduz a conversa com o paciente através de perguntas que ajudam a identificar sintomas e histórico clínico. Em seguida, pode utilizar instrumentos médicos presentes na sala virtual, como <strong>esfigmomanômetro, otoscópio e oxímetro</strong>, para investigar sinais clínicos.</p>

        <p>Com base nas informações coletadas, o jogador pode solicitar exames laboratoriais ou de imagem através de uma <strong>prancheta interativa</strong>, recebendo os resultados posteriormente (textuais ou exibidos em um <strong>negatoscópio virtual</strong>). Ao final do atendimento, o jogador escolhe o diagnóstico e recebe um <strong>feedback detalhado com pontuação, análise das decisões e justificativas para possíveis erros</strong>.</p>

        <p>Durante o desenvolvimento, também realizamos uma visita ao <strong>NAMI (Núcleo de Atenção Médica Integrada da UNIFOR)</strong> para compreender melhor o fluxo real de atendimento e obter referências para a construção de casos clínicos mais realistas.</p>

        <p><strong>Principais funcionalidades implementadas:</strong></p>
          <ul>
            <li>Sistema completo de fluxo de atendimento: anamnese → exame físico → solicitação de exames → diagnóstico.</li>
            <li>Interface VR imersiva utilizando tablet, prancheta interativa e negatoscópio para visualização de exames.</li>
            <li>Sistema de anamnese baseado em escolhas de diálogo e coleta de sintomas.</li>
            <li>Sistema dinâmico de solicitação e retorno de exames laboratoriais e de imagem.</li>
            <li>Sistema de pontuação e feedback educacional com justificativas de erros.</li>
            <li>Interação com instrumentos médicos em VR para exame físico do paciente.</li>
          </ul>
        `,
        technologies: [
          'c-sharp.svg',
          'unity.svg',
        ]
      },
      {
        id: 4,
        title: "Cascavel (VR Experience)",
        tags: [],
        description: `
          <p>Experiência narrativa em realidade virtual desenvolvida na Unity durante meu estágio no laboratório de pesquisa <strong>Vortex</strong>, vinculado à Vice-Reitoria de Pesquisa da Universidade de Fortaleza. O projeto foi desenvolvido para o <strong> Complexo Cultural Yolanda de Queiroz</strong> e apresenta ao usuário a história e a lenda da cidade de Cascavel por meio de uma narrativa inspirada na literatura de cordel.</p>
          <p>A experiência segue um formato cinematográfico imersivo em VR, no qual o usuário acompanha os acontecimentos enquanto interage com a história através de <strong>reconhecimento de voz</strong>, influenciando o desenvolvimento da narrativa e seus possíveis finais. Fui responsável pela <strong>estruturação completa da experiência utilizando o sistema de Timeline da Unity</strong>, organizando sequências narrativas, animações, eventos e pausas interativas que controlam o fluxo da história.</p>
          <p>Também implementei a integração de <strong>reconhecimento de voz online e offline</strong> para interpretação das respostas do usuário, além de sistemas de comportamento para NPCs utilizando <strong>NavMeshAgent</strong>, incluindo movimentação autônoma, patrulha e comportamentos de fuga acionados por eventos da narrativa, garantindo sincronização entre animação, interação e progressão da história.</p>
        `,
        technologies: [
          'c-sharp.svg',
          'unity.svg'
        ]
      },
      {
        id: 5,
        title: "Orbis",
        tags: [],
        description: `
          <p><strong>Orbis</strong> é um jogo mobile de exploração do campus da <strong>UNIFOR</strong> no estilo <strong>“Pokémon Go”</strong>, criado durante meu estágio no laboratório de pesquisa <strong>Vortex</strong>, vinculado à Vice-Reitoria de Pesquisa da Universidade de Fortaleza, com o objetivo de incentivar estudantes a conhecerem melhor as regiões do campus, motivado por um cenário em que, no <strong>ENADE</strong>, alunos demonstravam baixo conhecimento sobre os espaços da universidade.</p>
          <p>No jogo, o aluno percorre o campus, visita regiões e <strong>captura animais tirando fotos</strong>. As imagens são enviadas para uma <strong>API de predição</strong> que identifica o animal; a partir do retorno (animal, região e <code>created_at</code>), o app processa a captura para <strong>selecionar e desbloquear uma variação</strong> do animal conforme <strong>região + horário</strong>, atualizando automaticamente a <strong>Dex</strong>, o <strong>perfil</strong>, o <strong>dashboard</strong> e as <strong>conquistas</strong>.</p>
          <p><strong>Minha contribuição: </p>
          <p></strong> Desenvolvimento end-to-end em <strong>Unity (C#)</strong>, implementando as telas a partir do protótipo no <strong>Figma</strong> com Canvas/UI, integração completa de <strong>login/cadastro</strong>, fluxo de <strong>captura por foto</strong> + processamento de variações, sistema de <strong>Dex</strong>, <strong>perfil/edição de perfil</strong> (título e ícone/avatar com fallback default), além da integração do <strong>sistema de conquistas</strong> e dashboard. Também criei e integrei <strong>sprites 2D/pixel art de animais</strong> usados no app.</p>
        `,
        technologies: [
          "c-sharp.svg",
          "unity.svg"
        ]
      },
      {
        id: 6,
        title: "Still Me",
        tags: [],
        description: `
          <p><strong>Still Me</strong> é um protótipo de jogo narrativo 2D que combina <strong>puzzles simbólicos</strong>, <strong>minigames</strong> e narrativa ambiental para retratar a jornada de <strong>Rafael</strong> após um acidente. A história se desenvolve ao longo de <strong>7 dias</strong>, em que o jogador atravessa tarefas cotidianas, fragmentos de memória, sonhos e interações via <strong>celular/diário</strong>, com progressão emocional culminando no retorno ao ateliê e na pintura final.</p>
          <p>As mecânicas foram pensadas para refletir o estado interno do personagem: instabilidade, bloqueios e pequenas vitórias ganham forma em interações de coordenação e precisão, com foco em <strong>feedback</strong> e consistência de experiência, reforçando o tema de identidade e recomeço.</p>
          <p><strong>Minha contribuição:</p>
          <p></strong> Atuei na <strong>estruturação do GDD</strong> e do <strong>fluxo narrativo</strong> (acontecimentos por dia, escolhas, variações e finais), além do <strong>design e organização dos minigames</strong> e da integração narrativa-mecânica para manter coerência entre história e gameplay. Também produzi <strong>sprites em pixel art</strong> para <strong>cenário, UI e minigames</strong>, garantindo consistência visual, boa leitura de tela e padronização de escala/estilo dentro do protótipo.</p>
        `,
        technologies: [
          "unity.svg",
          "c-sharp.svg"
        ]
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
        `,
        technologies: [
          'angular.svg',
          'typescript.svg',
          'javascript.svg'
        ]
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
        `,
        technologies: [
          'kotlin.svg',
        ]
      }
    ]
  }
};