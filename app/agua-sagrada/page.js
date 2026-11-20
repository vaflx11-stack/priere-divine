'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const pasos = [
  {
    numero: '01',
    icono: '🌙',
    titulo: 'L’heure sacrée',
    descripcion: 'Accomplissez ce rituel à la tombée de la nuit, idéalement entre 20 h et 22 h. C’est l’heure où le voile entre le visible et l’invisible s’amincit et où les anges se rapprochent.',
  },
  {
    numero: '02',
    icono: '🕯️',
    titulo: 'Préparer l’espace',
    descripcion: 'Éteignez les lumières. Allumez une bougie blanche et placez-la au centre de la pièce. Ouvrez une fenêtre quelques minutes pour laisser sortir l’air vicié et entrer l’air frais. Vous pouvez faire brûler un peu d’encens de santal ou de myrrhe.',
  },
  {
    numero: '03',
    icono: '🥛',
    titulo: 'Le verre sacré',
    descripcion: 'Remplissez un verre transparent d’eau filtrée ou minérale. Le verre transparent laisse la lumière traverser l’eau — c’est important. Tenez le verre dans la paume de vos mains et placez-vous face à la fenêtre ou à la bougie.',
  },
  {
    numero: '04',
    icono: '✋',
    titulo: 'L’imposition des mains',
    descripcion: 'Le verre entre les mains, fermez les yeux. Respirez profondément trois fois. Imaginez une lumière dorée qui descend du Ciel, entre par le sommet de votre tête, coule le long de vos bras et atteint l’eau. Ressentez la chaleur dans vos paumes.',
  },
  {
    numero: '05',
    icono: '📜',
    titulo: 'La prière des Trois',
    descripcion: 'Les yeux fermés et le verre entre les mains, récitez la prière sacrée des trois Archanges. Dites-la à voix haute — les paroles prononcées ont plus de puissance que celles gardées en pensée.',
  },
  {
    numero: '06',
    icono: '🏠',
    titulo: 'Bénir la maison',
    descripcion: 'Avec l’eau désormais bénie, parcourez chaque pièce de votre maison. À chaque porte, trempez vos doigts et tracez une petite croix. Dans chaque coin, déposez une seule goutte. Commencez par la porte d’entrée et terminez dans la chambre.',
  },
  {
    numero: '07',
    icono: '💧',
    titulo: 'Le verre gardien',
    descripcion: 'Avec l’eau restante, remplissez un nouveau verre et placez-le au centre de votre maison — dans le salon, sur une table ou sur une étagère en hauteur. Laissez-le là pendant 7 jours. Il absorbera les énergies négatives. Le huitième jour, videz l’eau à l’extérieur de la maison.',
  },
]

export default function AguaSagradaPage() {
  const router = useRouter()
  const [pasoActivo, setPasoActivo] = useState(null)
  const [oracionVisible, setOracionVisible] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  return (
    <div style={{ background: '#0a0f1e', minHeight: '100vh', paddingBottom: '90px' }}>

      {/* Header com imagem */}
      <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
        <img src="/images/agua-sagrada.jpg" alt="Eau bénite"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          onError={(e) => { e.target.style.display = 'none' }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(10,15,30,0.97) 100%)',
        }} />

        {/* Partículas decorativas */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          {['✦', '·', '✦', '·', '✦'].map((s, i) => (
            <span key={i} style={{
              position: 'absolute',
              color: '#C9A84C',
              fontSize: i % 2 === 0 ? '12px' : '6px',
              opacity: 0.4,
              top: `${15 + i * 12}%`,
              left: `${10 + i * 18}%`,
            }}>{s}</span>
          ))}
        </div>

        <button onClick={() => router.back()} style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(255,255,255,0.15)', border: 'none',
          borderRadius: '50%', width: '36px', height: '36px',
          color: 'white', fontSize: '18px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
        }}>←</button>

        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, zIndex: 5 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '20px', padding: '4px 12px', marginBottom: '10px',
          }}>
            <span style={{ fontSize: '10px' }}>💧</span>
            <span style={{ color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
              RITUEL SACRÉ
            </span>
          </div>
          <h1 style={{
            color: 'white', fontSize: '26px', fontWeight: 700,
            fontFamily: 'Cinzel, serif', lineHeight: 1.2, marginBottom: '8px',
          }}>
            L’eau bénite des trois Archanges
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'Lato, sans-serif', lineHeight: 1.5 }}>
            L’ancien rituel des moines pour purifier la maison, éloigner le mal et préparer le chemin d’un miracle.
          </p>
        </div>
      </div>

      <div style={{ padding: '24px 20px' }}>

        {/* Intro */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '20px', padding: '20px',
          marginBottom: '28px',
        }}>
          <div style={{ color: '#C9A84C', fontSize: '20px', textAlign: 'center', marginBottom: '12px' }}>✦</div>
          <p style={{
            color: 'rgba(255,255,255,0.8)', fontSize: '14px',
            lineHeight: 1.9, fontFamily: 'Georgia, serif',
            fontStyle: 'italic', textAlign: 'center',
          }}>
            « Dans les monastères médiévaux, les moines savaient que l’eau est plus que de l’H₂O. C’est un réceptacle spirituel — capable d’absorber les prières, les intentions et la présence des anges. Ce rituel s’est transmis de génération en génération pendant des siècles. »
          </p>
        </div>

        {/* Por qué funciona */}
        <h2 style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '16px' }}>
          Pourquoi l’eau bénite ?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
          {[
            { icono: '🛡️', texto: 'Protège la maison des énergies négatives' },
            { icono: '✨', texto: 'Ouvre le chemin aux miracles' },
            { icono: '🕊️', texto: 'Invite la présence des anges' },
            { icono: '💫', texto: 'Libère la maison des blessures passées et des souvenirs pesants' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px', padding: '14px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '8px', textAlign: 'center',
            }}>
              <span style={{ fontSize: '24px' }}>{item.icono}</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontFamily: 'Lato, sans-serif', lineHeight: 1.4 }}>
                {item.texto}
              </span>
            </div>
          ))}
        </div>

        {/* Lo que necesitas */}
        <h2 style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '16px' }}>
          Ce dont vous aurez besoin
        </h2>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '20px',
          marginBottom: '28px',
        }}>
          {[
            { icono: '💧', item: 'Un verre transparent avec de l’eau filtrée' },
            { icono: '🕯️', item: 'Une bougie blanche' },
            { icono: '🪟', item: 'Une fenêtre que vous pouvez ouvrir' },
            { icono: '🤲', item: 'La foi et un cœur ouvert' },
            { icono: '🌙', item: 'Le moment : la tombée de la nuit' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              paddingBottom: i < 4 ? '12px' : '0',
              borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              marginBottom: i < 4 ? '12px' : '0',
            }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icono}</span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontFamily: 'Lato, sans-serif' }}>
                {item.item}
              </span>
            </div>
          ))}
        </div>

        {/* Passos */}
        <h2 style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '16px' }}>
          Le rituel — étape par étape
        </h2>

        {pasos.map((paso, i) => (
          <div key={i} onClick={() => setPasoActivo(pasoActivo === i ? null : i)} style={{
            background: pasoActivo === i ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.03)',
            border: `1px solid ${pasoActivo === i ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.07)'}`,
            borderRadius: '16px', padding: '16px',
            marginBottom: '10px', cursor: 'pointer',
            transition: 'all 0.3s',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '50%',
                background: pasoActivo === i ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', flexShrink: 0,
              }}>{paso.icono}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#C9A84C', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
                  ÉTAPE {paso.numero}
                </div>
                <div style={{ color: 'white', fontSize: '15px', fontWeight: 700, fontFamily: 'Cinzel, serif' }}>
                  {paso.titulo}
                </div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px', transition: 'transform 0.3s', transform: pasoActivo === i ? 'rotate(180deg)' : 'none' }}>
                ▾
              </span>
            </div>
            {pasoActivo === i && (
              <p style={{
                color: 'rgba(255,255,255,0.75)', fontSize: '14px',
                lineHeight: 1.8, fontFamily: 'Lato, sans-serif',
                marginTop: '14px', paddingTop: '14px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}>
                {paso.descripcion}
              </p>
            )}
          </div>
        ))}

        {/* Oração */}
        <div style={{ marginTop: '28px' }}>
          <button onClick={() => setOracionVisible(!oracionVisible)} style={{
            width: '100%', background: 'linear-gradient(135deg, #1a1035, #2d1b4e)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '16px', padding: '18px 20px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>📜</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#C9A84C', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
                  ÉTAPE 05
                </div>
                <div style={{ color: 'white', fontSize: '15px', fontWeight: 700, fontFamily: 'Cinzel, serif' }}>
                  La prière des trois Archanges
                </div>
              </div>
            </div>
            <span style={{ color: '#C9A84C', fontSize: '18px', transition: 'transform 0.3s', transform: oracionVisible ? 'rotate(180deg)' : 'none' }}>▾</span>
          </button>

          {oracionVisible && (
            <div style={{
              background: 'linear-gradient(180deg, #0f0c24, #1a1035)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderTop: 'none',
              borderRadius: '0 0 16px 16px',
              padding: '24px 20px',
            }}>
              <div style={{ color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textAlign: 'center', marginBottom: '20px', fontFamily: 'Lato, sans-serif' }}>
                ✦ À RÉCITER À VOIX HAUTE ✦
              </div>
              {[
                'Saint Michel Archange, guerrier de lumière,\ncouvre cette maison de ton bouclier divin.\nTranche tout lien avec le mal,\net scelle cette maison de ton épée de feu.',
                'Saint Raphaël Archange, médecin du Ciel,\nrépands ta puissance de guérison dans cette eau.\nQue chaque goutte porte ton remède divin\nau corps, à l’âme et à l’esprit de tous ceux qui vivent ici.',
                'Saint Gabriel Archange, messager de Dieu,\napporte à cette maison la bonne nouvelle de la grâce.\nLà où il y avait les ténèbres, qu’il y ait la lumière.\nLà où il y avait la peur, qu’il y ait la paix.\nLà où les portes étaient fermées, qu’il y ait un miracle.',
                'Par la puissance des Trois,\npar la volonté du Très-Haut,\ncette eau est consacrée.\nCette maison est protégée.\nAmen. Il en est ainsi. Il en sera ainsi.',
              ].map((paragrafo, i) => (
                <p key={i} style={{
                  color: i === 3 ? '#E8C97A' : 'rgba(255,255,255,0.85)',
                  fontSize: '15px', lineHeight: 2,
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic', textAlign: 'center',
                  marginBottom: i < 3 ? '20px' : '0',
                  fontWeight: i === 3 ? 600 : 400,
                  whiteSpace: 'pre-line',
                }}>
                  {paragrafo}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Dicas finais */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px', padding: '20px',
          marginTop: '24px', marginBottom: '24px',
        }}>
          <h3 style={{ color: '#C9A84C', fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif', marginBottom: '14px' }}>
            ✦ SIGNES QUE LE RITUEL A FONCTIONNÉ
          </h3>
          {[
            'L’eau du verre gardien devient trouble — elle a absorbé les énergies négatives',
            'Une sensation de légèreté et de paix dans la maison',
            'Un sommeil plus calme et plus réparateur',
            'Les relations à la maison commencent à s’améliorer d’elles-mêmes',
            'Des opportunités et des coïncidences significatives commencent à apparaître',
          ].map((señal, i) => (
            <div key={i} style={{
              display: 'flex', gap: '10px', alignItems: 'flex-start',
              marginBottom: i < 4 ? '10px' : '0',
            }}>
              <span style={{ color: '#C9A84C', fontSize: '12px', marginTop: '3px', flexShrink: 0 }}>✦</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', fontFamily: 'Lato, sans-serif', lineHeight: 1.6 }}>
                {señal}
              </span>
            </div>
          ))}
        </div>

        {/* Frequência */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '16px', padding: '20px',
          textAlign: 'center', marginBottom: '24px',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔄</div>
          <h3 style={{ color: '#E8C97A', fontSize: '16px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '8px' }}>
            À quelle fréquence ?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', fontFamily: 'Lato, sans-serif', lineHeight: 1.7 }}>
            Répétez le rituel à chaque <strong style={{ color: '#C9A84C' }}>nouvelle lune</strong> pour une protection continue. En période de crise ou de conflit à la maison, vous pouvez le faire chaque semaine. L’eau du verre gardien doit toujours être remplacée tous les 7 jours.
          </p>
        </div>

        <button className="btn-gold">
          💧 J’ai accompli le rituel
        </button>

      </div>

      <BottomNav />
    </div>
  )
}
