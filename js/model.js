import { URI } from "./config.js";


export const getRequest = (url) => {
    return fetch(`${URI}/${url}`, {
        headers: {
            method: "GET",
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    }).then(res => res.json()).then(data => data);

}



// export const returnData = async function () {
//     const data = await fetch(`https://dummyjson.com/products`).then(res => res.json()).then(data => { console.log(data,' model test');  
//         return data;
//     });


// }