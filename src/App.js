import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer msg="Mensaje de Prueba" />
    </div>
    
    );
}

export default App;
