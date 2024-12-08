import { URI, ADD_PRODUCT_URI } from "./config.js";

export const getRequest = (url) => {
  return fetch(`${URI}/${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const addProduct = async function (data) {
  return await fetch(ADD_PRODUCT_URI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

addProduct({ title: "fdf", image: "Fsdf", price: 323 });
