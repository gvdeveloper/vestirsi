import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
/* import {BrowserRouter, Routes, Route} from "react-router-dom" */
/* const Home =()=>
  <div>
    <ItemListContainer msg="Mensaje de Prueba" />
  </div>

const Prueba1 =()=> <div>Prueba1</div>
const Prueba2 =()=> <div>Prueba2</div> */

function App() {
  return (
    <div>
      <NavBar />      
      <ItemListContainer />
    </div>
    );
}




/* function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar /> 
      <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/Prueba1" element={<ItemListContainer></ItemListContainer>}></Route>
      <Route exact path="/category/:id" element={<Prueba2></Prueba2>}></Route>
      <Route exact path="/item/:id" element={<Prueba2></Prueba2>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    );
} */

export default App;
