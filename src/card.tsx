type CardProps = {
  school: string
  mascot: string
  city: string
  state: string
}

function Card({ school, mascot, city, state }: CardProps) {
  return (
    <article className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {mascot || 'Unknown'}</p>
      <p>Location: {city}, {state}</p>
    </article>
  )
}

export default Card
