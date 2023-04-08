import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Anasayfa from "./Anasayfa";
import Pizza from "./Pizza";

const App = () => {
  const [siparisler, setSiparisler] = useState([]);

  const handleSiparisEkle = (siparis) => {
    setSiparisler([...siparisler, siparis]);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/pizza">Sipariş</a>
          </li>
        </ul>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/pizza">
            <Pizza addSiparis={handleSiparisEkle} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
