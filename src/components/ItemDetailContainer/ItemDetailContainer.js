import React, {useState,useEffect} from "react";
import "../../styles.css";
import mockItemDetail from "./MockItemDetail"
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";


function ItemDetailContainer() {

  const [getDetail, setState] = useState([null]);
  const navigate = useNavigate();
  const {id: idItem} = useParams();

  useEffect(() => getItemAsyncAwait(), []);

  const arrayItemDetail = ()=> new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockItemDetail);
      }, 2000);
    }); 

    const getItemAsyncAwait = async () => {
      try {
        const product = await arrayItemDetail();
        handleFilterData(product);
      } catch (error) {
        console.log('ERROR', '🤦‍♂️ Algo malio sal', error);
      }
    };

    const handleFilterData = data => {
      if (idItem && data) {
        const _item = data.filter(item => item.id === idItem);
        if (_item.length === 1) {
          setState(_item[0]);
        } else {
          navigate('/');
        }
      } else {
        navigate('/');
      }
    };

    /* useEffect(() => {
      arrayItemDetail
      .then(response => setState(response))
      .catch(error => console.log(error))
    }, []); */

   return(
    <section className="contenedor">
    <div>
      <ItemDetail getDetail={getDetail}/> 
    </div>
    </section>
  )
  
  
}

export default ItemDetailContainer;