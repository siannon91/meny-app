import Dish from './components/Dish'

function App() {
  return (
  <div>
    <h1>RestaurantMeny</h1>
    <Dish
      tittel="Spaghetti Bolognese"
      pris="159 kr"
      ingredienser="Spaghetti, kjøttsaus, parmesan"
      kategori="Hovedrett"
    />
  </div>
  )
}

export default App