import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./component/Header";
import Main from './component/main/Main';
import Accesorios from './component/accesorios/Accesorios';
import Partes from "./component/partes/partes";
import Quienes from "./component/somos/Quienes";
import Whatsapp from "./component/Whatsapp";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Route exact path='/Home' component={Main} />
          <Route exact path='/Motopartes' component={Partes} />
          <Route exact path='/Accesorios' component={Accesorios} />
          <Route exact path='/Quienesomos' component={Quienes} />
        </div>
        <Whatsapp/>
      </Router>
    </>
  );
}

export default App
