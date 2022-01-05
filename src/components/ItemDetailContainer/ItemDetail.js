import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
function ItemDetail({ getDetail,stock }) {
  return (
    <div className="cardContainerDetailPrincipal">
      <div className="cardContainerDetail">
        {getDetail.map((...detail) => {
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
              <ItemCount
                stock={stock}
                onAdd={(cantidad) =>
                  console.log(`Se agregaron ${cantidad} productos`)
                }
              />
            </div>
          );
        })}
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
