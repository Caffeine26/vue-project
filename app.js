// app.js

new Vue({
    el: '#app',
    data() {
      return {
        products: [
          { id: 1, name: "Cake & Milk", items: 14, image: "hambuger.png" },
          { id: 2, name: "Peach", items: 17, image: "peach.png" },
          { id: 3, name: "Organic Kiwi", items: 21, image: "kiwi.png" },
          { id: 4, name: "Red Apple", items: 68, image: "apple.png" },
          { id: 5, name: "Snack", items: 34, image: "snack.png" },
          { id: 6, name: "Black Plum", items: 25, image: "plum.png" },
          { id: 7, name: "Vegetables", items: 65, image: "vegatable.png" },
          { id: 8, name: "Headphone", items: 33, image: "headphone.png" },
          { id: 9, name: "Cake & Milk", items: 33, image: "product.png" },
          { id: 10, name: "Orange", items: 63, image: "orange.png" },
        ],
        banners: [
          {
            title: "Everyday Fresh & Clean with Our Products",
            image: "onion.jpg",
          },
          {
            title: "Make your Breakfast Healthy and Easy",
            image: "strawbery_milk.png",
          },
          {
            title: "The Best Organic Products Online",
            image: "vegatablemix.jpg",
          },
        ],
      };
    },
    methods: {
      shopNow() {
        alert('Navigating to the shop!');
      }
    }
  });
  