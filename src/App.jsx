
import ItemListContainer from "./components/pages/ItemListContainer"
import Navbar from "./components/layout/Navbar"
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos!"} />
    </div>
  )
}

export default App