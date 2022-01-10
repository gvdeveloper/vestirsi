import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route} from "react-router-dom"
/* import cartContext from './context/cartContext'; */
/* import CustomContext from './context/customContext';*/

/* import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCV2KZzn81wuNZPpxaZD2NgtCU2f_MLF4A",
  authDomain: "vestirsi-coderhouse.firebaseapp.com",
  projectId: "vestirsi-coderhouse",
  storageBucket: "vestirsi-coderhouse.appspot.com",
  messagingSenderId: "398009008637",
  appId: "1:398009008637:web:2997059ba923c11d5e1994"
};

const app = initializeApp(firebaseConfig); */

function App() { 
  
  return (
   
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>     
      <Route exact path="/" element={<ItemListContainer></ItemListContainer>}></Route>
      <Route exact path="/category/:id" element={<ItemListContainer></ItemListContainer>}></Route>
      <Route exact path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>  
      </Routes>   
    </div>
    </BrowserRouter>
    
    );
}

export default App;
