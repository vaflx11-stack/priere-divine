// Banco de preguntas del Mapeo Espiritual
// Cada pregunta pertenece a una categoría y cada opción vale 0, 1 o 2 puntos.
// categorias: trabajo | maldicion | puertas | area | envidia

export const preguntasMapeo = [
  // TRABAJO ESPIRITUAL (obra espiritual en contra) — 5 preguntas
  {
    id: 1,
    categoria: 'trabajo',
    texto: 'Avez-vous fait des rêves récurrents de saleté, d’animaux morts, d’eau sale ou de personnes qui vous poursuivent ?',
    opciones: [
      { texto: 'Jamais', puntos: 0 },
      { texto: 'De temps en temps', puntos: 1 },
      { texto: 'Souvent', puntos: 2 },
    ],
  },
  {
    id: 2,
    categoria: 'trabajo',
    texto: 'Sentez-vous que quelque chose dans votre vie a changé soudainement, sans explication, après un événement ou une personne en particulier ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Peut-être', puntos: 1 },
      { texto: 'Oui, j’en suis sûr(e)', puntos: 2 },
    ],
  },
  {
    id: 3,
    categoria: 'trabajo',
    texto: 'Ressentez-vous une lourdeur, un épuisement ou « quelque chose sur vous » qui ne disparaît pas, même après un bon repos ?',
    opciones: [
      { texto: 'Jamais', puntos: 0 },
      { texto: 'Parfois', puntos: 1 },
      { texto: 'Presque toujours', puntos: 2 },
    ],
  },
  {
    id: 4,
    categoria: 'trabajo',
    texto: 'Les médecins n’ont-ils pas pu expliquer un problème physique ou émotionnel que vous portez depuis longtemps ?',
    opciones: [
      { texto: 'Ne s’applique pas', puntos: 0 },
      { texto: 'En partie', puntos: 1 },
      { texto: 'Oui, exactement', puntos: 2 },
    ],
  },
  {
    id: 5,
    categoria: 'trabajo',
    texto: 'Remarquez-vous que des animaux (chiens, chats, oiseaux) se comportent étrangement autour de vous ou de votre maison ?',
    opciones: [
      { texto: 'Je n’ai jamais remarqué', puntos: 0 },
      { texto: 'Une ou deux fois', puntos: 1 },
      { texto: 'Cela arrive souvent', puntos: 2 },
    ],
  },

  // MALDICIÓN HEREDITARIA (familiar) — 4 preguntas
  {
    id: 6,
    categoria: 'maldicion',
    texto: 'Les mêmes problèmes (divorce, pauvreté, maladie, décès précoces) se répètent-ils dans votre famille de génération en génération ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Dans certains cas', puntos: 1 },
      { texto: 'Oui, c’est un schéma évident', puntos: 2 },
    ],
  },
  {
    id: 7,
    categoria: 'maldicion',
    texto: 'Sentez-vous que vous portez un poids ou un « fardeau » qui n’est pas le vôtre, mais celui de votre famille ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Parfois je le pense', puntos: 1 },
      { texto: 'Oui, tout le temps', puntos: 2 },
    ],
  },
  {
    id: 8,
    categoria: 'maldicion',
    texto: 'Y a-t-il des addictions, de la violence ou de l’abandon qui se répètent entre parents, grands-parents et enfants dans votre famille ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'En partie', puntos: 1 },
      { texto: 'Oui', puntos: 2 },
    ],
  },
  {
    id: 9,
    categoria: 'maldicion',
    texto: 'Sentez-vous que, malgré tous vos efforts, quelque chose d’« invisible » vous retient, comme cela a retenu vos parents ou grands-parents ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Peut-être', puntos: 1 },
      { texto: 'Oui, clairement', puntos: 2 },
    ],
  },

  // PUERTAS ESPIRITUALES ABIERTAS (casa / entorno) — 4 preguntas
  {
    id: 10,
    categoria: 'puertas',
    texto: 'Avez-vous déjà reçu un objet (vêtement, bijou, meuble) qui vous mettait mal à l’aise ou dégageait une mauvaise énergie lorsqu’il était près de vous ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Peut-être un', puntos: 1 },
      { texto: 'Oui, plus d’un', puntos: 2 },
    ],
  },
  {
    id: 11,
    categoria: 'puertas',
    texto: 'Avez-vous emménagé dans un lieu où vous avez appris plus tard qu’il y avait eu de graves disputes, une maladie ou un décès ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Je ne suis pas sûr(e)', puntos: 1 },
      { texto: 'Oui', puntos: 2 },
    ],
  },
  {
    id: 12,
    categoria: 'puertas',
    texto: 'Avez-vous déjà utilisé une planche Ouija, des cartes de tarot, des séances de spiritisme ou des rituels sans protection spirituelle ?',
    opciones: [
      { texto: 'Jamais', puntos: 0 },
      { texto: 'Une fois, il y a longtemps', puntos: 1 },
      { texto: 'Oui, plusieurs fois', puntos: 2 },
    ],
  },
  {
    id: 13,
    categoria: 'puertas',
    texto: 'Entendez-vous des bruits, ressentez-vous des présences ou remarquez-vous des changements de température inexpliqués chez vous ?',
    opciones: [
      { texto: 'Jamais', puntos: 0 },
      { texto: 'Rarement', puntos: 1 },
      { texto: 'Souvent', puntos: 2 },
    ],
  },

  // ÁREA DE VIDA ESTANCADA — 5 preguntas (una por área)
  {
    id: 14,
    categoria: 'area_amor',
    texto: 'Sentez-vous que votre vie amoureuse est bloquée, brisée, ou qu’elle répète sans cesse le même schéma douloureux ?',
    opciones: [
      { texto: 'Non, tout va bien', puntos: 0 },
      { texto: 'Un peu', puntos: 1 },
      { texto: 'Oui, complètement', puntos: 2 },
    ],
  },
  {
    id: 15,
    categoria: 'area_dinero',
    texto: 'L’argent vous file-t-il entre les doigts, ou les opportunités professionnelles se ferment-elles juste au moment où elles semblent s’ouvrir ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Parfois', puntos: 1 },
      { texto: 'Oui, toujours', puntos: 2 },
    ],
  },
  {
    id: 16,
    categoria: 'area_salud',
    texto: 'Votre santé ou votre énergie physique déclinent-elles sans cause médicale claire ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Un peu', puntos: 1 },
      { texto: 'Oui, beaucoup', puntos: 2 },
    ],
  },
  {
    id: 17,
    categoria: 'area_familia',
    texto: 'Vos relations familiales sont-elles tendues, distantes ou pleines de conflits sans fin ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Assez', puntos: 1 },
      { texto: 'Oui, énormément', puntos: 2 },
    ],
  },
  {
    id: 18,
    categoria: 'area_paz',
    texto: 'Ressentez-vous de l’anxiété, de la tristesse ou de l’agitation sans raison apparente presque tous les jours ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Parfois', puntos: 1 },
      { texto: 'Oui, presque toujours', puntos: 2 },
    ],
  },

  // ENVIDIA / ENERGÍAS EXTERNAS — 5 preguntas
  {
    id: 19,
    categoria: 'envidia',
    texto: 'Avez-vous remarqué qu’au moment où quelque chose de bon allait arriver, un problème inattendu surgissait et l’empêchait ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'De temps en temps', puntos: 1 },
      { texto: 'Plusieurs fois', puntos: 2 },
    ],
  },
  {
    id: 20,
    categoria: 'envidia',
    texto: 'Y a-t-il quelqu’un de proche (un parent, un ami ou un collègue) chez qui vous percevez de l’envie ou de mauvaises intentions cachées ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Je soupçonne quelqu’un', puntos: 1 },
      { texto: 'Oui, j’en suis sûr(e)', puntos: 2 },
    ],
  },
  {
    id: 21,
    categoria: 'envidia',
    texto: 'Vous sentez-vous vidé après avoir côtoyé certaines personnes, comme si elles vous avaient « aspiré » votre énergie ?',
    opciones: [
      { texto: 'Jamais', puntos: 0 },
      { texto: 'Parfois', puntos: 1 },
      { texto: 'Oui, souvent', puntos: 2 },
    ],
  },
  {
    id: 22,
    categoria: 'envidia',
    texto: 'Avez-vous vécu des trahisons ou des commérages apparus juste au moment où vous progressiez ou amélioriez votre vie ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Une fois', puntos: 1 },
      { texto: 'À plusieurs reprises', puntos: 2 },
    ],
  },
  {
    id: 23,
    categoria: 'envidia',
    texto: 'Au fond de vous, sentez-vous qu’une force extérieure — et pas seulement vos propres choix — freine votre progression ?',
    opciones: [
      { texto: 'Non', puntos: 0 },
      { texto: 'Possiblement', puntos: 1 },
      { texto: 'Oui, je le sens clairement', puntos: 2 },
    ],
  },
]

const AREA_LABELS = {
  area_amor: 'Amour',
  area_dinero: 'Argent et travail',
  area_salud: 'Santé',
  area_familia: 'Famille',
  area_paz: 'Paix intérieure',
}

const PRIORIDAD_LABELS = {
  trabajo: 'Une attaque spirituelle contre vous',
  maldicion: 'Une malédiction familiale générationnelle',
  puertas: 'Une porte spirituelle ouverte dans votre entourage',
  envidia: 'L’envie et les énergies négatives des autres',
}

// Calcula el mapeo completo a partir de las respuestas
// respuestas: { [preguntaId]: puntos }
export function calcularMapeo(respuestas) {
  const totalPreguntas = preguntasMapeo.length
  const puntosPorCategoria = {}
  let bloqueosDetectados = 0
  let puntajeTotal = 0
  let puntajeMaximo = 0

  preguntasMapeo.forEach((p) => {
    const puntos = respuestas[p.id] ?? 0
    puntajeTotal += puntos
    puntajeMaximo += 2
    if (puntos >= 1) bloqueosDetectados += 1
    puntosPorCategoria[p.categoria] = (puntosPorCategoria[p.categoria] || 0) + puntos
  })

  const porcentaje = Math.round((puntajeTotal / puntajeMaximo) * 100)

  let intensidad
  if (porcentaje <= 25) intensidad = 'Léger'
  else if (porcentaje <= 50) intensidad = 'Modéré'
  else if (porcentaje <= 75) intensidad = 'Élevé'
  else intensidad = 'Critique'

  // Área de vida más afectada
  const areas = ['area_amor', 'area_dinero', 'area_salud', 'area_familia', 'area_paz']
  let areaMasAfectada = areas[0]
  areas.forEach((a) => {
    if ((puntosPorCategoria[a] || 0) > (puntosPorCategoria[areaMasAfectada] || 0)) {
      areaMasAfectada = a
    }
  })

  // Bloqueo prioritario: mayor puntaje entre trabajo, maldicion, puertas, envidia
  const prioridades = ['trabajo', 'maldicion', 'puertas', 'envidia']
  let bloqueoPrioritario = prioridades[0]
  prioridades.forEach((c) => {
    if ((puntosPorCategoria[c] || 0) > (puntosPorCategoria[bloqueoPrioritario] || 0)) {
      bloqueoPrioritario = c
    }
  })

  return {
    totalPreguntas,
    bloqueosDetectados,
    puntajeTotal,
    puntajeMaximo,
    porcentaje,
    intensidad,
    trabajoEspiritual: (puntosPorCategoria['trabajo'] || 0) >= 5,
    maldicionHereditaria: (puntosPorCategoria['maldicion'] || 0) >= 4,
    puertasAbiertas: (puntosPorCategoria['puertas'] || 0) >= 4,
    areaMasAfectada,
    areaMasAfectadaLabel: AREA_LABELS[areaMasAfectada],
    bloqueoPrioritario,
    bloqueoPrioritarioLabel: PRIORIDAD_LABELS[bloqueoPrioritario],
    puntosPorCategoria,
  }
}
