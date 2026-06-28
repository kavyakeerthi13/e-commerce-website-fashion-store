document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "T-Shirt", price: "₹499", img: "fashion img/tshirt.jpg", rating: 4 },
    { name: "Shirt", price: "₹999", img: "fashion img/shirt.jpg", rating: 3 },
    { name: "Shirt", price: "₹999", img: "fashion img/shirt2.jpg", rating: 4 },
    { name: "Jean", price: "₹999", img: "fashion img/jean.jpg", rating: 4 },
    { name: "Kurti", price: "₹1299", img: "fashion img/kurti.jpg", rating: 4 },
    { name: "Skirt", price: "₹799", img: "fashion img/skirt.jpg", rating: 3 },
    { name: "Kurti", price: "₹1299", img: "fashion img/kurti2.jpg", rating: 3 },
    { name: "Kurti", price: "₹899", img: "fashion img/kurti3.jpg", rating: 4 },
    { name: "Saree", price: "₹2499", img: "fashion img/saree.jpg", rating: 3 },
    { name: "Saree", price: "₹1699", img: "fashion img/saree2.jpg", rating: 3 },
    { name: "Hoodie", price: "₹699", img: "fashion img/hoodie.jpg", rating: 4 },
    { name: "Sneakers", price: "₹1399", img: "fashion img/sneakers.jpg", rating: 3 },
    { name: "Shoe", price: "₹999", img: "fashion img/shoe.jpg", rating: 4 },
    { name: "Sandals", price: "₹599", img: "fashion img/sandals.jpg", rating: 4 },
    { name: "Heels", price: "₹999", img: "fashion img/heel.jpg", rating: 4 },
    { name: "Watch", price: "₹999", img: "fashion img/watch.jpg", rating: 3 },
    { name: "Sunglasses", price: "₹599", img: "fashion img/sunglasses.jpg", rating: 4 },
    { name: "Handbag", price: "₹799", img: "fashion img/handbag.jpg", rating: 3 },
    { name: "Backpack", price: "₹1299", img: "fashion img/bag.jpg", rating: 4 },
    { name: "Scarf", price: "₹699", img: "fashion img/scarf.jpg", rating: 4 },
    { name: "Jumkha", price: "₹599", img: "fashion img/jumkha.jpg", rating: 4 },
    { name: "Earrings", price: "₹299", img: "fashion img/earings.jpg", rating: 4 },
    { name: "Bracelet", price: "₹399", img: "fashion img/bracelet.jpg", rating: 4 }
  ];

  // ✅ Make sure this matches your shop.html container
  let shopContainer = document.getElementById("shop-container");

  products.forEach(product => {
    let card = document.createElement("div");
    card.classList.add("product-card");

    // Normal star rating (whole stars only)
    let stars = "★".repeat(product.rating);

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <p class="rating">Rating: ${stars}</p>
      <button>Add to Cart</button>
    `;

    shopContainer.appendChild(card);
  });

  // Cart button alert
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });
});
