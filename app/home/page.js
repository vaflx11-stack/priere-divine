'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import BottomNav from '../../components/BottomNav'

const oraciones = [
  { id: 1, titulo: 'Prière du matin', subtitulo: 'Commencez votre journée avec la grâce de Dieu.', badge: 'daily', img: '/images/oracion-manana.jpg', duracion: '3 min' },
  { id: 2, titulo: 'Prière de protection', subtitulo: 'Protégez-vous, vous et vos proches.', badge: 'daily', img: '/images/oracion-proteccion.jpg', duracion: '3 min' },
  { id: 3, titulo: 'Prière de gratitude', subtitulo: 'Rendez grâce pour Ses nombreuses bénédictions.', badge: 'daily', img: '/images/oracion-gratitud.jpg', duracion: '3 min' },
]

const libros = [
  { id: 1, titulo: 'Le Code de Lourdes', subtitulo: 'Le manuscrit sacré perdu des apparitions. Découvrez le langage du Ciel.', badge: 'MANUSCRIT SACRÉ', img: '/images/libro-lourdes.jpg', pdf: '/pdfs/codigo-lourdes.pdf' },
]

const citas = [
  { texto: '« Ceux qui ont le cœur pur sont les temples du Saint-Esprit. »', autor: 'SAINTE LUCIE' },
  { texto: '« La prière est la respiration de l’âme. »', autor: 'SAINT AUGUSTIN' },
  { texto: '« Confie-toi en l’Éternel de tout ton cœur. »', autor: 'PROVERBES 3,5' },
]

export default function HomePage() {
  const router = useRouter()
  const [userName, setUserName] = useState('ami')
  const [citaIdx, setCitaIdx] = useState(0)
  const [contador, setContador] = useState(3260240)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) { router.push('/login'); return }
    const name = user.split('@')[0]
    setUserName(name)
    const interval = setInterval(() => {
      setContador(c => c + Math.floor(Math.random() * 3))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="page-content" style={{ background: 'var(--cream)' }}>

      {/* Hero com anjo */}
      <div style={{
        background: 'linear-gradient(180deg, #0f0c24 0%, #1e1654 60%, var(--cream) 100%)',
        padding: '24px 20px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '200px', height: '200px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
            Bonjour, {userName} 👋
          </h2>
          <span style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif' }}>🇫🇷 FR</span>
        </div>

        {/* Imagem do anjo */}
        <div style={{
          width: '220px', height: '260px', margin: '0 auto 16px',
          position: 'relative', overflow: 'hidden',
          borderRadius: '50% 50% 40% 40%',
          border: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 0 40px rgba(201,168,76,0.15)',
        }}>
          <img
            src="/images/angel-hero.jpg"
            alt="Ange"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML = '🕊️'
            }}
          />
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '16px' }}>
          {['Favoris', 'Récents'].map((tab, i) => (
            <div key={tab} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              color: i === 0 ? '#C9A84C' : 'rgba(255,255,255,0.4)',
              fontSize: '11px', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Lato, sans-serif',
            }}>
              <span>{i === 0 ? '☆' : '🕐'}</span>
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>

        {/* Card Habla con Jesús */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1035bb, #2d1b4ebb), url(/images/habla-jesus.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          borderRadius: '20px', padding: '20px',
          marginBottom: '16px', position: 'relative', overflow: 'hidden',
        }}>
          <span style={{
            background: '#22c55e', color: 'white', fontSize: '9px', fontWeight: 700,
            padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.08em',
          }}>NOUVEAU</span>
          <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 700, margin: '8px 0 6px', fontFamily: 'Cinzel, serif' }}>
            Parle avec Jésus
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginBottom: '16px', fontFamily: 'Lato, sans-serif' }}>
            Cherche la paix et la lumière, et parle directement avec Lui.
          </p>
          <Link href="/chat-jesus" style={{ textDecoration: 'none' }}>
            <button className="btn-gold" style={{ width: 'auto', padding: '10px 20px', fontSize: '14px' }}>
              Commencer la conversation →
            </button>
          </Link>
        </div>

        {/* Cita do dia */}
        <div style={{
          background: '#111827', borderRadius: '20px',
          padding: '20px', marginBottom: '16px', textAlign: 'center',
        }}>
          <div style={{ color: '#C9A84C', fontSize: '24px', marginBottom: '8px' }}>"</div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '8px', fontFamily: 'Lato, sans-serif' }}>
            {citas[citaIdx].autor}
          </p>
          <p style={{ color: 'white', fontSize: '16px', fontStyle: 'italic', lineHeight: 1.5, fontFamily: 'Cinzel, serif' }}>
            {citas[citaIdx].texto}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '14px' }}>
            {citas.map((_, i) => (
              <div key={i} onClick={() => setCitaIdx(i)} style={{
                width: i === citaIdx ? '20px' : '6px', height: '6px',
                borderRadius: '3px',
                background: i === citaIdx ? '#C9A84C' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer', transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </div>

        {/* Destaque Manuscrito */}
        <Link href="/manuscrito" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1035cc, #0f0c24cc), url(/images/manuscrito-raphael.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: '20px', padding: '20px', marginBottom: '20px',
            position: 'relative', overflow: 'hidden',
            minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            cursor: 'pointer',
          }}>
            <div style={{ position: 'absolute', top: 12, left: 12 }}>
              <span className="badge badge-recommended">RECOMMANDÉ</span>
            </div>
          
            <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '4px' }}>
              Le chapitre interdit complet
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Lato, sans-serif' }}>
              Mystère et guérison divine
            </p>
          </div>
        </Link>

        {/* Título Arcanjos */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Prières des Archanges
        </h3>

        {/* 3 Cards Arcanjos */}
        {[
          { href: '/arcanjo-rafael', img: '/images/arcanjo-rafael.png', arcanjo: 'ARCHANGE RAPHAËL', titulo: 'Prière de guérison' },
          { href: '/arcanjo-gabriel', img: '/images/arcanjo-gabriel.png', arcanjo: 'ARCHANGE GABRIEL', titulo: 'Prière de prospérité' },
          { href: '/arcanjo-miguel', img: '/images/arcanjo-miguel.png', arcanjo: 'ARCHANGE MICHEL', titulo: 'Prière de protection' },
        ].map((card, i) => (
          <Link key={i} href={card.href} style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '20px', marginBottom: '16px',
              overflow: 'hidden', cursor: 'pointer',
              position: 'relative', height: '140px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}>
              <img src={card.img} alt={card.titulo}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onError={(e) => { e.target.style.display = 'none' }} />
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 100%)',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                padding: '20px',
              }}>
                <div style={{ color: '#C9A84C', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '6px', fontFamily: 'Lato, sans-serif' }}>
                  {card.arcanjo}
                </div>
                <div style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', lineHeight: 1.2 }}>
                  {card.titulo}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '6px', fontFamily: 'Lato, sans-serif', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '16px' }}>▶</span> Écouter la prière
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Orações */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Prières
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {oraciones.map((o) => (
            <Link key={o.id} href="/oraciones" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                background: 'white', borderRadius: '14px', padding: '12px',
                boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #C9A84C22, #C9A84C44)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', flexShrink: 0,
                }}>🙏</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '9px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '2px' }}>QUOTIDIEN</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif' }}>{o.titulo}</div>
                  <div style={{ fontSize: '12px', color: '#666', fontFamily: 'Lato, sans-serif' }}>{o.subtitulo}</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>{o.duracion}</div>
                </div>
                <span style={{ color: '#ccc', fontSize: '20px' }}>⋯</span>
              </div>
            </Link>
          ))}
        </div>

       {/* Título Agua Sagrada */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Eau bénite
        </h3>

        {/* Agua Sagrada */}
        <Link href="/agua-sagrada" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a2a4acc, #0d1f3ccc), url(/images/agua-sagrada.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: '20px', padding: '20px', marginBottom: '16px',
            cursor: 'pointer', position: 'relative', overflow: 'hidden',
            minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, fontSize: '80px', opacity: 0.15 }}>💧</div>
            <div style={{ position: 'absolute', top: 12, left: 12 }}>
              <span style={{ background: 'rgba(100,180,255,0.2)', color: '#64B4FF', fontSize: '9px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.08em' }}>RITUEL SACRÉ</span>
            </div>
            <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '4px', lineHeight: 1.2 }}>
              L’eau bénite des 3 Archanges
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Lato, sans-serif' }}>
              L’ancien rituel pour purifier votre maison et éloigner le mal
            </p>
          </div>
        </Link>

        {/* Título Mapeo Espiritual */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Cartographie Spirituelle
        </h3>

        {/* Mapeo Espiritual */}
        <Link href="/mapeo-espiritual" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(135deg, #2a0a3acc, #150b2ecc), url(/images/mapeo-espiritual.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: '20px', padding: '20px', marginBottom: '16px',
            cursor: 'pointer', position: 'relative', overflow: 'hidden',
            minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, fontSize: '80px', opacity: 0.15 }}>🗺️</div>
            <div style={{ position: 'absolute', top: 12, left: 12 }}>
              <span style={{ background: 'rgba(212,175,106,0.2)', color: '#D4AF6A', fontSize: '9px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.08em' }}>VOTRE CONTENU EXCLUSIF</span>
            </div>
            <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '4px', lineHeight: 1.2 }}>
              Cartographie Spirituelle personnelle
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Lato, sans-serif' }}>
              Découvrez vos blocages et lequel briser en premier
            </p>
          </div>
        </Link>

        {/* Título Frecuencia Celestial */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Fréquence Céleste
        </h3>

        {/* Frecuencia Celestial */}
        <Link href="/frecuencia-celestial" style={{ textDecoration: 'none' }}>
          <div style={{
           background: 'linear-gradient(135deg, #1a2a4acc, #0d1830cc), url(/images/frecuencia-celestial.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: '20px', padding: '20px', marginBottom: '16px',
            cursor: 'pointer', position: 'relative', overflow: 'hidden',
            minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, fontSize: '80px', opacity: 0.15 }}>✨</div>
            <div style={{ position: 'absolute', top: 12, left: 12 }}>
              <span style={{ background: 'rgba(212,175,106,0.2)', color: '#D4AF6A', fontSize: '9px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.08em' }}>VOTRE CONTENU EXCLUSIF</span>
            </div>
            <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '4px', lineHeight: 1.2 }}>
              Fréquence Céleste
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Lato, sans-serif' }}>
              Audio, version sommeil, manuscrit et guide complet
            </p>
          </div>
        </Link>

        {/* Título Comunidad de Oración */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Communauté de prière
        </h3>

        {/* Comunidad de Oración */}
        <Link href="/comunidad-oracion" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(135deg, #2a1a0acc, #1a0f08cc), url(/images/comunidad-oracion.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: '20px', padding: '24px', marginBottom: '20px',
            cursor: 'pointer', position: 'relative', overflow: 'hidden',
            minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          }}>
            <div style={{ position: 'absolute', top: 16, left: 16 }}>
              <span style={{ background: 'rgba(212,175,106,0.2)', color: '#D4AF6A', fontSize: '9px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.08em' }}>VOTRE CONTENU EXCLUSIF</span>
            </div>
            <h3 style={{ color: 'white', fontSize: '19px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '6px', lineHeight: 1.2 }}>
              21 jours avec Saint Michel
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontFamily: 'Lato, sans-serif' }}>
              Guides, déclarations et rituels de la communauté de prière
            </p>
          </div>
        </Link>

        {/* Livros */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Livres
        </h3>
        {libros.map((l) => (
          <Link key={l.id} href="/codigo-lourdes" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1a1035cc, #2d1b4ecc), url(/images/codigo-lourdes.jpg)',
              backgroundSize: 'cover', backgroundPosition: 'center',
              borderRadius: '20px', padding: '20px', marginBottom: '20px', cursor: 'pointer',
            }}>
              <span style={{ background: '#C9A84C', color: 'white', fontSize: '9px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.08em' }}>
                {l.badge}
              </span>
              <h4 style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: '8px 0 6px', fontFamily: 'Cinzel, serif' }}>{l.titulo}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '14px', fontFamily: 'Lato, sans-serif' }}>{l.subtitulo}</p>
              <span style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>LIRE MAINTENANT →</span>
            </div>
          </Link>
        ))}

        {/* Compartir */}
        <div style={{
          background: 'white', borderRadius: '20px', padding: '20px',
          textAlign: 'center', marginBottom: '20px',
          boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>📿</div>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '6px', fontFamily: 'Lato, sans-serif' }}>
            Partagez Prière divine avec vos amis
          </h4>
          <p style={{ fontSize: '13px', color: '#666', fontFamily: 'Lato, sans-serif' }}>
            Vous l’appréciez ? Partagez-la pour aider vos amis et votre famille à grandir dans leur vie de prière.
          </p>
        </div>

        {/* Contador */}
        <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#111', color: 'white', borderRadius: '20px',
            padding: '6px 16px', fontSize: '12px', marginBottom: '10px', fontFamily: 'Lato, sans-serif',
          }}>
            🙏 Dieu est Amour a été prié
          </div>
          <div style={{ fontSize: '36px', fontWeight: 800, color: '#111', fontFamily: 'Lato, sans-serif' }}>
            {contador.toLocaleString('fr-FR')}
          </div>
          <div style={{ fontSize: '11px', color: '#999', letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
            PRIÈRES DITES AVEC PRIÈRE DIVINE
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}