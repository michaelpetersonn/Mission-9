import './App.css'
import TeamList from './TeamList'
import Heading from './heading'


// This is how we connect our heading component with our Team List
function App() {
  return (
    <main className="app-shell">
      <Heading />
      <TeamList />
    </main>
  )
}

export default App
