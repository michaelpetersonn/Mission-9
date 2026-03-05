import Card from './card'
import teamData from './CollegeBasketballTeams.json'

type Team = {
  tid: number
  school: string
  name: string
  city: string
  state: string
}

type TeamData = {
  teams: Team[]
}

function TeamList() {
  const { teams } = teamData as TeamData

  return (
    <section className="team-list">
      {teams.map((team) => (
        <Card
          key={team.tid}
          school={team.school}
          mascot={team.name}
          city={team.city.trim()}
          state={team.state}
        />
      ))}
    </section>
  )
}

export default TeamList
