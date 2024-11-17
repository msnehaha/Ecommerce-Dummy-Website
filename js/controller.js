// import { API_URL }   from "./config"; 




const data = await fetch('https://dummyjson.com/products')
.then(res => res.json());

console.log(data);
