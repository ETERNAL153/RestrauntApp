import {orders,restaurants} from './fooditem.js'
var favoritesData= {};
var cartData= {};

function displayRestaurants() {
    var restaurantsDiv = document.getElementById('restrauants');
    restaurantsDiv.innerHTML = '';

    // Create a title element
    var title = document.createElement('p');
    title.id = 'category-name';
    title.textContent = 'Restaurants near you';
    title.style.color = 'indianred';
    title.style.fontSize = '35px';

    // Append the title to the restaurants div
    restaurantsDiv.appendChild(title);

    // Assuming you have an array of restaurant objects
    restaurants.forEach(restaurant => {
        var restaurantCard = createRestaurantCard(restaurant);
        restaurantsDiv.appendChild(restaurantCard);
    });
}

function createRestaurantCard(restaurant) {
    const searchInput = document.getElementById('search-input');
    var restaurantCard = document.createElement('div');
    restaurantCard.setAttribute('id', 'restaurant-card');
    restaurantCard.className = 'card mb-3 shadow-sm';

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    var header = document.createElement('h5');
    header.className = 'card-title';
    header.innerText = restaurant.name;
    cardBody.appendChild(header);

    var details = document.createElement('p');
    details.className = 'card-text';
    details.innerHTML = `<strong>Address:</strong> ${restaurant.address}<br>
                         <strong>Phone Number:</strong> ${restaurant.phoneNumber}<br>
                         <strong>Rating:</strong> ${restaurant.rating}`;
    cardBody.appendChild(details);

    var img = document.createElement('img');
    img.src = restaurant.img;
    img.alt = restaurant.name;
    img.className = 'card-img-top';
    restaurantCard.appendChild(img);

    restaurantCard.appendChild(cardBody);
    restaurantCard.addEventListener('click', function() {
        var index = restaurants.indexOf(restaurant);
        displayMenuItems(index);
        searchInput.removeAttribute('hidden');
        searchInput.setAttribute('data-custom', restaurant.name);
    });
    return restaurantCard;
}

function displayMenuItems(index) {
    
    var menuItemsDiv = document.getElementById('menu-items-container');
    var welcomeContainer = document.getElementById('welcome-container');
    var restrauantsDiv = document.getElementById('restrauants');


    welcomeContainer.style.display = 'none';
    restrauantsDiv.style.display = 'none';
    menuItemsDiv.style.display = 'block';

    while (menuItemsDiv.firstChild) {
        menuItemsDiv.removeChild(menuItemsDiv.firstChild);
    }

    var menuItems = restaurants[index].itemsAvailables;

    var categories = Array.from(new Set(menuItems.map(item => item.category)));
    
    categories.forEach(category => {
        var categoryDiv = document.createElement('div');
        categoryDiv.id = category;
        categoryDiv.className = 'd-' + category;

        var categoryName = document.createElement('p');
        categoryName.id = 'category-name';
        categoryName.textContent = category.charAt(0).toUpperCase() + category.slice(1);

        categoryDiv.appendChild(categoryName);

        var categoryItems = menuItems.filter(item => item.category === category);

        categoryItems.forEach(item => {
            var itemCard = createItemCard(item,restaurants[index].name);
            categoryDiv.appendChild(itemCard);
        });

        menuItemsDiv.appendChild(categoryDiv);
    });
    menuItemsDiv.scrollTop;
}

function createItemCard(item,restaurantName) {
    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card');

    // Create card top
    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    // Create rating
    var rating = document.createElement('i');
    rating.setAttribute('class', 'fa fa-star');
    rating.setAttribute('id', 'rating');
    rating.textContent = ' ' + item.rating;

    // Create icons container
    var iconsContainer = document.createElement('div');
    iconsContainer.setAttribute('class', 'icons-container');

    // Create heart icon
    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o wishlist');
    heart.setAttribute('id', 'fav-' + item.id);
    // // Check if the item is already in favorites
    if (favoritesData[restaurantName] && favoritesData[restaurantName].length > 0) {
        const favoriteItems = favoritesData[restaurantName];
        console.log("fav:"+favoriteItems);
        if (favoriteItems.some(favoriteItem => favoriteItem.id === item.id)) {
            heart.classList.add('toggle-heart');
        }
    } else {
        console.log('No favorite items for this restaurant');
    }

    // Add event listener for adding to favorites
    heart.addEventListener('click', function() {
        toggleFavorite(item,restaurantName);
    });
    // Create cart icon
    var cart = document.createElement('i');
    cart.setAttribute('class', 'fa fa-cart-plus add-to-cart');
    cart.setAttribute('id', item.id);
    if (cartData[restaurantName] && cartData[restaurantName].length > 0) {
        const cartItems = cartData[restaurantName];
        console.log("fav:"+favoriteItems);
        if (cartItems.some(favoriteItem => favoriteItem.id === item.id)) {
            cart.classList.add('toggle-heart');
        }
    } else {
        console.log('No items in cart for this restaurant');
    }
    cart.addEventListener('click', function() {
        addToCart(item, restaurantName);
      });
    // Append heart and cart icons to icons container
    iconsContainer.appendChild(heart);
    iconsContainer.appendChild(cart);

    // Append rating and icons container to card top
    cardTop.appendChild(rating);
    cardTop.appendChild(iconsContainer);

    // Create image
    var image = document.createElement('img');
    image.src = item.img;
    image.alt = item.name;

    // Create item name
    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.textContent = item.name;

    // Create item price
    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.textContent = 'Price : ₹ ' + item.price;

    // Append card top, image, item name, and item price to item card
    itemCard.appendChild(cardTop);
    itemCard.appendChild(image);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    return itemCard;
}

function toggleFavorite(item,restaurantName) {
    var itemToAdd = item.name;
    if (!favoritesData[restaurantName]) {
        favoritesData[restaurantName] = [];
    }

    var existingItem = favoritesData[restaurantName].find(favItem => favItem.name == itemToAdd);
    if(existingItem){
        favoritesData[restaurantName].splice(favoritesData[restaurantName].indexOf(existingItem),1)
        document.getElementById('fav-' + item.id).classList.remove('toggle-heart');
    }
    else{
        favoritesData[restaurantName].push(item);
        document.getElementById('fav-' + item.id).classList.add('toggle-heart');
        console.log(favoritesData)
    }
}

function incrementItem(restaurantName, itemToInc) {
    console.log(itemToInc);
    // Find the item directly in the restaurant's item list
    var incObj = cartData[restaurantName].find(item => item.name == itemToInc);
    if (incObj) {
        incObj.quantity += 1;
        // Recalculate the price based on the new quantity
        let currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1);
        incObj.price = currPrice * incObj.quantity;
        // Update the total amount and re-render the cart items
        totalAmount(restaurantName);
        cartItems();
    } else {
        console.error("Item not found in cart for the restaurant:", restaurantName);
    }
}


var currPrice= 0;
function decrementItem(restaurantName,itemToInc) {
    // Find the restaurant items by restaurant name
    let decObj = cartData[restaurantName].find(item => item.name == itemToInc);
    let ind = cartData[restaurantName].findIndex(item => item.name == itemToInc);

    if (decObj) {
        if (decObj.quantity > 1) {
            // Calculate the price based on the new quantity
            let currPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / decObj.quantity;
            decObj.quantity -= 1;
            decObj.price = currPrice * decObj.quantity;
        } else {
            // Remove the item from the cart if quantity is 1
            document.getElementById(decObj.id).classList.remove('toggle-heart');
            cartData[restaurantName].splice(ind, 1);

            // Remove the restaurant from the cartData if no more items are left
            if (cartData[restaurantName].length == 0) {
                delete cartData[restaurantName]; // Delete the empty restaurant entry
            }

            document.getElementById('cart-plus').innerText = ' ' + Object.values(cartData).reduce((acc, restaurantItems) => acc + restaurantItems.length, 0) + ' Items';

            // If the cart is empty, toggle visibility and display an alert
            if (Object.keys(cartData).length < 1 && flag) {
                document.getElementById('food-items').classList.toggle('food-items');
                document.getElementById('cart-page').classList.toggle('cart-toggle');
                document.getElementById('checkout').classList.toggle('cart-toggle');
                document.getElementById('profile-section').style.display = 'none';
                document.getElementById('orders').style.display = 'none';
                document.getElementById('checkoutContainer').style.display = 'none';
                flag = false;
                alert("Currently no item in cart!");
                callHome()
                console.log(flag);
            }
        }

        // Recalculate total amount and re-render the cart
        totalAmount(restaurantName);
        cartItems();
    } else {
        console.error("Item not found for restaurant:", restaurantName);
    }
}


  function totalAmount(restaurantName) {
    var sum = 0;
    var totalItems = 0;
    if (cartData[restaurantName]) {
        cartData[restaurantName].forEach(item => {
            sum += item.price * item.quantity;
            totalItems += item.quantity;
        });
    }
    console.log(sum)
    document.getElementById('total-item').innerText = 'Total Items: ' + totalItems;
    document.getElementById('total-price').innerText = 'Total Price: ₹ ' + sum;
}




var flag= false;

function cartToggle() {
    console.log(Object.keys(cartData).length)
    if (Object.keys(cartData).length > 0) {
        // Hide favorites and show cart
        cartItems();
        document.getElementById('favorites-page').style.display = 'none';
        document.getElementById('cart-page').style.display = 'block';
        // document.getElementById('checkout').style.display = 'block';
        // Toggle visibility of other sections
        document.getElementById('food-items').style.display = 'none';
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('orders').style.display = 'none';
        document.getElementById('checkoutContainer').style.display = 'none';

        flag = true;
        console.log(flag);
    } else {
        alert("Currently no item in cart!");
    }
}

function favoriteToggle() {
    console.log(Object.keys(favoritesData).length)
    if (Object.keys(favoritesData).length > 0) {
        favoriteItems();
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('checkout').style.display = 'none';
        document.getElementById('favorites-page').style.display = 'block';
        document.getElementById('food-items').style.display = 'none';
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('orders').style.display = 'none';
        document.getElementById('checkoutContainer').style.display = 'none';
    } else {
        alert("Currently no item in favorites!");
    }
}

function favoriteItems(){
    var favoritePage = document.getElementById('favorites-page');
    favoritePage.innerHTML = '';

    var favTitle = document.createElement('p');
    favTitle.id = 'favorites-title';
    favTitle.textContent = 'Favorites';
    favoritePage.appendChild(favTitle);
    console.log("test"+favoritesData);

    for(const [restaurantName, restaurantItems] of Object.entries(favoritesData)){
        var restaurantHeader = document.createElement('h2');
        restaurantHeader.textContent = restaurantName;
        favoritePage.appendChild(restaurantHeader);

        var table = document.createElement('table');
        favoritePage.appendChild(table);

        var tableHeader = document.createElement('thead');
        table.appendChild(tableHeader);

        var tableHeaderRow = document.createElement('tr');
        tableHeader.appendChild(tableHeaderRow);

        var tableHeaderItem = document.createElement('th');
        tableHeaderItem.textContent = 'Item';
        tableHeaderRow.appendChild(tableHeaderItem);

        var tableHeaderName = document.createElement('th');
        tableHeaderName.textContent = 'Name';
        tableHeaderRow.appendChild(tableHeaderName);

        var tableHeaderCart = document.createElement('th');
        tableHeaderCart.textContent = 'Add to Cart';
        tableHeaderRow.appendChild(tableHeaderCart)

        var tableHeaderPrice = document.createElement('th');
        tableHeaderPrice.textContent = 'Price';
        tableHeaderRow.appendChild(tableHeaderPrice);

        var tableHeaderRemove = document.createElement('th');
        tableHeaderRemove.textContent = 'Remove';
        tableHeaderRow.appendChild(tableHeaderRemove)

        var tableBody = document.createElement('tbody');
        table.appendChild(tableBody);

        for (const item of restaurantItems){
            var tableRow = document.createElement('tr');
            tableBody.appendChild(tableRow);
            var tableItemImage = document.createElement('td');
            var tableItemImageImg = document.createElement('img');
            if (item.img) {
                tableItemImageImg.src = item.img;
                tableItemImageImg.alt = item.name;
            } else {
                tableItemImageImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0xochkBOUfjb1dBRQdrANMMQM4ikIv0JvA&s'; // Replace with a default image
                tableItemImageImg.alt = 'Default Image';
            }
            tableItemImage.appendChild(tableItemImageImg);
            tableRow.appendChild(tableItemImage);

            var tableItemName = document.createElement('td');
            tableItemName.textContent = item.name;
            tableRow.appendChild(tableItemName);

            var tableItemCart = document.createElement('td');
            var btn1= document.createElement('button');
            btn1.setAttribute('class','fa fa-cart-plus add-to-cart')
            btn1.addEventListener('click',function(){
                addToCart(item,restaurantName);
            })
            tableItemCart.appendChild(btn1);
            tableRow.appendChild(tableItemCart)

            var tableItemPrice = document.createElement('td');
            tableItemPrice.textContent = `₹ ${item.price}`;
            tableRow.appendChild(tableItemPrice);

            var tableItemRemove = document.createElement('td');
            var btn2 = document.createElement('button')
            btn2.setAttribute('class','fa fa-trash remove')
                btn2.addEventListener('click',function(){
                removeFromFavorite(item,restaurantName);
            })
            tableItemRemove.appendChild(btn2);
            tableRow.appendChild(tableItemRemove);
        }

    }
}

function removeFromFavorite(itemInc,restaurantName) {
    // Find the index of the item in the favoritesData array

    let decObj = favoritesData[restaurantName].find(item => item.name == itemInc.name);
    let ind = favoritesData[restaurantName].findIndex(item => item.name == itemInc.name);
    if (decObj) {
        // Remove the item from the favoritesData array
        document.getElementById('fav-' + decObj.id).classList.remove('toggle-heart');
        favoritesData[restaurantName].splice(ind, 1);

        // Update the UI to reflect the removal
        favoriteItems()

        // Show a message or feedback to the user
        if(favoritesData[restaurantName].length === 0){
            delete favoritesData[restaurantName]; // Remove the empty restaurant entry
            callHome()
        }

    }else {
        alert("Item not found in favorites!");
    }

}



function cartItems() {
    var cartPage = document.getElementById('cart-page');
    cartPage.innerHTML = '';

    // Create the cart title
    var cartTitle = document.createElement('p');
    cartTitle.id = 'cart-title';
    cartTitle.textContent = 'Cart Items';
    cartPage.appendChild(cartTitle);
    console.log("test"+cartData);

    // Iterate through the grouped cartData and create table rows for each restaurant
    for (const [restaurantName, restaurantItems] of Object.entries(cartData)) {
        // Create a header for the restaurant
        console.log(restaurantName+". h  . "+restaurantItems);
        var restaurantHeader = document.createElement('h2');
        restaurantHeader.textContent = restaurantName;
        cartPage.appendChild(restaurantHeader);

        // Create a table for the restaurant
        var table = document.createElement('table');
        cartPage.appendChild(table);

        // Create the table header
        var tableHeader = document.createElement('thead');
        table.appendChild(tableHeader);

        var tableHeaderRow = document.createElement('tr');
        tableHeader.appendChild(tableHeaderRow);

        var tableHeaderItem = document.createElement('th');
        tableHeaderItem.textContent = 'Item';
        tableHeaderRow.appendChild(tableHeaderItem);

        var tableHeaderName = document.createElement('th');
        tableHeaderName.textContent = 'Name';
        tableHeaderRow.appendChild(tableHeaderName);

        var tableHeaderQuantity = document.createElement('th');
        tableHeaderQuantity.textContent = 'Quantity';
        tableHeaderRow.appendChild(tableHeaderQuantity);
        
        var tableHeaderPrice = document.createElement('th');
        tableHeaderPrice.textContent = 'Price';
        tableHeaderRow.appendChild(tableHeaderPrice);

        // Create the table body
        var tableBody = document.createElement('tbody');
        table.appendChild(tableBody);

        // Create table rows for each item in the restaurant
        for (const item of restaurantItems) {
            var tableRow = document.createElement('tr');
            tableBody.appendChild(tableRow);
            console.log(item)
            var tableItemImage = document.createElement('td');
            var tableItemImageImg = document.createElement('img');
            if (item.img) {
                tableItemImageImg.src = item.img;
                tableItemImageImg.alt = item.name;
            } else {
                tableItemImageImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0xochkBOUfjb1dBRQdrANMMQM4ikIv0JvA&s'; // Replace with a default image
                tableItemImageImg.alt = 'Default Image';
            }
            tableItemImage.appendChild(tableItemImageImg);
            tableRow.appendChild(tableItemImage);

            var tableItemName = document.createElement('td');
            tableItemName.textContent = item.name;
            tableRow.appendChild(tableItemName);

            var tableItemQuantity = document.createElement('td');
            var btn1= document.createElement('button');
            btn1.setAttribute('class','decrease-item');
            btn1.innerText= '-';
            btn1.addEventListener('click',function(){
                decrementItem(restaurantName,item.name);
            })
            var span= document.createElement('span');
            span.innerText= item.quantity;
            var btn2= document.createElement('button');
            btn2.setAttribute('class','increase-item');
            btn2.innerText= '+';
            btn2.addEventListener('click',function(){
                incrementItem(restaurantName,item.name);
            })
            tableItemQuantity.appendChild(btn1)
            tableItemQuantity.appendChild(span)
            tableItemQuantity.appendChild(btn2)

            tableRow.appendChild(tableItemQuantity);

            var tableItemPrice = document.createElement('td');
            tableItemPrice.textContent = `₹ ${item.price}`;
            tableRow.appendChild(tableItemPrice);
        }

        var  tfooter = document.createElement('div');
        tfooter.className = 'checkout-container';
        cartPage.appendChild(tfooter);
        var totalAmount = document.createElement('p');
        totalAmount.textContent = `Total Amount: ₹ ${restaurantItems.reduce((acc, item) => acc + item.price, 0)}`;
        tfooter.appendChild(totalAmount);

        var btnBox = document.createElement('div');
        btnBox.className = 'btn-box';
        tfooter.appendChild(btnBox);

        var checkoutBtn = document.createElement('button');
        checkoutBtn.className = 'checkout-btn cart-btn';
        checkoutBtn.textContent = 'Checkout';
        checkoutBtn.addEventListener('click',function(){
            checkout(restaurantName);
        })
        btnBox.appendChild(checkoutBtn);
    }
}

let selectedOrder = {};
function checkout(restaurantName){
    if(cartData[restaurantName]){
        document.getElementById('food-items').style.display='none';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('checkout').style.display = 'none';
        document.getElementById('favorites-page').style.display = 'none';
        document.getElementById('profile-section').style.display = 'none'
        document.getElementById('orders').style.display = 'none';
        document.getElementById('checkoutContainer').style.display = 'block';
        const userData = localStorage.getItem('user');
        const user = JSON.parse(userData);
        const now = new Date();
        const isoString = now.toISOString();
        selectedOrder = {
            orderId: generateOrderId(),
            customerName: user.name,
            deliveryAddress: user.address,
            dateOrdered: isoString,
            restaurantName: restaurantName,
            itemsOrdered: cartData[restaurantName],
            totalPrice: calculateTotalPrice(restaurantName),
            orderStatus: 'Placed'
        };
        console.log(selectedOrder);

        showOrderPopup(selectedOrder);

    }
    else{
        alert('Your cart is empty');
    }
}

function generateOrderId() {
    return Math.floor(Math.random() * 10000); // Simple random ID for demonstration
}

function calculateTotalPrice(restaurantName){
    let sum =0;
    cartData[restaurantName].forEach(item=>{
        sum += item.price;
    })
    return  sum;
}


function showOrderPopup(order) {
    const  orderElement = document.getElementById('checkoutContainer');
    orderElement.style.marginLeft = '20px';
    const orderDetailsContainer = document.getElementById('orderDetailsContainer');
    
    // Clear existing content
    orderDetailsContainer.innerHTML = '';
    orderDetailsContainer.style.marginLeft = '20px';
    // Create order details elements with Bootstrap classes
    const orderDetailsHtml = `
        <div class="mb-3">
            <h4 class="text-primary">Order #${order.orderId}</h4>
            <p><strong>Customer Name:</strong> ${order.customerName}</p>
            <p><strong>Address:</strong> ${order.deliveryAddress}</p>
            <p><strong>Date Ordered:</strong> ${order.dateOrdered}</p>
            <p><strong>Restaurant Name:</strong> ${order.restaurantName}</p>
        </div>

        <div class="mb-4">
            <h5 class="text-secondary">Items Ordered:</h5>
            <ul class="list-group mb-3">
                ${order.itemsOrdered.map(item => `
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${item.name} x${item.quantity}
                        <span class="badge badge-primary badge-pill">₹${(item.price / item.quantity).toFixed(2)}</span>
                    </li>
                `).join('')}
            </ul>
            <p class="font-weight-bold">Total Price: ₹${order.totalPrice.toFixed(2)}</p>
        </div>

        <div class="mb-3">
            <p><strong>Order Status:</strong> 
                <span class="badge badge-${order.orderStatus === 'Delivered' ? 'success' : 'warning'}">
                    ${order.orderStatus}
                </span>
            </p>
        </div>
    `;

    // Set the content of the popup
    orderDetailsContainer.innerHTML = orderDetailsHtml;
}

document.getElementById('add-address').addEventListener('click',addAddress);

// Add event listener for input event on the search input field
document.getElementById('search-input').addEventListener('input', function(e) {
    const pattern = e.target.value;
    if (pattern.length > 0) {
        searchItems(pattern);
    } else {
        // Clear results if the input is empty
        document.getElementById('search-result').innerHTML = '';
        displayRestaurants();
    }
});

function addAddress() {
    var address = prompt('Enter your address');
    if (address != null) {
        // Update the displayed address
        document.getElementById('add-address').innerText = ' ' + address;

        // Retrieve the user data from localStorage
        let userData = localStorage.getItem('user');

        // Check if userData exists
        if (userData) {
            // Parse the JSON string into an object
            let userObject = JSON.parse(userData);

            // Update the address property
            userObject.address = address;

            // Convert the object back to a JSON string and save it to localStorage
            localStorage.setItem('user', JSON.stringify(userObject));

            console.log(localStorage.getItem('user')); // Log the updated user data
        } else {
            console.error('No user data found in localStorage.');
        }
    } else {
        alert("Address not added");
    }
}

function callHome(){
    const searchInput = document.getElementById('search-input');
    searchInput.setAttribute('hidden','true')
    document.getElementById('food-items').style.display = 'block';
    var menuItemsDiv = document.getElementById('menu-items-container');
    var welcomeContainer = document.getElementById('welcome-container');
    var restrauantsDiv = document.getElementById('restrauants');

    menuItemsDiv.style.display = 'none';
    welcomeContainer.style.display = 'block';
    welcomeContainer.style.cssText = "display: flex !important; justify-content: center !important; align-items: center !important;";
    restrauantsDiv.style.display = 'block';

    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('favorites-page').style.display = 'none';
    document.getElementById('orders').style.display = 'none';
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('checkoutContainer').style.display = 'none';
}

function addToCart(item, restaurantName) {
    var itemToAdd = item.name;
    if (!cartData[restaurantName]) {
        cartData[restaurantName] = [];
    }

    // Check if the item is already in the cart for the specific restaurant
    var existingItem = cartData[restaurantName].find(cartItem => cartItem.name == itemToAdd);

    if (existingItem) {
        // If the item is already in the cart, increment its quantity
        alert("Added to cart!");
    } else {
        // If the item is not in the cart, add it with a quantity of 1
        item.quantity = 1;
        cartData[restaurantName].push(item);
        document.getElementById(item.id).classList.add('toggle-heart');
    }
    console.log("Cart Data:", cartData);
    let totalItems = Object.values(cartData).reduce((acc, restaurantItems) => acc + restaurantItems.length, 0);
    document.getElementById('cart-plus').innerText = ' ' + totalItems + ' Items';
    totalAmount(restaurantName);
    // cartItems();
}


function displayUserProfile() {
    // Retrieve user data from localStorage
    document.getElementById('food-items').style.display='none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('favorites-page').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block'
    document.getElementById('orders').style.display = 'none';
    document.getElementById('checkoutContainer').style.display = 'none';
    const userData = localStorage.getItem('user');

    // Check if user data exists
    if (userData) {
        // Parse the JSON data
        const user = JSON.parse(userData);

        // Get the profile-info container
        const profileInfo = document.getElementById('profile-info');

        // Create HTML content to display user profile with Bootstrap classes
        profileInfo.innerHTML = `
            <div class="mb-3">
                <p><strong>Name:</strong> ${user.name || 'N/A'}</p>
            </div>
            <div class="mb-3">
                <p><strong>Username:</strong> ${user.username || 'N/A'}</p>
            </div>
            <div class="mb-3">
                <p><strong>Address:</strong> ${user.address || 'N/A'}</p>
            </div>
        `;
    }else {
        // If no user data found, show a message
        const profileInfo = document.getElementById('profile-info');
        profileInfo.innerHTML = `
            <div class="alert alert-warning" role="alert">
                No profile information found.
            </div>
        `;
    }

 }


 function searchItems(pattern) {
    const searchInput = document.getElementById('search-input');
    var searchRes = document.getElementById('menu-items-container');
    var resName = searchInput.getAttribute('data-custom');
    console.log(resName);
    searchRes.innerHTML = '';
    console.log(pattern)
    if (pattern.length > 0) {
        var categoryName = document.createElement('p');
        categoryName.id = 'category-name';
        categoryName.textContent = 'Search result';
        searchRes.appendChild(categoryName);

        const resData = restaurants.filter((restaurant) => {
            return restaurant.name.toLowerCase().includes(resName.toLowerCase());
        }).flatMap((restaurant) => {
            return restaurant.itemsAvailables.filter((item) => {
                return item.name.toLowerCase().includes(pattern.toLowerCase()) || 
                       item.category.toLowerCase().includes(pattern.toLowerCase());
            });
        });
        console.log(resData)
        if (resData.length === 0) {
            var noResult = document.createElement('p');
            noResult.textContent = 'No items found';
            searchRes.appendChild(noResult);
        } else {
            // Get all the unique categories
            const categories = [...new Set(resData.map(item => item.category))];

            // Add the categories and their corresponding items to the searchRes
            categories.forEach(category => {
                const categoryItems = resData.filter(item => item.category === category);

                if (categoryItems.length > 0) {
                    var categoryDiv = document.createElement('div');
                    categoryDiv.id = category;
                    categoryDiv.className = 'd-' + category;

                    var categoryName = document.createElement('p');
                    categoryName.id = 'category-name';
                    categoryName.textContent = category.charAt(0).toUpperCase() + category.slice(1);

                    categoryDiv.appendChild(categoryName);

                    categoryItems.forEach(item => {
                        var itemCard = createItemCard(item, resName);
                        categoryDiv.appendChild(itemCard);
                    });
                    searchRes.appendChild(categoryDiv);
                }
            });
        }
    }
}



document.getElementById('cart').addEventListener('click',cartToggle);
document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('home').addEventListener('click', callHome);
document.getElementById('circle').addEventListener('click',displayUserProfile)
document.getElementById('search-input').addEventListener('input', function(e) {
    const pattern = e.target.value;
    if (pattern.length > 0) {
        searchItems(pattern);
    } else {
        // Clear results if the input is empty
        document.getElementById('search-result').innerHTML = '';
        callHome();
    }
});
// document.getElementById('order').addEventListener('click',displayOrderItems)

document.getElementById('wishlist-link').addEventListener('click',function(){
    favoriteToggle();
});
displayRestaurants();


document.querySelector('#confirmOrderBtn').addEventListener('click', function() {
    // Add the order to the orders dataset (replace this with your actual logic)
    addOrderToDataset(selectedOrder);
    // Select all elements with the class 'fa fa-cart-plus add-to-cart toggle-heart'
    const elements = document.querySelectorAll('.fa.fa-cart-plus.add-to-cart.toggle-heart');
// Iterate over the selected elements
    elements.forEach(element => {
    // Remove the 'toggle-heart' class
        element.classList.remove('toggle-heart');
    });
    // cartData = []
    
    // Hide the modal
    $('#checkoutModal').modal('hide');
    console.log('hello')
    displayOrderItems();
});
function addOrderToDataset(selectedOrder){
    if(selectedOrder!=null){
        orders.push(selectedOrder);
        delete cartData[selectedOrder.restaurantName];
        document.getElementById('cart-plus').innerText = ' ' + Object.values(cartData).reduce((acc, restaurantItems) => acc + restaurantItems.length, 0) + ' Items';
        alert('Order placed successfully')
    }
    else{
        alert('Please select an item to order')
    }
}

function displayOrderItems(){
    const container = document.getElementById('orders');
    container.innerHTML = '';
    document.getElementById('food-items').style.display='none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('favorites-page').style.display = 'none';
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('orders').style.display = 'block';
    document.getElementById('checkoutContainer').style.display = 'none';
    
    if(orders.length>0){
        const title = document.createElement('div')
        title.id = 'orders-title';
        title.innerHTML = 'Orders';
        container.append(title)
        title.className = 'container-sm'
        orders.forEach(order => {
            createOrderCard(order)
        })
    }
    else{
        alert("Item not found in orders!");
    }
    
}
document.getElementById('order').addEventListener('click',displayOrderItems)

function createOrderCard(order) {
    const container = document.getElementById('orders');
    
    // Create card element using Bootstrap card class
    
    const card = document.createElement('div');
    card.setAttribute('id','order-card')
    card.className = 'card mb-3 shadow-sm';

    // Create card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create order header using Bootstrap's heading and card-title classes
    const header = document.createElement('h5');
    header.className = 'card-title';
    header.innerText = `Order #${order.orderId}`;
    cardBody.appendChild(header);

    // Create order details section
    const details = document.createElement('p');
    details.innerHTML = `<strong>Customer Name:</strong> ${order.customerName}<br>
                         <strong>Delivery Address:</strong> ${order.deliveryAddress}<br>
                         <strong>Date Ordered:</strong> ${order.dateOrdered}<br>
                         <strong>Restaurant Name:</strong> ${order.restaurantName}`;
    cardBody.appendChild(details);

    // Create items ordered list
    const itemsList = document.createElement('ul');
    itemsList.className = 'list-group list-group-flush mb-3'; // Add spacing between list and total price
    // Create items title
    const itemsTitle = document.createElement('strong');
    itemsTitle.innerText = 'Items:';
    cardBody.appendChild(itemsTitle);
    order.itemsOrdered.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerText = `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`;
        itemsList.appendChild(listItem);
    });
    cardBody.appendChild(itemsList);

    // Total price
    const totalPrice = document.createElement('div');
    totalPrice.className = 'card-footer text-muted';
    totalPrice.innerHTML = `<strong>Total Price:</strong> ₹${order.totalPrice.toFixed(2)}`;
    cardBody.appendChild(totalPrice);

    // Order status using Bootstrap badge for highlighting
    const status = document.createElement('div');
    status.className = `badge ${getStatusBadgeClass(order.orderStatus)} mt-3`; // Use different colors for different statuses
    status.innerHTML= `<strong>Order Status:</strong> ${order.orderStatus}`;
    cardBody.appendChild(status);

    // Append card body to card
    card.appendChild(cardBody);

    // Append card to container
    container.insertBefore(card, container.firstChild.nextSibling)
}

function getStatusBadgeClass(status) {
    switch (status) {
      case 'pending':
        return 'badge-warning';
      case 'in_progress':
        return 'badge-info';
      case 'delivered':
        return 'badge-success';
      case 'cancelled':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  }