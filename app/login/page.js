'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function handleLogin(e) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Salva o email no localStorage como "sessão simples"
    localStorage.setItem('oracion_user', email)
    setTimeout(() => router.push('/home'), 800)
  }

  return (
    <div className="pd-login">
      {/* Fundo: imagem dos arcanjos, escurecida em dourado */}
      <div className="pd-bg" aria-hidden="true" />
      <div className="pd-bg-shade" aria-hidden="true" />

      {/* Arco dourado emoldurando a tela */}
      <div className="pd-arch" aria-hidden="true" />

      {/* Halo atrás do cartão */}
      <div className="pd-halo" aria-hidden="true" />

      {/* Estrelas */}
      <div className="pd-stars" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            style={{
              top: `${(i * 37) % 92 + 4}%`,
              left: `${(i * 53) % 90 + 5}%`,
              animationDelay: `${(i % 6) * 0.7}s`,
            }}
          />
        ))}
      </div>

      <main className="pd-card">
        <div className="pd-dove" aria-hidden="true">🕊️</div>

        <p className="pd-eyebrow">DÉCOUVREZ</p>

        <h1 className="pd-title">
          Prière<br />divine
        </h1>

        <p className="pd-quote">
          « Venez à moi, vous tous qui êtes fatigués, et je vous donnerai du repos. »
        </p>
        <p className="pd-quote-ref">MATTHIEU 11,28</p>

        <form onSubmit={handleLogin} className="pd-form">
          <label htmlFor="pd-email" className="pd-label">ADRESSE E-MAIL</label>
          <input
            id="pd-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vous@email.com"
            autoComplete="email"
            inputMode="email"
            required
            className="pd-input"
          />
          <button type="submit" disabled={loading} className="pd-button">
            {loading ? 'Connexion...' : 'Commencer ma prière'}
          </button>
        </form>

        <p className="pd-footer">Grâce et guérison au quotidien</p>
      </main>

      <p className="pd-copy">Application Prière divine © 2025</p>

      <style>{`
        .pd-login {
          position: fixed;
          inset: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 16px 24px;
          background: #07060f;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: Lato, sans-serif;
        }

        .pd-bg {
          position: fixed;
          inset: 0;
          background: url(/images/angel-hero.jpg) center 20% / cover no-repeat;
          filter: saturate(0.85) brightness(0.55);
          transform: scale(1.05);
        }
        .pd-bg-shade {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 50% 40%, rgba(15,12,36,0.35) 0%, rgba(7,6,15,0.82) 70%, #07060f 100%),
            linear-gradient(180deg, rgba(7,6,15,0.55) 0%, rgba(7,6,15,0.25) 35%, rgba(7,6,15,0.9) 100%);
        }

        .pd-arch {
          position: fixed;
          top: 24px; bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: min(92vw, 1100px);
          border: 1.5px solid rgba(201,168,76,0.45);
          border-bottom: none;
          border-radius: 50% 50% 0 0 / 34% 34% 0 0;
          box-shadow: 0 0 40px rgba(201,168,76,0.12), inset 0 0 40px rgba(201,168,76,0.08);
          pointer-events: none;
        }

        .pd-halo {
          position: fixed;
          top: 50%; left: 50%;
          width: 560px; height: 560px;
          transform: translate(-50%, -55%);
          background: radial-gradient(circle, rgba(232,201,122,0.22) 0%, rgba(201,168,76,0.08) 40%, transparent 70%);
          pointer-events: none;
        }

        .pd-stars span {
          position: fixed;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #E8C97A;
          box-shadow: 0 0 6px #E8C97A;
          opacity: 0.2;
          animation: pd-twinkle 4s ease-in-out infinite;
        }
        @keyframes pd-twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.8; }
        }

        .pd-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: auto 0;
          padding: 44px 32px 32px;
          text-align: center;
          background: linear-gradient(180deg, rgba(20,17,30,0.88) 0%, rgba(12,10,20,0.94) 100%);
          border: 1px solid rgba(201,168,76,0.28);
          border-radius: 24px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: pd-rise 0.8s ease-out both;
        }
        @keyframes pd-rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pd-dove {
          position: absolute;
          top: -26px; left: 50%;
          transform: translateX(-50%);
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          background: #0f0c24;
          border: 1px solid rgba(201,168,76,0.45);
          border-radius: 50%;
          box-shadow: 0 0 24px rgba(201,168,76,0.3);
        }

        .pd-eyebrow {
          color: rgba(232,201,122,0.7);
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.45em;
          margin-bottom: 14px;
          padding-left: 0.45em;
        }

        .pd-title {
          font-family: Cinzel, serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 1.12;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: linear-gradient(180deg, #F6E3A6 0%, #E8C97A 45%, #C9A84C 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 30px rgba(232,201,122,0.25);
          margin-bottom: 18px;
        }

        .pd-quote {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 15px;
          line-height: 1.55;
          color: rgba(255,255,255,0.72);
          max-width: 320px;
          margin: 0 auto 6px;
        }
        .pd-quote-ref {
          font-size: 10px;
          letter-spacing: 0.25em;
          color: rgba(201,168,76,0.6);
          margin-bottom: 30px;
        }

        .pd-form { text-align: left; }

        .pd-label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(232,201,122,0.75);
          margin-bottom: 8px;
        }

        .pd-input {
          width: 100%;
          padding: 16px 18px;
          font-size: 16px;
          font-family: Lato, sans-serif;
          color: #fff;
          background: rgba(0,0,0,0.45);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 14px;
          outline: none;
          margin-bottom: 18px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .pd-input::placeholder { color: rgba(255,255,255,0.3); }
        .pd-input:focus {
          border-color: rgba(232,201,122,0.7);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.15);
        }

        .pd-button {
          width: 100%;
          padding: 17px 20px;
          font-family: Lato, sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1a1205;
          background: linear-gradient(180deg, #F2D98C 0%, #E8C97A 40%, #C9A84C 100%);
          border: none;
          border-radius: 14px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(201,168,76,0.3), inset 0 1px 0 rgba(255,255,255,0.4);
          transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
        }
        .pd-button:hover { box-shadow: 0 10px 30px rgba(201,168,76,0.45), inset 0 1px 0 rgba(255,255,255,0.4); }
        .pd-button:active { transform: scale(0.98); }
        .pd-button:disabled { opacity: 0.7; cursor: default; }

        .pd-footer {
          margin-top: 26px;
          font-size: 13px;
          color: rgba(255,255,255,0.45);
        }

        .pd-copy {
          position: relative;
          margin-top: 22px;
          font-size: 11px;
          color: rgba(255,255,255,0.28);
        }

        @media (max-width: 480px) {
          .pd-login { padding: 230px 16px 18px; justify-content: flex-end; }
          .pd-bg { background-position: center top; background-size: auto 62vh; filter: saturate(0.9) brightness(0.8); transform: none; }
          .pd-bg-shade {
            background:
              linear-gradient(180deg, rgba(7,6,15,0.15) 0%, rgba(7,6,15,0.1) 22%, rgba(7,6,15,0.85) 50%, #07060f 62%),
              radial-gradient(ellipse 120% 60% at 50% 20%, transparent 40%, rgba(7,6,15,0.7) 100%);
          }
          .pd-arch { top: 12px; width: calc(100vw - 20px); border-radius: 50% 50% 0 0 / 22% 22% 0 0; }
          .pd-halo { width: 380px; height: 380px; top: 22%; }
          .pd-card { margin: 0; padding: 38px 22px 24px; border-radius: 22px; }
          .pd-title { font-size: 30px; margin-bottom: 14px; }
          .pd-quote { font-size: 14px; }
          .pd-quote-ref { margin-bottom: 22px; }
          .pd-footer { margin-top: 20px; }
          .pd-copy { margin-top: 14px; }
        }
      `}</style>
    </div>
  )
}
