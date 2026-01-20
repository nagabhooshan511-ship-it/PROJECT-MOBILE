const phones = [
  { name: "iPhone 14 Pro", brand: "Apple", price: "$999", branch: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/IPhone_14_Pro_Silver.svg/320px-IPhone_14_Pro_Silver.svg.png" },
  { name: "Samsung Galaxy S23", brand: "Samsung", price: "$899", branch: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Samsung_Galaxy_S23.png/320px-Samsung_Galaxy_S23.png" },
  { name: "iPhone 13", brand: "Apple", price: "$799", branch: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/IPhone_13.png/320px-IPhone_13.png" },
  { name: "Google Pixel 8", brand: "Google", price: "$799", branch: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Pixel_8.png/320px-Google_Pixel_8.png" },
  { name: "Samsung Galaxy S22", brand: "Samsung", price: "$699", branch: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Samsung_Galaxy_S22.png/320px-Samsung_Galaxy_S22.png" },
  { name: "Google Pixel 7", brand: "Google", price: "$599", branch: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Google_Pixel_7.png/320px-Google_Pixel_7.png" }
];

// Function to display phones by branch
function displayPhones(branchName) {
  const shopContainer = document.getElementById('shopContainer');
  shopContainer.innerHTML = '';

  const filteredPhones = phones.filter(phone => branchName === "All" || phone.branch === branchName);

  if (filteredPhones.length === 0) {
    shopContainer.innerHTML = '<p>No phones available in this branch.</p>';
    return;
  }

  filteredPhones.forEach(phone => {
    const card = document.createElement('div');
    card.className = 'phone-card';
    card.innerHTML = `
      <img src="${phone.image}" alt="${phone.name}">
      <h3>${phone.name}</h3>
      <p>Brand: ${phone.brand}</p>
      <p>Price: ${phone.price}</p>
      <p>Branch: ${phone.branch}</p>
      <button class="buy-btn" onclick="alert('You bought ${phone.name} from ${phone.branch}!')">Buy Now</button>
    `;
    shopContainer.appendChild(card);
  });
}

