import React from "react";

export default function Anasayfa() {
  return (
    <div className="anasayfa">
      <div className="topDiv">
        <div className="description">
          <img src="./logo.svg"></img>
          <p>fırsatı kaçırma</p>
          <p className="slogan">KOD ACIKTIRIR,</p>
          <p className="slogan">PİZZA DOYURUR</p>
          <div className="mt">
            <a
              className="order-button"
              type="button"
              href="/pizza"
            >
              ACIKTIM
            </a>
          </div>
        </div>
      </div>

      <nav className="food-button">
        <button className="food">Pizza</button>
        <button className="food">Burger</button>
        <button className="food">Patates</button>
        <button className="food">İçecekler</button>
        <button className="food">Tatlılar</button>
      </nav>

      <div>
        <h2 className="menuAdi">Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div className="menu">
          <div className="menu-item">
            <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/food-1.png?raw=true" />
            <h3>Klasik Pizza</h3>
            <p>
              Klasik pizza, dünya mutfağının en bilinen yemeklerinden biridir.
              İnce hamuru, sosu ve peynirleriyle her lokması ayrı bir lezzet
              sunar. Sitemizdeki klasik pizza seçeneği, özellikle Amerikan stili
              pizzalara benzeyen, bol peynirli ve isteğe bağlı olarak pepperoni,
              füme ve yeşil biber gibi malzemelerle hazırlanır.
            </p>
            <ul className="fiyat">
              <li>110₺</li>
            </ul>
          </div>
          <div className="menu-item">
            <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/food-2.png?raw=true" />
            <h3>Vejeteryan Pizza</h3>
            <p>
              Vejeteryan pizza, et yemeyenlerin favori seçeneklerinden biridir.
              Sitemizdeki vejeteryan pizza seçeneği, taze sebzelerle hazırlanır
              ve zengin bir lezzet profili sunar. İçinde ıspanak, domates,
              soğan, biber, dilimlenmiş zeytin ve farklı peynirler kullanılır.
              Vejeteryan pizza, sağlıklı beslenmeyi sevenlerin vazgeçilmez
              seçeneğidir.
            </p>
            <ul className="fiyat">
              <li>60₺</li>
            </ul>
          </div>
          <div className="menu-item">
            <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/food-3.png?raw=true" />
            <h3>Cheeseburger</h3>
            <p>
              Cheeseburger tutkunları, artık evinizin rahatlığında lezzetli bir
              cheeseburger sipariş edebilirsiniz! Sitemizde, en taze ve kaliteli
              malzemelerle hazırlanmış çeşitli cheeseburger seçenekleri
              sunuyoruz. Her bir cheeseburger, özenle hazırlanmış bir hamburger
              köftesi, lezzetli cheddar peyniri, çıtır turşular, taze domates,
              çıtır marul ve özel soslarla hazırlanıyor.
            </p>
            <ul className="fiyat">
              <li>90₺</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
