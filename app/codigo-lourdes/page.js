'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const capitulos = [
  {
    numero: 1,
    titulo: 'La nuit où le Ciel est descendu sur la Terre',
    texto: `C’était en 1858.

Un froid mordant balayait la petite ville de Lourdes, dans le sud de la France.

Une jeune fille pauvre, fille d’un meunier, marchait près de la grotte de Massabielle, un fagot de bois dans les bras.

Elle s’appelait Bernadette Soubirous.

Et ce jour-là, tandis que le vent murmurait entre les rochers et que l’eau ruisselait en silence le long de la fissure, l’impossible se produisit :

La grotte se mit à briller.

Une lumière blanche, douce et chaude — comme si le Ciel lui-même avait ouvert une fenêtre.

Et là, entourée d’un halo doré, se tenait une dame vêtue de blanc.

Ce n’était pas son imagination.

Ce n’était pas une ombre.

Ce n’était pas un rêve.

Bernadette tomba à genoux.

Et la Dame sourit, avec une bonté qui n’existe pas en ce monde.

À cet instant précis naquit ce que nous appelons aujourd’hui :

Le Code de Lourdes — le langage de guérison que le Ciel utilise pour toucher la Terre.

Ce n’est pas une formule.

Ce n’est pas une superstition.

Ce n’est pas de la magie.

C’est un schéma spirituel, transmis par Marie à travers des symboles, des gestes, des paroles et de l’eau.

Ce manuscrit révèle ce code — adapté, protégé et désormais mis à votre disposition.`,
  },
  {
    numero: 2,
    titulo: 'Le mystère de la source cachée',
    texto: `Lors de l’une des apparitions, la Dame dit à Bernadette une chose qui allait changer l’histoire :

« Allez boire à la fontaine et vous y laver. »

Mais à cette époque...

il n’y avait pas de source.

Aucune eau ne coulait de la grotte.

Il n’y avait que de la roche, de la poussière et du silence.

Bernadette obéit malgré tout.

Elle s’agenouilla.

Elle se mit à creuser avec ses mains, comme si elle suivait un ordre invisible.

D’abord vint la boue.

Puis un filet d’eau.

Puis un ruisseau.

Et alors...

une source se mit à jaillir des profondeurs de la terre, là, devant la jeune fille.

L’eau guérissait :

les aveugles,

les paralysés,

les malades en phase terminale,

les personnes aux blessures profondes,

la dépression et les tourments intérieurs.

Plus de 70 miracles ont été officiellement reconnus par l’Église.

Des milliers d’autres ont été constatés sans reconnaissance officielle.

La science l’a étudiée — et n’a trouvé aucune explication :

une eau pure,

sans minéraux particuliers,

sans propriétés chimiques extraordinaires.

Alors pourquoi guérit-elle ?

Parce que la guérison n’est pas dans la composition de l’eau, mais dans le CODE qui a été activé à cette source.

Et ce code, vous allez l’apprendre dans les chapitres suivants.`,
  },
  {
    numero: 3,
    titulo: 'Le Code de Lourdes : comment il fonctionne',
    texto: `Le Code de Lourdes repose sur quatre piliers spirituels.

Tous étaient présents lors des apparitions et à la source.

Ces piliers sont :

1. L’APPEL

(Marie apparaît → l’âme s’éveille)

C’est le moment où quelque chose en vous dit :

« J’ai besoin de guérison. »

« J’ai besoin d’aide. »

« J’ai besoin de Dieu. »

Cet appel ouvre le cœur pour recevoir.

2. L’ACTE D’OBÉISSANCE

(Bernadette creusant la terre)

C’est le geste symbolique qui ouvre la porte à la grâce.

Ce n’est pas la force.

C’est l’abandon.

3. L’EAU DE LA TRANSFORMATION

(la source qui jaillit)

L’eau représente :

la purification,

la renaissance,

la promesse de Dieu,

la restauration du corps.

4. LA PAROLE DE LUMIÈRE

(la prière)

La guérison s’accomplit lorsque l’intention rencontre la foi à travers la parole prononcée.

Lorsque les quatre se rejoignent, ils créent un espace spirituel capable de :

restaurer le corps,

purifier l’âme,

apaiser les douleurs profondes,

et rouvrir les chemins qui étaient bloqués.

Et vous pouvez le faire chez vous, avec de l’eau ordinaire — à condition de suivre le bon rituel.`,
  },
  {
    numero: 4,
    titulo: 'Le rituel original de Lourdes (reconstitué)',
    texto: `C’est ici que nous allons au-delà de ce que propose le PDF original.

Voici le rituel complet, reconstitué à partir :

des récits des apparitions,

des prières traditionnelles,

des pratiques des guérisseurs de Lourdes,

et des écrits conservés par les gardiens du sanctuaire.

Vous aurez besoin de :

un verre d’eau

une bougie blanche (facultatif)

le silence

la foi

ÉTAPE 1 — LE SILENCE DE LA GROTTE

Fermez les yeux.

Respirez profondément.

Imaginez-vous à l’intérieur de la grotte de Massabielle.

Sentez l’humidité des parois.

Écoutez l’eau qui goutte.

Sentez le sol froid sous vos pieds.

Le silence est le voile où les miracles prennent forme.

ÉTAPE 2 — INVOQUER SA PRÉSENCE

Dites :

« Marie, Mère de lumière, j’entre maintenant dans ta grotte sacrée.

Guide-moi comme tu as guidé Bernadette. »

Cela ouvre votre cœur à sa présence.

ÉTAPE 3 — LA LUMIÈRE SUR L’EAU

Élevez le verre d’eau.

Imaginez une lumière blanche qui descend sur lui.

ÉTAPE 4 — LES PAROLES SECRÈTES DU CODE

Répétez :

« Que cette eau porte la guérison descendue du Ciel à Lourdes.

Qu’elle touche mon corps.

Qu’elle touche mon âme.

Qu’elle touche tout ce qui, en moi, a besoin de renaître. »

ÉTAPE 5 — BOIRE LA GRÂCE

Buvez lentement.

Trois gorgées :

une pour le corps

une pour le cœur

une pour l’esprit

ÉTAPE 6 — LES PAROLES DE CLÔTURE

Posez la main sur votre poitrine et dites :

« Je reçois la guérison de Lourdes. »`,
  },
  {
    numero: 5,
    titulo: 'La prière officielle du Code de Lourdes (1 minute)',
    texto: `« Marie, Mère de lumière, répands sur moi la guérison qui a jailli de la grotte.

Touche mon corps, rends-moi la santé, lave ma douleur et renouvelle mes forces.

Comme l’eau a jailli du rocher, que la guérison jaillisse en moi.

Que la lumière descendue sur Bernadette descende maintenant sur ma vie.

Lourdes vit en moi.

Je reçois.

Amen. »`,
    esOracion: true,
  },
  {
    numero: 6,
    titulo: 'La prière profonde de Lourdes (7 minutes)',
    subtitulo: '*(À lire de préférence dans un profond silence)*',
    texto: `« Mère de l’Immaculée Conception, j’entre maintenant dans ta grotte sacrée.

Touche mes ombres de ta lumière.

Là où il y a la douleur, guéris.

Là où il y a la peur, apporte le calme.

Là où il y a le doute, apporte la lumière.

Là où il y a la maladie, restaure.

Marie, pose tes mains sur mon corps.

Dissous ce que la médecine ne peut expliquer.

Renouvelle chaque cellule.

Enveloppe mon esprit de paix.

Apaise mes pensées.

Mets de l’ordre sur mon chemin.

Bénie soit l’eau qui guérit.

Bénie soit la lumière qui renouvelle.

Bénie soit la foi qui transforme.

Comme tu as fait jaillir la source de Lourdes,

fais jaillir en moi la source d’une vie nouvelle.

Je reçois ta guérison.

Je reçois ta grâce.

Je reçois ta paix.

Amen. »`,
    esOracion: true,
  },
  {
    numero: 7,
    titulo: 'Les 5 eaux miraculeuses de Lourdes',
    texto: `Inspirées de miracles historiques.

Chaque eau est un rituel :

1. L’eau de la guérison physique immédiate

(pour la maladie, la douleur et l’inflammation)

2. L’eau de la réconciliation familiale

(pour ramener les enfants à la maison, pour restaurer les mariages)

3. L’eau de la protection spirituelle

(pour les maisons lourdes et les lieux pleins de conflits)

4. L’eau de la libération de la tristesse profonde

(pour la dépression, le deuil et l’angoisse)

5. L’eau de la prospérité retrouvée

(oui, Lourdes a aussi des miracles financiers)

Chacune avec sa prière spécifique.`,
  },
  {
    numero: 8,
    titulo: 'Les signes que le Code a été activé',
    texto: `10 signes réels :

- une douce chaleur dans la poitrine

- de légers frissons

- l’eau semble plus légère

- le sentiment d’être veillé avec amour

- des rêves de lumière ou d’eau

- un calme soudain

- des larmes qui viennent d’elles-mêmes

- des coïncidences paisibles

- la douleur qui s’apaise

- le sentiment d’« un nouveau départ »`,
  },
  {
    numero: 9,
    titulo: 'Le chemin de Lourdes en 9 jours',
    texto: `Une mini-neuvaine miraculeuse guidée.

Préparez-vous à marcher avec Bernadette pendant 9 jours de foi et de transformation.

JOUR 1 — La grotte du silence
Entrez dans le silence. Laissez la présence de Marie vous envelopper.

JOUR 2 — L’eau de la foi
Buvez l’eau bénie avec intention et une foi profonde.

JOUR 3 — La prière d’abandon
Remettez tout ce que vous ne pouvez porter seul.

JOUR 4 — La lumière sur les ombres
Demandez à la lumière de Marie de toucher vos peurs les plus profondes.

JOUR 5 — Le miracle dans le corps
Priez spécialement pour votre santé physique.

JOUR 6 — La réconciliation
Pardonnez. Demandez la guérison de vos relations.

JOUR 7 — La porte de l’abondance
Ouvrez votre cœur pour recevoir les bénédictions matérielles.

JOUR 8 — Le bouclier de protection
Demandez la protection spirituelle pour vous et votre famille.

JOUR 9 — Le sceau de Lourdes
Terminez dans la gratitude. Le code est désormais actif en vous.`,
  },
  {
    numero: 10,
    titulo: 'Conclusion : votre grotte est ouverte',
    texto: `« La source de Lourdes n’est pas dans un lieu.

Elle est en vous. »

Que la paix de Lourdes demeure dans votre cœur.`,
    esFinal: true,
  },
]

export default function CodigoLourdesPage() {
  const router = useRouter()
  const [vista, setVista] = useState('indice') // 'indice' ou número do capítulo
  const [capActual, setCapActual] = useState(0)
  const [concluido, setConcluido] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  function abrirCapitulo(idx) {
    setCapActual(idx)
    setVista('capitulo')
    window.scrollTo(0, 0)
  }

  function proximo() {
    if (capActual < capitulos.length - 1) {
      setCapActual(capActual + 1)
      window.scrollTo(0, 0)
    } else {
      setConcluido(true)
    }
  }

  function anterior() {
    if (capActual > 0) {
      setCapActual(capActual - 1)
      window.scrollTo(0, 0)
    } else {
      setVista('indice')
      window.scrollTo(0, 0)
    }
  }

  // Tela de conclusão
  if (concluido) {
    return (
      <div style={{ background: '#0a0f1e', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '24px' }}>💧</div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#E8C97A', marginBottom: '12px' }}>
          Livre terminé !
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.7, maxWidth: '300px', marginBottom: '32px', fontFamily: 'Lato, sans-serif' }}>
          Vous avez terminé Le Code de Lourdes. Que la paix de Lourdes demeure toujours dans votre cœur.
        </p>
        <button className="btn-gold" onClick={() => router.push('/home')} style={{ width: 'auto', padding: '14px 32px' }}>
          Retour à l’accueil
        </button>
        <BottomNav />
      </div>
    )
  }

  // Índice do livro
  if (vista === 'indice') {
    return (
      <div style={{ background: '#0a0f1e', minHeight: '100vh', paddingBottom: '90px' }}>

        {/* Header com imagem */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => router.push('/home')} style={{
            position: 'absolute', top: 16, left: 16, zIndex: 10,
            background: 'rgba(255,255,255,0.15)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            color: 'white', fontSize: '18px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>←</button>

          <div style={{
            height: '200px', background: 'linear-gradient(135deg, #0a0f1e, #1a2744)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '80px',
          }}>
          <img src="/images/codigo-lourdes.jpg" alt="Le Code de Lourdes"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none' }} />
          </div>
        </div>

        {/* Info do livro */}
        <div style={{ padding: '24px 20px 16px', textAlign: 'center' }}>
          <span style={{
            background: '#C9A84C', color: 'white',
            fontSize: '9px', fontWeight: 700, padding: '3px 12px',
            borderRadius: '4px', letterSpacing: '0.1em',
          }}>MANUSCRIT SACRÉ</span>
          <h1 style={{
            color: '#E8C97A', fontSize: '28px', fontWeight: 700,
            fontFamily: 'Cinzel, serif', marginTop: '10px', marginBottom: '6px',
          }}>
            Le Code de Lourdes
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginBottom: '20px' }}>
            Le manuscrit sacré perdu
          </p>
          <button className="btn-gold" onClick={() => abrirCapitulo(0)} style={{ marginBottom: '28px' }}>
            Lire maintenant
          </button>
        </div>

        {/* Índice */}
        <div style={{ padding: '0 16px' }}>
          <p style={{
            color: 'rgba(255,255,255,0.3)', fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.15em', marginBottom: '12px', fontFamily: 'Lato, sans-serif',
          }}>
            SOMMAIRE
          </p>
          {capitulos.map((cap, i) => (
            <div key={i} onClick={() => abrirCapitulo(i)} style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '14px', padding: '14px 16px',
              marginBottom: '8px', cursor: 'pointer',
              transition: 'background 0.2s',
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#C9A84C', fontSize: '12px', fontWeight: 700,
                fontFamily: 'Lato, sans-serif', flexShrink: 0,
              }}>{cap.numero}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 600, fontFamily: 'Lato, sans-serif', lineHeight: 1.3 }}>
                  {cap.titulo}
                </div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '18px' }}>▷</span>
            </div>
          ))}
        </div>

        <BottomNav />
      </div>
    )
  }

  // Capítulo atual
  const cap = capitulos[capActual]
  return (
    <div style={{ background: '#0a0f1e', minHeight: '100vh' }}>

      {/* Barra do topo */}
      <div style={{
        background: '#0d1526', padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <button onClick={anterior} style={{
          background: 'none', border: 'none', color: 'white',
          fontSize: '20px', cursor: 'pointer', padding: '4px',
        }}>←</button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
            LE CODE DE LOURDES
          </div>
          <div style={{ color: 'white', fontSize: '12px', fontWeight: 600, fontFamily: 'Lato, sans-serif', marginTop: '2px' }}>
            {cap.titulo.length > 28 ? cap.titulo.substring(0, 28) + '...' : cap.titulo}
          </div>
        </div>
        <div style={{ width: '28px' }} />
      </div>

      {/* Conteúdo */}
      <div style={{ padding: '28px 24px 100px' }}>

        {/* Título */}
        <h2 style={{
          color: '#E8C97A', fontSize: '22px', fontWeight: 700,
          fontFamily: 'Cinzel, serif', marginBottom: '20px', lineHeight: 1.3,
        }}>
          {cap.titulo}
        </h2>

        {cap.subtitulo && (
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontStyle: 'italic', marginBottom: '16px', fontFamily: 'Lato, sans-serif' }}>
            {cap.subtitulo}
          </p>
        )}

        {/* Separador */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }} />

        {/* Texto */}
        <div style={{ marginBottom: '32px' }}>
          {cap.texto.split('\n\n').map((paragrafo, i) => (
            paragrafo.trim() === '' ? null : (
              <p key={i} style={{
                color: cap.esOracion ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.75)',
                fontSize: cap.esOracion ? '16px' : '15px',
                lineHeight: cap.esOracion ? 2 : 1.8,
                fontFamily: cap.esOracion ? 'Georgia, serif' : 'Lato, sans-serif',
                fontStyle: cap.esOracion ? 'italic' : 'normal',
                marginBottom: '12px',
                textAlign: cap.esOracion ? 'center' : 'left',
              }}>
                {paragrafo}
              </p>
            )
          ))}
        </div>

        {/* Separador */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '24px' }} />

        {/* Navegação inferior */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {capActual > 0 ? (
            <button onClick={anterior} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0,
            }}>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif' }}>‹ RETOUR</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif', maxWidth: '140px' }}>
                {capitulos[capActual - 1].titulo.substring(0, 20)}...
              </div>
            </button>
          ) : (
            <button onClick={() => setVista('indice')} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0,
            }}>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif' }}>‹ RETOUR</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif' }}>Sommaire</div>
            </button>
          )}

          {!cap.esFinal ? (
            <button onClick={proximo} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right', padding: 0,
            }}>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif' }}>CHAPITRE SUIVANT ›</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif', maxWidth: '140px', textAlign: 'right' }}>
                {capitulos[capActual + 1]?.titulo.substring(0, 20)}...
              </div>
            </button>
          ) : (
            <button className="btn-gold" onClick={proximo} style={{ width: 'auto', padding: '12px 24px', fontSize: '14px' }}>
              Terminer le livre
            </button>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
