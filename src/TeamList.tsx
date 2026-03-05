import Card from './card'
import teamData from './CollegeBasketballTeams.json'
// This code loops through the team list and we are able to see the specific information for each school 
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
