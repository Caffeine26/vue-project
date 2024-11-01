<template>
    <div id="app">
      <!-- Top Product Section -->
      <div class="product-container">
        <div 
          v-for="(product, index) in products" 
          :key="index" 
          class="product-card"
        >
          <img :src="product.img" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.items }} items</p>
        </div>
      </div>
  
      <!-- Banner Section -->
      <div class="banner-container">
        <div class="banner banner-1">
          <h2>Everyday Fresh & Clean with Our Products</h2>
          <button>Shop Now</button>
        </div>
        <div class="banner banner-2">
          <h2>Make your Breakfast Healthy and Easy</h2>
          <button>Shop Now</button>
        </div>
        <div class="banner banner-3">
          <h2>The Best Organic Products Online</h2>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { name: "Cake & Milk", items: 14, img: "cake-milk.jpg" },
          { name: "Peach", items: 17, img: "peach.jpg" },
          { name: "Organic Kiwi", items: 21, img: "kiwi.jpg" },
          { name: "Red Apple", items: 68, img: "apple.jpg" },
          { name: "Snack", items: 30, img: "snack.jpg" },
          { name: "Black Plum", items: 25, img: "plum.jpg" },
          { name: "Vegetables", items: 65, img: "vegetables.jpg" },
          { name: "Headphone", items: 33, img: "headphone.jpg" },
          { name: "Orange", items: 63, img: "orange.jpg" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* General body styling */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  
  /* Top Product Section Styling */
  .product-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #333;
  }
  
  .product-card {
    width: 120px;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    background-color: #fff;
  }
  
  .product-card img {
    width: 100%;
    height: auto;
  }
  
  /* Banner Section Styling */
  .banner-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }
  
  .banner {
    flex: 1;
    margin: 0 10px;
    padding: 20px;
    color: #fff;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .banner button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .banner-1 {
    background-image: url('onion-bg.jpg');
  }
  
  .banner-2 {
    background-image: url('juice-bg.jpg');
  }
  
  .banner-3 {
    background-image: url('veggies-bg.jpg');
  }
  </style>
  