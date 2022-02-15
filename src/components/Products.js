import React, {useContext} from 'react';
import IMG from "../../images/img01.jpg";
import {DataContext} from "./contents/Datas.js";

export const ProductsList = () => {
  
  const value = useContext(DataContext)
  const [productos] = value.productos
  
  console.log(productos)
  
  
  return (
    <>
    <h1 className="title">Productos</h1>
  <div className="productos">
    <div className="producto">
    <a href="#">
    <div className="producto__img">
    <img src={IMG} alt=""/>
    </div>
</a>
    <div className="producto__footer">
      <h1> Title </h1>
      <p> Categoria </p>
      <p  className="price">$300</p>
   </div> 
    <div className="buttom">
      <button className="btn">
        Añadir al Carrito
        </button>
      <div>
    <a href="#" className="btn"> Vista </a>
</div>
</div>
</div>
</div>
    </>
  );
};
