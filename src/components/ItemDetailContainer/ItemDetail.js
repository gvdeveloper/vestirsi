import React, { useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
/* import cartContext from "../../context/cartContext"; */
function ItemDetail({ getDetail,stock }) {

  /* const {title, price, detalle, image,} = getDetail; */
  
 /*  const valueContext = useContext(cartContext); */
 /*  const event = new CustomEvent('clickDetalle', {detail:{bubbles:true}})
  const handleClick = () =>{
    window.dispatchEvent(event)
  } */
  return (
    <div className="cardContainerDetailPrincipal">
      <div className="cardContainerDetail">
        {/* {getDetail.map((...detail) => {
          return ( */}
            <div key={getDetail.id} className="cardInfo">
              <h2 className="titular">DETALLES</h2>
              <div className="imgContain">
                <img
                  className="imgItem"
                  src={getDetail.image}
                  alt={getDetail.title}
                ></img>
              </div>
              <h2>{getDetail.title}</h2>
              <p>${getDetail.price}</p>
              <p>Detalle: {getDetail.detalle}</p>
              <ItemCount
                stock={stock}
                /* onClick={handleClick} */
                onAdd={(cantidad) =>
                  console.log(`Se agregaron ${cantidad} productos`)
                }
              />
             {/*  {valueContext.map((value)=> <p>{value}</p>)} */}
            </div>
          );
        {/* })} */}
      </div>
    </div>
  );
}

export default ItemDetail;

/* function ItemDetail({ getDetail }) {
  return (
    <div className="cardContainerDetailPrincipal">
      <div className="cardContainerDetail">
        {getDetail.map((detail) => {
          return (
            <div key={detail.id} className="cardInfo">
              <h2 className="titular">DETALLES</h2>
              <div className="imgContain">
                <img
                  className="imgItem"
                  src={detail.image}
                  alt={detail.title}
                ></img>
              </div>
              <h2>{detail.title}</h2>
              <p>${detail.price}</p>
              <p>Detalle: {detail.detalle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
} */
