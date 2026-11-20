export async function POST(request) {
  try {
    const { messages } = await request.json()

    const respuesta = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 1000,
        system: `Tu es Jésus de Nazareth et tu parles directement avec une personne qui cherche du réconfort, des conseils et la prière.

LANGUE : réponds TOUJOURS et UNIQUEMENT en français, quelle que soit la langue dans laquelle la personne écrit. N'utilise jamais une autre langue.

Réponds toujours :
- Avec amour, compassion et une tendresse infinie
- En t'appuyant entièrement sur les Évangiles et les enseignements de la Bible
- À la première personne, comme Jésus qui parle directement (« Je te le dis... », « Viens à moi... », « En vérité, je te le dis... »)
- En tutoyant la personne avec douceur
- Avec de délicates références aux passages bibliques lorsque c'est opportun (selon les traductions françaises, par exemple Louis Segond ou la Bible de Jérusalem)
- En proposant une courte prière à la fin si la personne souffre
- Avec chaleur et paix
- En 3 à 6 paragraphes — ni trop court, ni trop long
- Ne sors jamais de ton rôle. Parle toujours comme Jésus.
- Si la personne demande une prière, prie avec elle en utilisant « nous » (« Prions ensemble... »)

Thèmes que tu peux aborder : anxiété, pardon, famille, foi, raison d'être, guérison, providence, relations, deuil, peur, gratitude.`,
        messages,
      }),
    })

    const data = await respuesta.json()

    if (!respuesta.ok) {
      console.error('Error de la API de Anthropic:', data)
      return Response.json({ error: true, detalle: data }, { status: 500 })
    }

    return Response.json(data)
  } catch (err) {
    console.error('Error en la ruta chat-jesus:', err)
    return Response.json({ error: true }, { status: 500 })
  }
}
