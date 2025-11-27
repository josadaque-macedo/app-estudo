import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    topic: "Aplicação da lei penal no tempo",
    text: "No que se refere à aplicação da lei penal no tempo, assinale a alternativa correta, de acordo com o Código Penal.",
    options: [
      { id: "A", text: "A lei penal posterior, mais gravosa, aplica-se retroativamente aos fatos anteriores, desde que ainda não haja sentença." },
      { id: "B", text: "A lei penal revogada jamais poderá voltar a ser aplicada, ainda que seja mais benéfica ao réu." },
      { id: "C", text: "A lei penal posterior que, de qualquer modo, favorece o agente, aplica-se aos fatos anteriores, inclusive aos alcançados pela coisa julgada." },
      { id: "D", text: "A lei posterior que deixa de considerar o fato criminoso mantém todos os efeitos penais já produzidos pela condenação." },
      { id: "E", text: "A lei temporária, por sua natureza, não admite aplicação a fatos praticados após o fim de sua vigência." }
    ],
    correctOptionId: "C",
    explanation: "A lei penal mais benéfica retroage, alcançando inclusive fatos já julgados (art. 5º, XL, CF e art. 2º, parágrafo único, CP).",
    difficulty: "Média"
  },
  {
    id: 2,
    topic: "Lei penal no espaço (princípio da territorialidade)",
    text: "Quanto à aplicação da lei penal no espaço, nos termos do Código Penal, assinale a alternativa correta.",
    options: [
      { id: "A", text: "A lei penal brasileira aplica-se apenas aos crimes cometidos no território nacional, não havendo qualquer hipótese de extraterritorialidade." },
      { id: "B", text: "A lei penal brasileira aplica-se aos crimes cometidos a bordo de aeronaves e embarcações brasileiras privadas, quando em território estrangeiro." },
      { id: "C", text: "A lei penal brasileira aplica-se aos crimes cometidos a bordo de embarcações brasileiras, de natureza pública, em qualquer lugar." },
      { id: "D", text: "A regra é a extraterritorialidade da lei penal brasileira, e a territorialidade é a exceção." },
      { id: "E", text: "Somente haverá aplicação da lei penal brasileira a crimes cometidos no estrangeiro se o agente for brasileiro nato." }
    ],
    correctOptionId: "C",
    explanation: "O art. 5º, § 1º, CP, estabelece que a lei brasileira se aplica ao crime cometido a bordo de navio ou aeronave pública onde quer que se encontrem.",
    difficulty: "Média"
  },
  {
    id: 3,
    topic: "Fato típico e dolo/culpa na teoria finalista",
    text: "Na teoria finalista adotada pelo Código Penal brasileiro, assinale a alternativa correta quanto à estrutura do crime.",
    options: [
      { id: "A", text: "Na teoria finalista, o dolo e a culpa são elementos da culpabilidade, e não do fato típico." },
      { id: "B", text: "O fato típico é composto por conduta, nexo causal, resultado e tipicidade, sendo o dolo e a culpa elementos da conduta." },
      { id: "C", text: "A ilicitude integra o fato típico, de modo que toda conduta típica é automaticamente culpável." },
      { id: "D", text: "A culpabilidade é composta por tipicidade, ilicitude e reprovabilidade social da conduta." },
      { id: "E", text: "O resultado, na teoria finalista, é irrelevante para a configuração do fato típico nos crimes materiais." }
    ],
    correctOptionId: "B",
    explanation: "No finalismo, dolo e culpa integram a conduta, que é elemento do fato típico (conduta, nexo, resultado, tipicidade).",
    difficulty: "Média"
  },
  {
    id: 4,
    topic: "Excludentes de ilicitude",
    text: "Conforme o Código Penal brasileiro, são causas legais de exclusão da ilicitude:",
    options: [
      { id: "A", text: "Estado de necessidade, legítima defesa, coação moral irresistível e exercício regular de direito." },
      { id: "B", text: "Legítima defesa, estrito cumprimento de dever legal, exercício regular de direito e obediência hierárquica." },
      { id: "C", text: "Estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito." },
      { id: "D", text: "Emoção violenta, logo em seguida a injusta provocação da vítima." },
      { id: "E", text: "Erro de proibição inevitável, quando o agente não podia conhecer a ilicitude do fato." }
    ],
    correctOptionId: "C",
    explanation: "Art. 23, CP: estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito.",
    difficulty: "Fácil"
  },
  {
    id: 5,
    topic: "Culpabilidade e embriaguez",
    text: "De acordo com o Código Penal, no que se refere à imputabilidade e à embriaguez, assinale a alternativa correta.",
    options: [
      { id: "A", text: "A emoção e a paixão excluem a imputabilidade penal." },
      { id: "B", text: "A embriaguez completa, independentemente de sua origem, exclui a imputabilidade penal." },
      { id: "C", text: "A embriaguez voluntária ou culposa, ainda que completa, não exclui a imputabilidade penal." },
      { id: "D", text: "A embriaguez decorrente de caso fortuito ou força maior nunca exclui a imputabilidade penal." },
      { id: "E", text: "A embriaguez, qualquer que seja a sua causa, sempre agrava a pena do agente." }
    ],
    correctOptionId: "C",
    explanation: "Art. 28, II, CP: embriaguez voluntária ou culposa, ainda que completa, não exclui imputabilidade (teoria da actio libera in causa).",
    difficulty: "Média"
  },
  {
    id: 6,
    topic: "Concurso de pessoas",
    text: "Sobre o concurso de pessoas, nos termos do Código Penal, assinale a alternativa correta.",
    options: [
      { id: "A", text: "Para haver concurso de pessoas é suficiente a mera presença física de várias pessoas no local do crime." },
      { id: "B", text: "O Código Penal adota a teoria pluralística, punindo com tipos penais distintos o autor e o partícipe." },
      { id: "C", text: "A cooperação dolosamente distinta ocorre quando um dos concorrentes pratica crime menos grave que o pretendido." },
      { id: "D", text: "O concurso de pessoas exige, entre outros requisitos, pluralidade de condutas e relevância causal das contribuições." },
      { id: "E", text: "Quem concorre para o crime responde pela pena do crime menos grave praticado por qualquer dos participantes." }
    ],
    correctOptionId: "D",
    explanation: "Requisitos do concurso de pessoas: pluralidade de agentes e condutas, relevância causal, liame subjetivo e identidade de infração.",
    difficulty: "Média"
  },
  {
    id: 7,
    topic: "Penas e substituição (art. 44 CP)",
    text: "Sobre a substituição da pena privativa de liberdade por restritiva de direitos, de acordo com o Código Penal, assinale a alternativa correta.",
    options: [
      { id: "A", text: "A substituição da pena privativa de liberdade por restritiva de direitos é obrigatória sempre que a condenação não ultrapasse 8 anos." },
      { id: "B", text: "É possível a substituição quando a pena privativa de liberdade aplicada não for superior a 4 anos, o crime não tiver sido cometido com violência ou grave ameaça." },
      { id: "C", text: "É vedada a substituição da pena privativa de liberdade por restritiva de direitos em qualquer crime cometido por servidor público." },
      { id: "D", text: "A substituição depende exclusivamente da vontade do réu, sendo dispensável a análise do juiz." },
      { id: "E", text: "Somente é possível a substituição da pena privativa de liberdade por pena de multa." }
    ],
    correctOptionId: "B",
    explanation: "Art. 44, CP: requisitos objetivos de substituição incluem pena não superior a 4 anos, crime sem violência ou grave ameaça à pessoa, réu não reincidente em crime doloso, etc.",
    difficulty: "Média"
  },
  {
    id: 8,
    topic: "Crimes contra a Administração Pública",
    text: "Considerando os crimes contra a Administração Pública (peculato x furto), assinale a alternativa correta.",
    options: [
      { id: "A", text: "Comete peculato-apropriação o particular que se apropria de bem móvel pertencente à Administração Pública, sem qualquer vínculo com funcionário público." },
      { id: "B", text: "O crime de peculato-apropriação exige que o agente seja servidor público e tenha a posse do bem em razão do cargo." },
      { id: "C", text: "Se o servidor público subtrai bem da Administração, sem ter a posse em razão do cargo, nunca responderá por peculato." },
      { id: "D", text: "O crime de peculato é crime próprio e só pode ser praticado por particular, jamais por servidor público." },
      { id: "E", text: "Não há diferença entre peculato-apropriação e peculato-desvio, pois ambos se caracterizam apenas pela subtração." }
    ],
    correctOptionId: "B",
    explanation: "Peculato-apropriação (art. 312, caput, CP) exige que o agente seja funcionário público e tenha a posse do bem em razão do cargo.",
    difficulty: "Média"
  },
  {
    id: 9,
    topic: "Crimes contra a fé pública",
    text: "No que tange aos crimes contra a fé pública, assinale a alternativa correta.",
    options: [
      { id: "A", text: "O crime de uso de documento falso é absorvido pelo crime de falsificação de documento, em qualquer hipótese." },
      { id: "B", text: "Quem faz uso de documento que sabe ser falso responde pelo crime de uso de documento falso, ainda que não tenha sido o falsificador." },
      { id: "C", text: "O crime de falsidade ideológica exige sempre alteração material do documento." },
      { id: "D", text: "A falsidade ideológica nunca pode recair sobre documento público." },
      { id: "E", text: "O crime de uso de documento falso exige que o agente seja funcionário público no exercício de suas funções." }
    ],
    correctOptionId: "B",
    explanation: "Art. 304, CP: uso de documento falso é crime autônomo. Se o próprio falsificador usa, responde apenas pela falsificação (princípio da consunção), mas se terceiro usa, responde pelo art. 304.",
    difficulty: "Média/Alta"
  },
  {
    id: 10,
    topic: "Feminicídio (Lei 14.994/2024)",
    text: "Em relação ao feminicídio, após as alterações promovidas pela Lei n.º 14.994/2024, assinale a alternativa correta.",
    options: [
      { id: "A", text: "O feminicídio continua sendo uma qualificadora do crime de homicídio, prevista no § 2º do art. 121 do Código Penal." },
      { id: "B", text: "O feminicídio passou a ser crime autônomo, previsto no art. 121-A do Código Penal, com pena de reclusão, de 20 a 40 anos." },
      { id: "C", text: "O feminicídio deixou de ser considerado crime praticado por razões da condição do sexo feminino." },
      { id: "D", text: "O feminicídio deixou de admitir tentativa, por se tratar de crime de resultado cortado." },
      { id: "E", text: "A Lei n.º 14.994/2024 revogou todas as causas de aumento de pena relacionadas ao feminicídio." }
    ],
    correctOptionId: "B",
    explanation: "A Lei 14.994/2024 transformou o feminicídio em crime autônomo (art. 121-A, CP), com pena de 20 a 40 anos, deixando de ser apenas qualificadora.",
    difficulty: "Média"
  }
];