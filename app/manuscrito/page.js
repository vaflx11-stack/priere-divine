'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const pergaminos = [
  {
    numero: 1,
    total: 5,
    titulo: 'Le remède de Dieu',
    subtitulo: 'Le Médecin divin',
    categoria: 'MANUSCRIT SACRÉ',
    duracion: '5 MIN',
    texto: `Dans l’ancien Livre de Tobie, nous découvrons un monde rempli de souffrance. Tobit, un homme juste, est frappé de cécité, tandis que Sara, au loin, est tourmentée par un esprit qui apporte la mort à chacune de ses joies.

Dans cette histoire entre Azarias — l’Archange Raphaël déguisé. Son nom, Raphaël, signifie littéralement « Dieu guérit ». Il n’apparaît pas avec éclairs et tonnerre, mais comme un humble compagnon de voyage.

Ce premier rouleau révèle le premier mystère de l’Archange : la guérison de Dieu passe souvent par la compagnie, par la présence silencieuse qui marche à nos côtés dans nos heures les plus sombres.

Le fiel du poisson, utilisé pour guérir la cécité de Tobit, représente les épreuves amères de la vie qui, sous la direction de Dieu, deviennent le remède même de notre restauration.`,
    invocacion: `« Ô Médecin divin, je déroule ce premier rouleau en cherchant le remède de Dieu. Mon corps et mon esprit sont fatigués. Comme tu as guéri Tobit l’aveugle, je demande maintenant ton intercession. Souffle sur mes maladies le souffle guérisseur du Ciel. Restaure les lieux brisés en moi. Toi qui te tiens devant le trône de Dieu, apporte le baume de Galaad à mon âme. J’ai confiance en la puissance du Très-Haut pour me rendre entier. Raphaël, guérisseur des malades, prie pour moi. Amen. »`,
  },
  {
    numero: 2,
    total: 5,
    titulo: 'Le compagnon de route',
    subtitulo: 'Guide des égarés',
    categoria: 'MANUSCRIT SACRÉ',
    duracion: '6 MIN',
    texto: `Le jeune Tobie fut envoyé pour un voyage dangereux en Médie, une terre qu’il ne connaissait pas. Il avait peur et manquait d’expérience. Pourtant, il n’était pas seul. Raphaël marchait avec lui, guidant ses pas et le protégeant des dangers visibles et invisibles.

Ce deuxième rouleau nous enseigne que la vie est un pèlerinage. Nous sommes souvent des voyageurs en terre étrangère, face à des décisions qui nous effraient.

Raphaël est le patron des voyageurs — non seulement sur les cartes, mais sur le chemin même de la vie. Il demeure notre boussole divine, veillant à ce que ceux qui se confient en la providence de Dieu ne marchent jamais seuls.

Il transforme notre errance en une sainte mission. Chaque pas fait dans la foi devient une part du plan de Dieu.`,
    invocacion: `« Guide du pèlerin, je marche dans la vallée de l’inconnu. Comme le jeune Tobie, j’ai besoin d’un compagnon pour ce voyage. La route devant moi est voilée et je ne sais quelle direction prendre. Prends ma main, ô Archange. Éloigne-moi des pièges de l’ennemi et conduis-moi vers la lumière de la volonté de Dieu. Sois ma boussole quand je suis perdu, ma force quand je suis las. Je confie mes pas à ta direction. Montre-moi le chemin qui mène à la vie. Amen. »`,
  },
  {
    numero: 3,
    total: 5,
    titulo: 'La lumière de la révélation',
    subtitulo: 'Celui qui rend la vue',
    categoria: 'MANUSCRIT SACRÉ',
    duracion: '5 MIN',
    texto: `Pendant des années, Tobit vécut dans les ténèbres, incapable de voir la lumière du soleil ou le visage de ceux qu’il aimait. Il priait pour mourir, mais Dieu envoya Raphaël pour lui apporter la lumière. La guérison fut physique, certes, mais elle fut aussi profondément spirituelle.

Voir clairement, c’est reconnaître la main de Dieu en toutes choses. Beaucoup d’entre nous ont une vue parfaite, et pourtant nous sommes spirituellement aveugles — aveugles à notre propre valeur, aveugles aux besoins des autres, aveugles aux miracles qui se produisent tout autour de nous.

Ce troisième rouleau nous invite à laisser tomber les « écailles » de nos yeux spirituels, afin de voir le monde non comme un lieu de désespoir, mais comme un royaume préparé pour nous.

Les ténèbres ne sont pas la fin — elles sont le prélude de la révélation de Dieu.`,
    invocacion: `« Ange de lumière, des écailles sont tombées sur mes yeux spirituels. J’ai du mal à voir la main de Dieu dans ma vie. Je suis aveuglé par la confusion, la peur et les distractions de ce monde. Viens, comme tu es venu auprès de Tobit, et ôte les ténèbres de ma vue. Aide-moi à voir clairement la vérité de l’amour de Dieu. Accorde-moi le don du discernement. Éclaire mon esprit de la clarté du Ciel. Ouvre mes yeux, afin que je contemple la gloire du Seigneur. Amen. »`,
  },
  {
    numero: 4,
    total: 5,
    titulo: 'La sainteté de l’amour sacré',
    subtitulo: 'Patron de l’amour',
    categoria: 'MANUSCRIT SACRÉ',
    duracion: '7 MIN',
    texto: `Sara était tourmentée par un démon qui détruisait toute tentative d’amour, la laissant veuve sept fois. Elle était sans espérance, se croyant maudite. L’intervention de Raphaël brisa cette malédiction.

Il enseigna à Tobie comment honorer Dieu dans le mariage, chassant le démon par la prière et l’encens. Ce quatrième mystère révèle Raphaël comme « l’entremetteur de Dieu ».

Il sanctifie l’amour humain, le protégeant de la convoitise et des divisions du malin. Il nous enseigne que le véritable amour est don de soi, rempli de prière, et toujours sous la protection du Ciel.

Aucune malédiction ne peut résister à une prière sincère et à un amour consacré à Dieu. Raphaël est le gardien des cœurs.`,
    invocacion: `« Bienheureux entremetteur du Ciel, tu as uni Tobie et Sara, brisant les chaînes qui les retenaient captifs. Aujourd’hui je prie pour mes relations et pour tous ceux qui cherchent un amour béni par Dieu. Unis-nous par un cordon à trois brins qui ne peut se rompre. Guéris les blessures des déceptions passées. Chasse les esprits de division et de discorde. Bénis nos foyers de paix, de compréhension et d’une sainte affection. Que notre amour reflète l’amour de Dieu pour Son Église. Amen. »`,
  },
  {
    numero: 5,
    total: 5,
    titulo: 'La révélation des Sept',
    subtitulo: 'Le Protecteur',
    categoria: 'MANUSCRIT SACRÉ',
    duracion: '7 MIN',
    texto: `À la fin du voyage, le guide révèle sa véritable identité : « Je suis Raphaël. » Il explique qu’il a été envoyé par Dieu pour éprouver et pour guérir. Cette révélation finale est le mystère de la Providence.

Souvent, nous ne reconnaissons pas les messagers de Dieu dans notre vie. Nous voyons une coïncidence ; Dieu voit un dessein. Nous voyons une lutte ; Dieu voit un entraînement.

Ce dernier rouleau nous appelle à faire confiance à la protection unique de Dieu. Il nous rappelle que nous sommes gardés par les sept esprits qui se tiennent devant le trône, et que nos prières ne sont jamais perdues — elles sont portées comme l’encens par Raphaël lui-même jusqu’au cœur de Dieu.

Les anges ne sont pas des fantaisies — ce sont des réalités qui agissent en notre faveur chaque jour.`,
    invocacion: `« Prince puissant, qui te tiens parmi les sept qui présentent les prières des saints, tu es la terreur des démons et le bouclier des fidèles. Je me place sous ta garde providentielle. Protège-moi de la flèche qui vole le jour et de la peste qui rôde dans les ténèbres. Comme tu as lié le démon Asmodée, lie les forces du mal qui se dressent contre moi. Je déclare que Dieu est mon refuge, et qu’Il a donné ordre à Ses anges de me garder. Je me repose dans l’assurance de la protection de Dieu. Amen. »`,
    esFinal: true,
  },
]

export default function ManuscritoPage() {
  const router = useRouter()
  const [paginaAtual, setPaginaAtual] = useState(0)
  const [concluido, setConcluido] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  const pergamino = pergaminos[paginaAtual]

  function proximo() {
    if (paginaAtual < pergaminos.length - 1) {
      setPaginaAtual(paginaAtual + 1)
      window.scrollTo(0, 0)
    } else {
      setConcluido(true)
    }
  }

  function anterior() {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1)
      window.scrollTo(0, 0)
    }
  }

  if (concluido) {
    return (
      <div style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '24px' }}>✨</div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#0f0c24', marginBottom: '12px' }}>
          Manuscrit terminé !
        </h2>
        <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, maxWidth: '300px', marginBottom: '32px', fontFamily: 'Lato, sans-serif' }}>
          Vous avez terminé les 5 rouleaux de l’Archange Raphaël. Que sa protection et sa guérison soient toujours avec vous.
        </p>
        <button className="btn-gold" onClick={() => router.push('/home')} style={{ width: 'auto', padding: '14px 32px' }}>
          Retour à l’accueil
        </button>
        <BottomNav />
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* Imagem hero do manuscrito */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(180deg, #0a0818 0%, #1a1035 60%, #2d1b4e 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <img src="/images/manuscrito-raphael.jpg" alt="Manuscrit" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.target.style.display = 'none' }} />
        </div>

        {/* Botão voltar */}
        <button onClick={anterior} style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(0,0,0,0.4)', border: 'none',
          borderRadius: '50%', width: '36px', height: '36px',
          color: 'white', fontSize: '16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: paginaAtual === 0 ? 0.3 : 1,
        }}>←</button>

        {/* Badge e título sobre a imagem */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '12px 20px 16px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        }}>
          <span style={{
            background: '#C9A84C', color: 'white',
            fontSize: '9px', fontWeight: 700, padding: '3px 10px',
            borderRadius: '4px', letterSpacing: '0.1em',
          }}>
            {pergamino.categoria}
          </span>
          <h1 style={{
            color: 'white', fontSize: '26px', fontWeight: 700,
            fontFamily: 'Cinzel, serif', marginTop: '6px', lineHeight: 1.2,
          }}>
            {pergamino.titulo === 'Le remède de Dieu' ? 'Archange Raphaël' : pergamino.titulo}
          </h1>
          {paginaAtual === 0 && (
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginTop: '4px' }}>
              Découvrez les 5 mystères du Médecin divin. Un chemin de guérison, de direction et de providence.
            </p>
          )}
        </div>
      </div>

      {/* Lista de pergaminhos na primeira página */}
      {paginaAtual === 0 && (
        <div style={{
          margin: '0 16px 20px',
          background: '#0f0c24', borderRadius: '16px', overflow: 'hidden',
        }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ color: 'white', fontSize: '15px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
              5 rouleaux
            </span>
          </div>
          {pergaminos.map((p, i) => (
            <div key={i} onClick={() => { setPaginaAtual(i); window.scrollTo(0,0) }} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '14px 20px',
              borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              cursor: 'pointer',
              background: i === paginaAtual ? 'rgba(201,168,76,0.1)' : 'transparent',
            }}>
              <span style={{
                color: 'rgba(255,255,255,0.3)', fontSize: '16px', fontWeight: 700,
                width: '20px', fontFamily: 'Lato, sans-serif',
              }}>{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>{p.titulo}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontFamily: 'Lato, sans-serif' }}>
                  {p.subtitulo} · {p.duracion}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.1em', marginTop: '2px' }}>
                  MANUSCRIT · {p.duracion}
                </div>
              </div>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#C9A84C', fontSize: '14px',
              }}>▶</div>
            </div>
          ))}
        </div>
      )}

      {/* Conteúdo do pergaminho atual (a partir do 1º clique) */}
      {paginaAtual >= 0 && (
        <div style={{ padding: '0 16px 100px' }}>

          {/* Badge do pergaminho */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', marginTop: paginaAtual === 0 ? '0' : '16px' }}>
            <span style={{
              background: '#FFF3CD', color: '#7A5800',
              fontSize: '10px', fontWeight: 700, padding: '4px 12px',
              borderRadius: '20px', letterSpacing: '0.08em',
            }}>
              ROULEAU {pergamino.numero} SUR {pergamino.total}
            </span>
          </div>

          {/* Título do pergaminho */}
          {paginaAtual > 0 && (
            <h2 style={{
              fontSize: '22px', fontWeight: 700, color: '#111',
              fontFamily: 'Cinzel, serif', marginBottom: '16px', lineHeight: 1.3,
            }}>
              {pergamino.titulo}
            </h2>
          )}

          {/* Texto */}
          <div style={{
            background: 'white', borderRadius: '16px', padding: '20px',
            boxShadow: '0 1px 8px rgba(0,0,0,0.07)', marginBottom: '16px',
          }}>
            {pergamino.texto.split('\n\n').map((paragrafo, i) => (
              <p key={i} style={{
                fontSize: '15px', lineHeight: 1.8, color: '#333',
                fontFamily: 'Georgia, serif',
                marginBottom: i < pergamino.texto.split('\n\n').length - 1 ? '14px' : '0',
                textAlign: 'justify',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                fontSize: '13px',
              }}>
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Separador */}
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span style={{ color: '#C9A84C', fontSize: '18px' }}>✦</span>
          </div>

          {/* Invocação */}
          <div style={{
            background: 'linear-gradient(135deg, #0f0c24, #1a1035)',
            borderRadius: '16px', padding: '20px',
            marginBottom: '20px',
          }}>
            <div style={{
              color: '#C9A84C', fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.15em', textAlign: 'center', marginBottom: '14px',
            }}>
              L’INVOCATION
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.85)', fontSize: '14px',
              lineHeight: 1.8, fontFamily: 'Georgia, serif',
              fontStyle: 'italic', textAlign: 'center',
              textTransform: 'uppercase', letterSpacing: '0.03em',
            }}>
              {pergamino.invocacion}
            </p>
            {/* Coração */}
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <span style={{ fontSize: '20px', cursor: 'pointer' }}>🤍</span>
            </div>
          </div>

          {/* Botão próximo ou concluir */}
          {!pergamino.esFinal ? (
            <button onClick={proximo} style={{
              width: '100%', padding: '16px',
              background: 'white', border: '1px solid #eee',
              borderRadius: '14px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13px', color: '#999', fontFamily: 'Lato, sans-serif' }}>Rouleau suivant</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif' }}>
                  {pergaminos[paginaAtual + 1]?.titulo}
                </div>
              </div>
              <span style={{
                background: '#0f0c24', color: 'white',
                borderRadius: '50%', width: '32px', height: '32px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', flexShrink: 0,
              }}>→</span>
            </button>
          ) : (
            <button className="btn-gold" onClick={proximo}>
              ✨ Terminer le manuscrit
            </button>
          )}
        </div>
      )}

      <BottomNav />
    </div>
  )
}
