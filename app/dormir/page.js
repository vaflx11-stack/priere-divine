'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const items = [
  { id: 1, titulo: 'Sommeil paisible', subtitulo: 'Reposez-vous en présence de Dieu.', img: '🌙', texto: 'Seigneur, en fermant les yeux ce soir, je me remets entièrement entre Tes bras. Que Ta paix me couvre comme une douce couverture. Que les anges veillent sur mon sommeil, et que je me réveille demain renouvelé dans Ton amour. Amen.' },
  { id: 2, titulo: 'Protection pour la nuit', subtitulo: 'En sécurité dans Ses bras.', img: '🛡️', texto: 'Mon bon ange gardien, à qui la bonté divine m’a confié, cette nuit encore, sois à mes côtés : éclaire-moi, garde-moi, dirige-moi et gouverne-moi. Seigneur, que Ta présence soit ma protection pendant mon sommeil. Aucun mal ne peut m’atteindre. Amen.' },
  { id: 3, titulo: 'Lâcher l’anxiété', subtitulo: 'Libérez-vous de vos soucis.', img: '🌊', texto: 'Père, je remets entre Tes mains chaque souci de cette journée. Les problèmes non résolus, les dettes, les peurs — je les dépose tous à Tes pieds. Tu as tout en main. Je peux dormir en paix. Amen.' },
  { id: 4, titulo: 'Sommeil de guérison', subtitulo: 'Un repos réparateur.', img: '💚', texto: 'Seigneur, pendant que je dors, guéris mon corps, restaure mon esprit et renouvelle mon âme. Que chaque heure de sommeil soit un temps de restauration divine. Que je me réveille en bonne santé, fort et rempli de Ta paix. Amen.' },
  { id: 5, titulo: 'Gratitude pour la journée', subtitulo: 'Terminer en rendant grâce.', img: '🌸', texto: 'Merci, Père, pour cette journée. Pour les moments de joie et pour les épreuves aussi. Merci pour Ta fidélité, pour Ton amour constant et pour le don d’un nouveau jour demain. Amen.' },
  { id: 6, titulo: 'La visite des anges', subtitulo: 'Une compagnie céleste.', img: '👼', texto: 'Seigneur, envoie Tes anges garder cette maison cette nuit. Que leur sainte présence remplisse chaque recoin. Que leurs ailes nous protègent de la peur et que leurs voix nous apportent des rêves paisibles. Amen.' },
  { id: 7, titulo: 'Un esprit apaisé', subtitulo: 'Faites taire le bruit.', img: '🧘', texto: 'Seigneur, apaise les pensées qui m’empêchent de me reposer. Calme mon esprit agité et mon cœur inquiet. Que Ta paix, qui surpasse toute intelligence, garde mon esprit cette nuit. Amen.' },
  { id: 8, titulo: 'Confier demain à Dieu', subtitulo: 'Espérance pour l’avenir.', img: '⭐', texto: 'Père, demain est entre Tes mains. Je ne sais pas ce qu’il apportera, mais je sais que Tu y es déjà. Je dors en paix parce que j’ai confiance en Ta providence et en Ton amour fidèle. Amen.' },
  { id: 9, titulo: 'Pardonner avant de dormir', subtitulo: 'Purifiez votre cœur.', img: '🤍', texto: 'Seigneur, avant de dormir, je pardonne à ceux qui m’ont blessé aujourd’hui. Je laisse aller toute amertume, toute rancune et tout ressentiment. Et je Te demande de me pardonner aussi. Que le soleil ne se couche pas sur ma colère. Amen.' },
  { id: 10, titulo: 'Reposer en Ta présence', subtitulo: 'Demeurer en Lui.', img: '🕊️', texto: 'Me voici, Seigneur, en Ta présence. Je n’ai pas besoin de mots — seulement d’être avec Toi. Que cette nuit soit un temps de communion avec Toi, même pendant mon sommeil. Que Ton Esprit prie pour moi. Amen.' },
]

export default function DormirPage() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  if (selected) {
    return (
      <div style={{ background: '#0f0c24', minHeight: '100vh' }}>
        <div style={{ padding: '50px 20px 40px', position: 'relative' }}>
          <button onClick={() => setSelected(null)} style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(255,255,255,0.1)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            color: 'white', fontSize: '18px', cursor: 'pointer',
          }}>←</button>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div style={{ fontSize: '72px', marginBottom: '16px' }}>{selected.img}</div>
            <div style={{ fontSize: '9px', color: '#8B7FD4', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '8px' }}>SOMMEIL</div>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '8px' }}>
              {selected.titulo}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', fontFamily: 'Lato, sans-serif' }}>
              {selected.subtitulo}
            </p>
          </div>
        </div>
        <div style={{ padding: '0 20px 100px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.05)', borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)', padding: '28px 24px',
            marginBottom: '20px',
          }}>
            <p style={{
              fontSize: '17px', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Georgia, serif', fontStyle: 'italic', textAlign: 'center',
            }}>
              {selected.texto}
            </p>
          </div>
          {selected.audio && (
            <div style={{
              background: 'rgba(255,255,255,0.05)', borderRadius: '16px',
              padding: '16px', marginBottom: '16px',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '8px' }}>🎵 Musique pour dormir</p>
              <audio controls src={selected.audio} style={{ width: '100%' }} />
            </div>
          )}
          <button className="btn-gold">🌙 Reposez-vous en paix ce soir</button>
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="page-content" style={{ background: '#0f0c24' }}>
      <div style={{ padding: '20px 16px 0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'white', fontFamily: 'Lato, sans-serif' }}>
          Sommeil
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '20px', fontFamily: 'Lato, sans-serif' }}>
          Jour 1 de votre cheminement
        </p>
      </div>

      <div style={{ padding: '0 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {items.map((item) => (
            <div key={item.id} onClick={() => setSelected(item)} style={{
              borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'transform 0.2s',
            }}>
              <div style={{
                height: '110px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '48px',
                background: 'linear-gradient(135deg, rgba(139,127,212,0.2), rgba(30,27,75,0.8))',
              }}>{item.img}</div>
              <div style={{ padding: '10px 12px 14px' }}>
                <div style={{ fontSize: '8px', color: '#8B7FD4', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '4px' }}>SOMMEIL</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'white', fontFamily: 'Lato, sans-serif', lineHeight: 1.2, marginBottom: '4px' }}>
                  {item.titulo}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Lato, sans-serif' }}>
                  {item.subtitulo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
