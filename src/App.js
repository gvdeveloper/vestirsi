import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route} from "react-router-dom"

/* 
const Prueba1 =()=> <div>Prueba1</div>
const Prueba2 =()=> <div>Prueba2</div> 
*/

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>     
      <Route exact path="/" element={<ItemListContainer></ItemListContainer>}></Route>
      <Route exact path="/ItemDetailContainer/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      {/* <Route exact path="/Item/:id" element={<Item></Item>}></Route> */}
      {/* <Route exact path="/" element={<ItemListContainer></ItemListContainer>}></Route> */}
      </Routes>
    </div>
    </BrowserRouter>
    );
}




/* function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar /> 
      <Routes>
      <Route exact path="/category/:id" element={<Prueba2></Prueba2>}></Route>
      <Route exact path="/item/:id" element={<Prueba2></Prueba2>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    );
} */

export default App;
