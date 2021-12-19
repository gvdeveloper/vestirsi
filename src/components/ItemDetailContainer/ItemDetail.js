import React from "react";
import "./ItemDetail.css"

function ItemDetail({ getDetail }) {
  return (
    <div className="cardContainerDetailPrincipal">
      <h2 className="titular">DETALLES</h2>
      <div className="cardContainerDetail">
        {getDetail.map((detail) => {
          return (
            <div key={detail.detalle} className="cardInfo">
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
}

export default ItemDetail;
