import React from "react";
import axios from "axios";
import { useState } from "react";
import { object, string } from "yup";

export default function Pizza(props) {
  const [formData, setFormData] = useState({});
  const [hataMesaji, setHataMesaji] = useState("");
  const [pizzaAdet, setPizzaAdet] = useState(1);
  const [pizzaFiyati, setPizzaFiyati] = useState(110);
  const [malzemeFiyati, setMalzemeFiyati] = useState(0);

  const boyutFiyat = {
    small: 110,
    medium: 150,
    large: 190,
  };

  let userSchema = object({
    boyut: string().required("Boyut seçmelisiniz"),
    hamur: string().required("Hamur tipi seçmelisiniz"),
  });

  function changeHandler(e) {
    // Değişen inputun değerini alıyoruz
    // value, type ve checked input html elementlerinin özellikleri
    let { value, type, checked } = e.target;

    if (type === "checkbox") {
      // Checkbox ise malzeme seçildiği veya seçilmediği durumuna göre fiyatı güncelliyoruz
      value = checked;
      if (checked) {
        setMalzemeFiyati(malzemeFiyati + 5);
      } else {
        setMalzemeFiyati(malzemeFiyati - 5);
      }
    }

    if (type === "radio") {
      // Pizza boyutu seçildiğinde fiyatı güncelliyoruz
      setPizzaFiyati(boyutFiyat[value]);
    }

    // Form verilerini güncelliyoruz
    const newFormData = {
      ...formData,
      [e.target.name]: value,
    };
    setFormData(newFormData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
      // Form verilerini validate ediyoruz. userSchema yapısı ile kontrol ediyoruz
      await userSchema.validate(formData);
    } catch (err) {
      // Hata varsa hata mesajını güncelliyoruz
      setHataMesaji(err.message);
      return;
    }

    // Hata yoksa hata mesajını temizliyoruz
    setHataMesaji("");

    // Form verilerini POST ile gönderiyoruz
    axios
      .post("https://reqres.in/api/orders", formData)
      .then(function(response) {
        // Sipariş başarılı bir şekilde oluşturulduğunda siparişleri güncelliyoruz
        props.addSiparis(response.data);
        window.location.href = "/success";
      })
      .catch(function(error) {
        // Sipariş oluşturulurken hata oluştuğunda hata mesajını kullanıcıya gösteriyoruz
        if (error.message === "Network Error") {
          alert("İnternet bağlantınızı kontrol edin");
        }
      });
  }

  return (
    <div className="pizzaDiv">
      <div className="header">
        <img src="./logo.svg"></img>
      </div>
      <div className="breadcrumbs">
        <div>
          <a href="/">Anasayfa</a>
          <a href="/pizza">Sipariş</a>
        </div>
      </div>

      <div className="content content-height">
        <h1>Klasik Pizza</h1>
        <div className="top-fiyat">
          <p>{pizzaAdet * (pizzaFiyati + malzemeFiyati)} ₺</p>
        </div>
        <p>
          Klasik pizza, dünya mutfağının en bilinen yemeklerinden biridir. İnce
          hamuru, sosu ve peynirleriyle her lokması ayrı bir lezzet sunar.
          Sitemizdeki klasik pizza seçeneği, özellikle Amerikan stili pizzalara
          benzeyen, bol peynirli ve isteğe bağlı olarak pepperoni, füme ve yeşil
          biber gibi malzemelerle hazırlanır.
        </p>
        <p style={{ color: "#e84a5f" }}>{hataMesaji}</p>
        <form id="pizza-form" onSubmit={handleSubmit}>
          <div className="row first-row">
            <div className="column boyutSec">
              <h2>Boyut Seçin</h2>
              <div>
                <input
                  type="radio"
                  id="small"
                  name="boyut"
                  value="small"
                  onChange={changeHandler}
                />
                <label htmlFor="small">Küçük</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="medium"
                  name="boyut"
                  value="medium"
                  onChange={changeHandler}
                />
                <label htmlFor="medium">Orta</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="large"
                  name="boyut"
                  value="large"
                  onChange={changeHandler}
                />
                <label htmlFor="large">Büyük</label>
              </div>
            </div>
            <div className="column">
              <h2>Hamur Seçin</h2>
              <select
                id="pizza"
                name="hamur"
                defaultValue="none"
                onChange={changeHandler}
              >
                <option value="none" disabled>
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
              </select>
            </div>
          </div>

          <h2>Ekstra Malzemeler</h2>
          <div className="row ikinci-row">
            <div className="column">
              <div>
                <input
                  type="checkbox"
                  id="topping-pepperoni"
                  name="malzeme1"
                  value="pepperoni"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-pepperoni">Pepperoni</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="topping-sausage"
                  name="malzeme2"
                  value="sausage"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-sausage">Sosis</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="topping-dana-fume"
                  name="malzeme3"
                  value="dana-fume"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-dana-fume">Dana Füme</label>
              </div>
            </div>
            <div className="column">
              <div>
                <input
                  type="checkbox"
                  id="topping-mushrooms"
                  name="malzeme4"
                  value="mushrooms"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-mushrooms">Mantar</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="topping-onions"
                  name="malzeme5"
                  value="onions"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-onions">Soğan</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="topping-green-peppers"
                  name="malzeme6"
                  value="green-peppers"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-green-peppers">Yeşil Biber</label>
              </div>
            </div>
            <div className="column">
              <div>
                <input
                  type="checkbox"
                  id="topping-black-olives"
                  name="malzeme7"
                  value="black-olives"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-black-olives">Zeytin</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="topping-pineapple"
                  name="malzeme8"
                  value="pineapple"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-pineapple">Ananas</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="topping-spinach"
                  name="malzeme9"
                  value="spinach"
                  onChange={changeHandler}
                />
                <label htmlFor="topping-spinach">Ispanak</label>
              </div>
            </div>
          </div>

          <label htmlFor="special-text" className="siparisNotu">
            Sipariş Notu
          </label>
          <textarea
            id="special-text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            name="özel"
            onChange={changeHandler}
          />

          <hr />

          <div className="row ucuncu-row">
            <div className="column">
              <div>
                {/* Pizza adetini secmemi saglayan bir button grubu */}
                <button
                  id="pizza-minus"
                  type="button"
                  onClick={() => {
                    if (pizzaAdet > 1) {
                      setPizzaAdet(pizzaAdet - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  id="pizza-quantity"
                  type="number"
                  name="pizzaAdet"
                  value={pizzaAdet}
                  onChange={changeHandler}
                />
                <button
                  id="pizza-plus"
                  type="button"
                  onClick={() => {
                    setPizzaAdet(pizzaAdet + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="column bottom-column">
              <div>
                <h1>Sipariş Toplamı</h1>
                <div className="siparis-toplam">
                  <div className="fiyat-bottom">
                    <p>Ek Malzemeler</p>
                    <p>{malzemeFiyati} ₺</p>
                  </div>
                  <div className="fiyat-bottom">
                    <p>Toplam</p>
                    <p>{pizzaAdet * (pizzaFiyati + malzemeFiyati)} ₺</p>
                  </div>
                </div>
                <button id="order-button" type="submit">
                  Sipariş Ver
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
