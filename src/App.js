import React from "react";
import Navbarra from './components/NavBar';
import {Header} from './components/Header';
import 'boxicons';
import {BrowserRouter as Route} from "react-router-dom";
import {Paginas} from "./components/Paginas.js";
import {DaraProvider} from "./components/Datas.js";


function App() {
  return (
    <DataProvider>
    <div className="App">
    <Router>
    <Header/>
    <Navbarra/>
     <h1>Mi primer Tienda</h1>
      <Paginas/>
    </Router>
    </div>
    </DataProvider>
  );
}

export default App;
