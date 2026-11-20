'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const oracionesDiarias = [
  { id: 1, titulo: 'Prière du matin', subtitulo: 'Commencez votre journée avec la grâce de Dieu.', img: '🌅', texto: 'Seigneur Dieu tout-puissant, qui nous as fait parvenir sains et saufs au commencement de ce jour, garde-nous aujourd’hui par Ta puissance. Ne nous laisse tomber dans aucun péché en ce jour, mais que toutes nos paroles tendent à accomplir Ta volonté. Amen.' },
  { id: 2, titulo: 'Prière de protection', subtitulo: 'Protégez-vous, vous et vos proches.', img: '🛡️', texto: 'Seigneur, étends Ton manteau de protection sur moi et sur tous ceux que j’aime. Que Tes anges nous entourent et nous défendent de tout mal. En Ton nom, rien ne peut nous nuire. Amen.' },
  { id: 3, titulo: 'Prière de gratitude', subtitulo: 'Rendez grâce pour Ses nombreuses bénédictions.', img: '🙏', texto: 'Merci, Seigneur, pour le don de cette journée. Merci pour la vie, pour la santé, pour ma famille et pour chaque bénédiction que je reçois de Ta main généreuse. Mon cœur déborde de gratitude pour Ton amour infini. Amen.' },
]

const intenciones = [
  { id: 4, titulo: 'Prière de guérison', subtitulo: 'Restauration divine du corps et de l’âme.', img: '💊', texto: 'Seigneur Jésus, Toi qui as guéri les malades, je Te demande de poser Ta main guérissante sur moi (ou sur [prénom]). Rends la santé, renouvelle les forces, et que Ta volonté soit faite dans ce corps et dans cette âme. Amen.' },
  { id: 5, titulo: 'Prière de prospérité', subtitulo: 'Ouvrir les portes de l’abondance.', img: '✨', texto: 'Père céleste, Tu es la source de toute bénédiction. Ouvre les portes de la prospérité dans ma vie. Donne-moi la sagesse d’être un bon intendant de tout ce que Tu me confies, et que tout ce que je fais soit guidé par Ta grâce. Amen.' },
  { id: 6, titulo: 'Prière pour la guérison physique', subtitulo: 'Restaurer la santé du corps.', img: '🌿', texto: 'Seigneur, Tu es le médecin de mon corps. Je Te demande de toucher chaque cellule, chaque organe et chaque système de mon être. Que Ta puissance de guérison coule en moi et me restaure entièrement. Amen.' },
  { id: 7, titulo: 'Prière pour la guérison intérieure', subtitulo: 'La paix pour un cœur troublé.', img: '💜', texto: 'Jésus, guéris les blessures de mon cœur. Les souvenirs douloureux, les chagrins et les peurs — je Te les remets tous. Que Ta paix, qui surpasse toute intelligence, garde mon cœur et mon esprit. Amen.' },
  { id: 8, titulo: 'Prière pour la bénédiction financière', subtitulo: 'Bénédiction sur vos finances.', img: '💰', texto: 'Père, j’ai confiance en Ta providence. Ouvre les écluses des cieux et répands Ta bénédiction sur mes finances. Donne-moi du travail, de la créativité et des occasions de prospérer et de bénir les autres. Amen.' },
  { id: 9, titulo: 'Prière pour la restauration familiale', subtitulo: 'Unité et amour au foyer.', img: '👨‍👩‍👧', texto: 'Seigneur, protège ma famille. Unis nos cœurs par des liens d’amour, de pardon et de compréhension. Que l’Esprit Saint habite notre foyer et que Ta paix règne en chaque recoin. Amen.' },
  { id: 10, titulo: 'Prière pour mes enfants', subtitulo: 'Protection et direction pour eux.', img: '👶', texto: 'Père, je remets mes enfants entre Tes mains. Protège-les de tout mal, guide leurs pas, et que Ta main soit toujours sur eux. Qu’ils grandissent en connaissant Ton amour et en marchant dans Tes voies. Amen.' },
  { id: 11, titulo: 'Protection spirituelle de la maison', subtitulo: 'Garder votre demeure.', img: '🏠', texto: 'Seigneur, je Te consacre cette maison. Qu’elle soit un temple de paix, d’amour et de prière. Chasse d’ici tout esprit de division, de peur et de mal. Que Tes anges gardent chaque porte et chaque fenêtre. Amen.' },
  { id: 12, titulo: 'Libération des addictions', subtitulo: 'Briser toutes les chaînes.', img: '⛓️', texto: 'Seigneur, en Ton nom je brise toute servitude et toute addiction qui me retiennent captif. Par Ton sang précieux, je suis libéré. Donne-moi la force, la volonté et la grâce de vivre dans une liberté totale. Amen.' },
  { id: 13, titulo: 'Direction dans les décisions', subtitulo: 'Sagesse pour le chemin.', img: '🧭', texto: 'Père, j’ai besoin de Ta sagesse. Face aux décisions importantes de ma vie, éclaire mon esprit, guide mon cœur, et que Ta volonté l’emporte toujours. Amen.' },
  { id: 14, titulo: 'Contre l’anxiété et la peur', subtitulo: 'Trouver la paix dans la tempête.', img: '🌊', texto: 'Seigneur, apaise la tempête en moi. La peur et l’anxiété n’ont aucun pouvoir sur moi, car Tu es avec moi. « Ne crains rien, car je suis avec toi » — que ces paroles soient mon refuge aujourd’hui. Amen.' },
  { id: 15, titulo: 'Gratitude et action de grâce', subtitulo: 'Remercier Dieu pour Ses dons.', img: '🌸', texto: 'Merci, Seigneur, pour chaque don que Tu m’as fait. J’ouvre les yeux pour voir Tes bénédictions dans l’ordinaire, dans les petites choses et dans la vie de tous les jours. Que la gratitude soit toujours mon attitude. Amen.' },
]

export default function OracionesPage() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  if (selected) {
    return (
      <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
        {/* Header da oração */}
        <div style={{
          background: 'linear-gradient(180deg, #0f0c24, #1a1035)',
          padding: '50px 20px 40px',
          position: 'relative',
        }}>
          <button onClick={() => setSelected(null)} style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(255,255,255,0.1)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            color: 'white', fontSize: '18px', cursor: 'pointer',
          }}>←</button>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>{selected.img}</div>
            <div style={{ fontSize: '9px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '8px' }}>
              {selected.id <= 3 ? 'QUOTIDIEN' : 'INTENTION'}
            </div>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '8px' }}>
              {selected.titulo}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: 'Lato, sans-serif' }}>
              {selected.subtitulo}
            </p>
          </div>
        </div>

        {/* Texto da oração */}
        <div style={{ padding: '28px 20px 100px' }}>
          <div style={{
            background: 'white', borderRadius: '20px',
            padding: '28px 24px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            marginBottom: '20px',
          }}>
            <div style={{ color: '#C9A84C', fontSize: '32px', marginBottom: '12px', fontFamily: 'Cinzel, serif' }}>"</div>
            <p style={{
              fontSize: '17px', lineHeight: 1.8, color: '#222',
              fontFamily: 'Georgia, serif', fontStyle: 'italic',
            }}>
              {selected.texto}
            </p>
          </div>

          {/* Se tiver PDF */}
          {selected.pdf && (
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#555', marginBottom: '10px' }}>📄 Document PDF</h4>
              <a href={selected.pdf} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{
                display: 'block', textAlign: 'center', textDecoration: 'none', padding: '14px',
              }}>
                Ouvrir le PDF
              </a>
            </div>
          )}

          {/* Se tiver áudio */}
          {selected.audio && (
            <div style={{
              background: 'white', borderRadius: '16px', padding: '16px',
              boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
            }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#555', marginBottom: '10px' }}>🎵 Audio de la prière</h4>
              <audio controls src={selected.audio} />
            </div>
          )}

          <button className="btn-gold" style={{ marginTop: '20px' }}>
            🙏 Amen — j’ai prié cette prière
          </button>
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="page-content" style={{ background: 'var(--cream)' }}>
      <div style={{ padding: '20px 16px 0' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#111', fontFamily: 'Lato, sans-serif', marginBottom: '0' }}>
          Prières
        </h1>
      </div>

      {/* Destaque — Oração da Manhã */}
      <div style={{ padding: '16px' }}>
        <div onClick={() => setSelected(oracionesDiarias[0])} style={{
          background: 'linear-gradient(135deg, #1a1035, #2d1b4e)',
          borderRadius: '20px', padding: '20px',
          position: 'relative', overflow: 'hidden', cursor: 'pointer',
          minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{
              background: 'rgba(255,255,255,0.2)', borderRadius: '50%',
              width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px',
            }}>▶</div>
            <span className="badge badge-recommended">QUOTIDIEN</span>
          </div>
          <div style={{ position: 'absolute', top: 10, right: 16, fontSize: '50px', opacity: 0.3 }}>🌅</div>
          <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '4px' }}>
            Prière du matin
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'Lato, sans-serif' }}>
            Commencez votre journée avec la grâce de Dieu.
          </p>
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* Orações Diárias */}
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '12px', fontFamily: 'Lato, sans-serif' }}>
          Prières quotidiennes
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {oracionesDiarias.slice(1).map((o) => (
            <div key={o.id} onClick={() => setSelected(o)} style={{
              background: 'white', borderRadius: '16px', overflow: 'hidden',
              cursor: 'pointer', boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #C9A84C22, #C9A84C55)',
                height: '90px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '42px',
              }}>{o.img}</div>
              <div style={{ padding: '10px' }}>
                <div style={{ fontSize: '8px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.1em' }}>QUOTIDIEN</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif', lineHeight: 1.2 }}>{o.titulo}</div>
                <div style={{ fontSize: '11px', color: '#888', fontFamily: 'Lato, sans-serif', marginTop: '2px' }}>{o.subtitulo}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Intenções Específicas */}
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '12px', fontFamily: 'Lato, sans-serif' }}>
          Intentions particulières
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {intenciones.map((o) => (
            <div key={o.id} onClick={() => setSelected(o)} style={{
              background: 'white', borderRadius: '16px', overflow: 'hidden',
              cursor: 'pointer', boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #E8F4FD, #B3D9F0)',
                height: '90px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '42px',
              }}>{o.img}</div>
              <div style={{ padding: '10px' }}>
                <div style={{ fontSize: '8px', color: '#0369a1', fontWeight: 700, letterSpacing: '0.1em' }}>INTENTION</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif', lineHeight: 1.2 }}>{o.titulo}</div>
                <div style={{ fontSize: '11px', color: '#888', fontFamily: 'Lato, sans-serif', marginTop: '2px' }}>{o.subtitulo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
