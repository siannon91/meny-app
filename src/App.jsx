import { meny } from './data/meny'
import Menu from './components/Menu'

function App() {
  return (
  <div>
    <h1>Restaurant Meny</h1>
    <Menu meny={meny} />
  </div>
  )
}

export default App