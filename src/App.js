import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Anasayfa from "./Anasayfa";
import Pizza from "./Pizza";
import Success from "./Success";

const App = () => {
  const [siparisler, setSiparisler] = useState([]);

  const handleSiparisEkle = (siparis) => {
    setSiparisler([...siparisler, siparis]);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/pizza">
            <Pizza addSiparis={handleSiparisEkle} />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
        <footer>
          <div className="row">
            
            <div className="column">
              <img className="footer-logo" src="./logo.svg"></img>
              <div className="adres">
                <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/icon-1.png?raw=true"></img>
                <p>341 Londonderry Road, İstanbul/Türkiye</p>
              </div>
              <div className="mail">
                <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/icon-2.png?raw=true"></img>
                <p>aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="iletisim">
                <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/icon-3.png?raw=true"></img>
                <p>+90 216 123 45 67</p>
              </div>
            </div>

            <div className="column">
              <img
                className="footer-photo"
                src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/kart-2.png?raw=true"
              ></img>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
};
export default App;
