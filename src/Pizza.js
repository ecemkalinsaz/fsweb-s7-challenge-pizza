import React from "react";
import axios from "axios";
import { useState } from "react";
import { object, string, date } from "yup";
import { Checkbox } from "@mui/material";

export default function Pizza(props) {
  const [formData, setFormData] = useState({});
  const [hataMesaji, setHataMesaji] = useState("");

  let userSchema = object({
    isim: string()
      .min(2)
      .required("İsim en az 2 karakter olmalıdır"),
    adres: string().required(),
    createdOn: date().default(() => new Date()),
  });

  function changeHandler(e) {
    let { value, type, checked } = e.target;

    if (type === "checkbox") {
      value = checked;
    }

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
      const user = await userSchema.validate(formData);
    } catch (err) {
      setHataMesaji(err.message);
      return;
    }
    setHataMesaji("");

    axios
      .post("https://reqres.in/api/orders", formData)
      .then(function(response) {
        props.addSiparis(response.data);
        setFormData({});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div className="pizzaDiv">
      <h1>Pizza Siparişi</h1>
      <p style={{ color: "#e84a5f" }}>{hataMesaji}</p>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">İsim:</label>
        <input
          id="name-input"
          type="text"
          name="isim"
          onChange={changeHandler}
        />
        <label htmlFor="adres-input">Adres:</label>
        <input
          id="adres-input"
          type="text"
          name="adres"
          onChange={changeHandler}
        />
        <label htmlFor="pizza">Pizza Seçin</label>
        <select id="pizza" name="pizza" onChange={changeHandler}>
          <option value="pizza1">Klasik Pizza</option>
          <option value="pizza2">Tavuklu Pizza</option>
          <option value="pizza3">Vejeteryan Pizza</option>
        </select>
        <label htmlFor="size-dropdown">Pizza Boyutu</label>
        <select id="size-dropdown" name="boyut" onChange={changeHandler}>
          <option value="small">Küçük</option>
          <option value="medium">Orta</option>
          <option value="large">Büyük</option>
        </select>
        <div className="toppings">
          <p>Ekstra Malzemeler</p>
          <label htmlFor="topping-pepperoni">Pepperoni</label>
          <Checkbox
            id="topping-pepperoni"
            type="checkbox"
            name="malzeme1"
            value="pepperoni"
            onChange={changeHandler}
          />
          <label htmlFor="topping-sausage">Sosis</label>
          <Checkbox
            id="topping-sausage"
            type="checkbox"
            name="malzeme2"
            value="sausage"
            onChange={changeHandler}
          />
          <label htmlFor="topping-dana-fume">Dana Füme</label>
          <Checkbox
            id="topping-dana-fume"
            type="checkbox"
            name="malzeme3"
            value="dana fume"
            onChange={changeHandler}
          />
          <label htmlFor="topping-grilled-chicken">Kızarmış Tavuk</label>
          <Checkbox
            id="topping-grilled-chicken"
            type="checkbox"
            name="malzeme4"
            value="grilled chicken"
            onChange={changeHandler}
          />
          <label htmlFor="topping-onions">Soğan</label>
          <Checkbox
            id="topping-onions"
            type="checkbox"
            name="malzeme5"
            value="onions"
            onChange={changeHandler}
          />
          <label htmlFor="topping-green-peppers">Yeşil Biber</label>
          <Checkbox
            id="topping-green-peppers"
            type="checkbox"
            name="malzeme6"
            value="green peppers"
            onChange={changeHandler}
          />
          <label htmlFor="topping-tomatoes">Domates</label>
          <Checkbox
            id="topping-tomatoes"
            type="checkbox"
            name="malzeme7"
            value="tomatoes"
            onChange={changeHandler}
          />
          <label htmlFor="topping-black-olives">Siyah Zeytin</label>
          <Checkbox
            id="topping-black-olives"
            type="checkbox"
            name="malzeme8"
            value="black olives"
            onChange={changeHandler}
          />
        </div>
        <label htmlFor="special-text">Sipariş Notu</label>
        <textarea id="special-text" name="özel" onChange={changeHandler} />

        <button id="order-button" type="submit">
          Sipariş Ver
        </button>
      </form>
    </div>
  );
}
