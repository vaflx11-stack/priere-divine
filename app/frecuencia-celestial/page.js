'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const TABS = [
  { id: 'audio', label: '🎧 Audio' },
  { id: 'dormir', label: '🌙 Sommeil' },
  { id: 'manuscrito', label: '📜 Manuscrit' },
  { id: 'guia', label: '⚡ Guide' },
]

export default function FrecuenciaCelestialPage() {
  const router = useRouter()
  const [tab, setTab] = useState('audio')

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#0f0c24', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{ padding: '32px 24px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>✨</div>
        <div style={{
          fontSize: '11px', color: '#D4AF6A', fontWeight: 700, letterSpacing: '0.14em',
          marginBottom: '8px', fontFamily: 'Lato, sans-serif',
        }}>
          VOTRE CONTENU EXCLUSIF
        </div>
        <h1 style={{ color: 'white', fontSize: '22px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
          Fréquence Céleste
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '8px',
          fontFamily: 'Lato, sans-serif', maxWidth: '300px', margin: '8px auto 0',
        }}>
          La fréquence utilisée par les moines et les guides spirituels pour la protection, l’abondance et la réussite.
        </p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: '8px', padding: '0 20px 20px',
        overflowX: 'auto',
      }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flexShrink: 0, padding: '10px 16px', borderRadius: '20px',
              border: tab === t.id ? '1px solid #D4AF6A' : '1px solid rgba(255,255,255,0.15)',
              background: tab === t.id ? 'rgba(212,175,106,0.15)' : 'transparent',
              color: tab === t.id ? '#D4AF6A' : 'rgba(255,255,255,0.6)',
              fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif',
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>
        {tab === 'audio' && (
          <ReproductorAudio
            titulo="Audio Fréquence Céleste"
            subtitulo="Activation principale · Écoutez avec des écouteurs"
            descripcion="Écoutez-la une fois par jour dans un moment de calme, idéalement le matin ou avant de commencer vos tâches importantes. Fermez les yeux et laissez la fréquence agir pendant que vous respirez profondément."
            src="/audios/frecuencia-celestial.mp3"
          />
        )}

        {tab === 'dormir' && (
          <ReproductorAudio
            titulo="Activation du coucher"
            subtitulo="Version nocturne · Volume bas, sans écouteurs"
            descripcion="Lancez cet audio pendant que vous vous préparez à dormir et laissez-le tourner en arrière-plan. Inutile de vous concentrer dessus — la fréquence agit pendant que votre esprit se repose et s’ouvre à l’activation tout au long de la nuit."
            src="/audios/frecuencia-celestial-dormir.mp3"
          />
        )}

        {tab === 'manuscrito' && <ManuscritoSagrado />}
        {tab === 'guia' && <GuiaDeUso />}
      </div>

      <BottomNav />
    </div>
  )
}

function ReproductorAudio({ titulo, subtitulo, descripcion, src }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function togglePlay() {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(212,175,106,0.12), rgba(212,175,106,0.03))',
      border: '1px solid rgba(212,175,106,0.35)', borderRadius: '20px', padding: '24px',
    }}>
      <h3 style={{ color: 'white', fontSize: '17px', fontWeight: 700, fontFamily: 'Lato, sans-serif', marginBottom: '4px' }}>
        {titulo}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginBottom: '20px' }}>
        {subtitulo}
      </p>

      <button
        onClick={togglePlay}
        style={{
          width: '72px', height: '72px', borderRadius: '50%', margin: '0 auto 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #D4AF6A, #B8934F)', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: '28px', color: '#0f0c24' }}>{playing ? '❚❚' : '▶'}</span>
      </button>

      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />

      <p style={{
        color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.6,
        fontFamily: 'Lato, sans-serif', textAlign: 'center',
      }}>
        {descripcion}
      </p>
    </div>
  )
}

function ManuscritoSagrado() {
  const parrafos = [
    'La tradition raconte qu’il y a des siècles, des moines vivant retirés dans des monastères de montagne découvrirent que certains tons et certaines vibrations pouvaient aligner le corps, l’esprit et l’âme sur un état de protection et d’abondance.',
    'Ces sons n’étaient pas enseignés ouvertement. Ils n’étaient transmis qu’à ceux qui faisaient preuve de patience, de foi et de disposition à recevoir ce que le Ciel avait préparé.',
    'La Fréquence Céleste que vous tenez maintenant entre vos mains provient de cette même tradition : un pont sonore entre le terrestre et le divin, utilisé pour dissiper la peur, attirer la prospérité et sceller la protection sur tous ceux qui l’écoutent le cœur ouvert.',
    'Ce n’est pas de la magie. C’est de l’harmonie — la même harmonie qui gouverne l’univers, désormais à votre portée.',
    'Que cette fréquence vous accompagne à chaque pas, et que ce que vous activez aujourd’hui se multiplie dans votre vie.',
  ]

  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '20px', padding: '28px',
    }}>
      <div style={{ fontSize: '32px', textAlign: 'center', marginBottom: '16px' }}>📜</div>
      <h3 style={{
        color: '#D4AF6A', fontSize: '16px', fontWeight: 700, textAlign: 'center',
        fontFamily: 'Cinzel, serif', marginBottom: '20px',
      }}>
        Manuscrit sacré
      </h3>
      {parrafos.map((p, i) => (
        <p key={i} style={{
          color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.9,
          fontFamily: 'Georgia, serif', fontStyle: 'italic', textAlign: 'center',
          marginBottom: i < parrafos.length - 1 ? '18px' : 0,
        }}>
          {p}
        </p>
      ))}
    </div>
  )
}

function GuiaDeUso() {
  const pasos = [
    { titulo: 'Choisissez le bon moment', texto: 'Utilisez l’audio principal le matin ou avant une tâche importante. Utilisez la version sommeil uniquement le soir.' },
    { titulo: 'Des écouteurs pour l’audio principal', texto: 'Pour l’activation principale, utilisez des écouteurs et trouvez un endroit calme. Pour dormir, vous pouvez la laisser jouer en arrière-plan sans écouteurs.' },
    { titulo: 'Répétez chaque jour', texto: 'La fréquence se renforce avec une utilisation régulière. Écoutez-la chaque jour pendant au moins 21 jours pour en ressentir pleinement l’effet.' },
    { titulo: 'Gardez une intention claire', texto: 'Avant de commencer, pensez brièvement à ce que vous souhaitez protéger ou attirer. La fréquence agit mieux lorsque votre intention est claire.' },
    { titulo: 'Ne l’interrompez pas', texto: 'Si possible, laissez l’audio jouer jusqu’au bout sans pause ni arrêt.' },
  ]

  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '20px', padding: '24px',
    }}>
      <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 700, fontFamily: 'Lato, sans-serif', marginBottom: '18px' }}>
        Guide d’utilisation simple
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {pasos.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: '14px' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
              background: 'rgba(212,175,106,0.15)', color: '#D4AF6A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif',
            }}>
              {i + 1}
            </div>
            <div>
              <div style={{ color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Lato, sans-serif', marginBottom: '4px' }}>
                {p.titulo}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Lato, sans-serif' }}>
                {p.texto}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
