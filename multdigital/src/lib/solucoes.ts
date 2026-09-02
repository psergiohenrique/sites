export type Solucao = {
  titulo: string;
  desc: string;
  paths: string[];
};

export const SOLUCOES: Solucao[] = [
  {
    titulo: "Câmeras de segurança",
    desc: "Sistemas com acesso remoto pelo celular e gravação contínua.",
    paths: ["M3 7h13v10H3z", "M16 10l5-3v10l-5-3"],
  },
  {
    titulo: "Cerca elétrica",
    desc: "Instalação, sinalização e manutenção do perímetro.",
    paths: ["M4 4v16M20 4v16", "M4 8h16M4 12h16M4 16h16"],
  },
  {
    titulo: "Alarmes",
    desc: "Sensores de presença e abertura com alerta imediato.",
    paths: ["M6 10a6 6 0 1112 0v5l2 3H4l2-3v-5z", "M10 21h4"],
  },
  {
    titulo: "Concertina",
    desc: "Barreira física de alta proteção para muros e divisas.",
    paths: ["M3 12h18", "M6 12a3 3 0 116 0 3 3 0 11-6 0M12 12a3 3 0 116 0"],
  },
  {
    titulo: "Automatizador de portão",
    desc: "Motores para portões deslizantes e basculantes.",
    paths: ["M3 20V9l9-5 9 5v11", "M3 20h18M9 20v-6h6v6"],
  },
  {
    titulo: "Fechaduras digitais",
    desc: "Fechaduras digitais e magnéticas com controle de acesso.",
    paths: ["M6 11h12v9H6z", "M9 11V7a3 3 0 016 0v4"],
  },
  {
    titulo: "Automação residencial",
    desc: "Controle de luzes, portões e câmeras pelo aplicativo.",
    paths: ["M3 11l9-7 9 7v9H3z", "M9 20v-6h6v6"],
  },
  {
    titulo: "Redes Wi-Fi",
    desc: "Projeto de cobertura, roteadores e access points profissionais.",
    paths: [
      "M2 8.5a15 15 0 0120 0",
      "M5.5 12a10 10 0 0113 0",
      "M9 15.5a5 5 0 016 0",
      "M12 19h.01",
    ],
  },
  {
    titulo: "Eletrônicos e tendências",
    desc: "Produtos e acessórios selecionados, com desconto no WhatsApp.",
    paths: ["M4 5h16v11H4z", "M8 20h8M12 16v4"],
  },
];

export const DIFERENCIAIS = [
  {
    titulo: "Equipe especializada",
    desc: "Técnicos treinados e certificados.",
  },
  {
    titulo: "Instalação profissional",
    desc: "Projeto sob medida para o local.",
  },
  {
    titulo: "Atendimento rápido",
    desc: "Resposta no mesmo dia pelo WhatsApp.",
  },
  {
    titulo: "Suporte pós-venda",
    desc: "Manutenção e ajustes quando precisar.",
  },
];

export const CIDADES = [
  "Maringá",
  "Sarandi",
  "Paiçandu",
  "Marialva",
  "Mandaguaçu",
  "Iguaraçu",
];

export const INTERESSES = ["Câmeras", "Alarme", "Cerca elétrica", "Automação", "Wi-Fi", "Outro"];
