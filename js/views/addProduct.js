import { addProduct } from "../model.js";

const addProductForm = document.getElementById("addProductForm");
if (addProductForm) {
  console.log("Form found");
  addProductForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("submit successful");
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    console.log(data);

    const productData = {
      title: data.title,
      image: data.photo, // Ensure the API expects 'image' for the photo URL
      price: parseFloat(data.price), // Convert price to a number
    };

    console.log("Sending product data:", productData); // Log product data for debugging
    addProduct(productData)
      .then((response) => {
        console.log("Response from server:", response);

        if (response.id) {
          alert("Product added successfully!");
          window.location.href = "../index.html"; // Redirect after success
        } else {
          alert("Failed to add product.");
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Error adding product.");
      });
  });
} else {
  console.log("Element not found");
}
