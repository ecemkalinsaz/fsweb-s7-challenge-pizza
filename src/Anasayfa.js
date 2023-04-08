import React from "react";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";

export default function Anasayfa() {
  return (
    <div>
      <div className="topDiv">
        <div className="mainPhoto">
          <img src="https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        </div>
        <div className="description">
          <h1>Teknolojik Yemekler</h1>
          <p>KOD ACIKTIRIR, PİZZA DOYURUR</p>
          <Button
            variant="contained"
            href="/pizza"
            id="order-pizza"
            color="error"
          >
            Sipariş Ver
          </Button>
          <Divider sx={{ m: 2 }} light />
          <h2>Menü</h2>
          <div className="menu">
            <div className="menu-item">
              <img src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" />
              <h3>Klasik Pizza</h3>
              <p>
                Klasik pizza, dünya mutfağının en bilinen yemeklerinden biridir.
                İnce hamuru, sosu ve peynirleriyle her lokması ayrı bir lezzet
                sunar. Sitemizdeki klasik pizza seçeneği, özellikle Amerikan
                stili pizzalara benzeyen, bol peynirli ve isteğe bağlı olarak
                pepperoni, füme ve yeşil biber gibi malzemelerle hazırlanır.
              </p>
              <ul className="fiyat">
                <li>Küçük Boy: 110₺</li>
                <li>Orta Boy: 150₺</li>
                <li>Büyük Boy: 190₺</li>
              </ul>
            </div>
            <div className="menu-item">
              <img src="https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
              <h3>Tavuklu Pizza</h3>
              <p>
                Tavuklu pizza, tavuk parçaları, sebzeler ve baharatlarla dolu
                harika bir tat sunar. Sitemizdeki tavuklu pizzada, tavuk
                parçaları, mısır, soğan, yeşil biber ve zeytin gibi malzemeler
                kullanılır. Bu malzemeler, ince hamurun üzerinde lezzetli bir
                sos ve mozzarella peynirleri ile birleşerek, ağızda dağılan bir
                lezzet sunar.
              </p>
              <ul className="fiyat">
                <li>Küçük Boy: 90₺</li>
                <li>Orta Boy: 130₺</li>
                <li>Büyük Boy: 170₺</li>
              </ul>
            </div>
            <div className="menu-item">
              <img src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80" />
              <h3>Vejeteryan Pizza</h3>
              <p>
                Vejeteryan pizza, et yemeyenlerin favori seçeneklerinden
                biridir. Sitemizdeki vejeteryan pizza seçeneği, taze sebzelerle
                hazırlanır ve zengin bir lezzet profili sunar. İçinde ıspanak,
                domates, soğan, biber, dilimlenmiş zeytin ve farklı peynirler
                kullanılır. Vejeteryan pizza, sağlıklı beslenmeyi sevenlerin
                vazgeçilmez seçeneğidir.{" "}
              </p>
              <ul className="fiyat">
                <li>Küçük Boy: 60₺</li>
                <li>Orta Boy: 90₺</li>
                <li>Büyük Boy: 120₺</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
