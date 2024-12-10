import { URI, ADD_PRODUCT_URI, LOGIN_URI, SEARCH_URI} from "./config.js";

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

export const loginPage = async function (data) {
  try {
    return await fetch(LOGIN_URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
      // credentials: "include", // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

// loginPage({ username: "emilys", password: "emilyspass" });


export const searchQuery = function(query)
{
  return fetch(`${SEARCH_URI}?q=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data});
}