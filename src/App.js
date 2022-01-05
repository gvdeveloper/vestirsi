import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route} from "react-router-dom"
/* import CartContext from './context/cartContext.js';
import CustomContext from './context/customContext'; */
/* import { useState } from 'react/cjs/react.development'; */


function App() {
/* const [state, setState] = useState("Contexto") */

  return (
    <BrowserRouter>
    <div>
      
      <NavBar />
      <Routes>     
      {/* <CustomContext value={[state]}> */}
      <Route exact path="/" element={<ItemListContainer></ItemListContainer>}></Route>
      {/* </CustomContext> */}
      <Route exact path="/category/:id" element={<ItemListContainer></ItemListContainer>}></Route>
      <Route exact path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      
      </Routes>
      
    </div>
    </BrowserRouter>
    );
}

export default App;
