import React from 'react';
import { Switch, Router } from "react-router-dom";
import { Inicio } from "./Index.js";
import { ProductsList } from "./Products.js";

export const Paginas = () => {
  return (
    <section>
    <Switch>
    <Route path="/" exact component={Inicio} />
    <Route path="/productos"exact component={ProductsList}/>
      </Switch>
    </section>
  )
}
