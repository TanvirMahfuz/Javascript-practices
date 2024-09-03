// Initialize the product slider with some basic settings
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".product-slider");
  if (slider) {
    // Example animation or initialization code
    // Add your own logic here if needed
  }
});

// Load products dynamically (example)
async function loadProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  const productSlider = document.querySelector(".product-slider");
  data.products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p>$${product.price}</p>
        `;
    productSlider.appendChild(productCard);
  });
}

loadProducts();
