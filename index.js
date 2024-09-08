import {foodItem} from './fooditem.js'
var favoritesData= [];
var cartData= [];
function createItemCard(item) {
    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card');

    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    var star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;
    
    var iconsContainer = document.createElement('div');
    iconsContainer.setAttribute('class', 'icons-container');

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o wishlist');
    heart.setAttribute('id', 'fav-' + item.id);

    // Check if the item is already in favorites
    if(favoritesData.some(favItem => favItem.id === item.id)) {
        heart.classList.add('toggle-heart');
    }

    // Add event listener for adding to favorites
    heart.addEventListener('click', function() {
        toggleFavorite(item);
    });

    var cart = document.createElement('i');
    cart.setAttribute('class', 'fa fa-cart-plus add-to-cart');
    cart.setAttribute('id', item.id);
    cart.addEventListener('click',function(){
        addToCart(item);
    })
    iconsContainer.appendChild(heart);
    iconsContainer.appendChild(cart);
    cardTop.appendChild(star);
    cardTop.appendChild(iconsContainer);

    var img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name; 

    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.innerText = item.name;

    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.innerText = 'Price : ₹ ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    return itemCard;
}
function searchItems(pattern) {
    var searchRes = document.getElementById('search-result');

    // Clear previous results
    searchRes.innerHTML = '';
    console.log(pattern)
    // Check if the pattern length is greater than 0
    if (pattern.length > 0) {
        // Add the <p> tag at the top of the results
        var categoryName = document.createElement('p');
        categoryName.id = 'category-name';
        categoryName.textContent = 'Search result';
        searchRes.appendChild(categoryName);
        
        // Filter the items based on the pattern
        const resData = foodItem.filter((item) => {
            return item.name.toLowerCase().includes(pattern.toLowerCase()) || 
                   item.category.toLowerCase().includes(pattern.toLowerCase());
        });
        console.log(resData)
        if (resData.length === 0) {
            var noResult = document.createElement('p');
            noResult.textContent = 'No items found';
            searchRes.appendChild(noResult);
        } else {
            var biryani = document.getElementById('biryani');
            var paneer = document.getElementById('paneer');
            var chicken = document.getElementById('chicken');
            var vegetable = document.getElementById('vegetable');
            var chinese = document.getElementById('chinese');
            var southIndian = document.getElementById('south-indian');

            biryani.innerHTML = ''; 
            paneer.innerHTML = ''; 
            chicken.innerHTML = ''; 
            vegetable.innerHTML = ''; 
            chinese.innerHTML = ''; 
            southIndian.innerHTML = ''; 

            // Display the filtered results
            resData.forEach(item => { 
                var itemCard = createItemCard(item)
                searchRes.appendChild(itemCard);
            });
        }
    }
}



//function to display the items
function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var chinese=  document.getElementById('chinese');
    var southIndian=  document.getElementById('south-indian');

    const biryaniData= foodItem.filter((item)=>item.category=='biryani');
    const chickenData= foodItem.filter((item)=>item.category=='chicken');
    const PaneerData= foodItem.filter((item)=>item.category=='paneer');
    const vegetableData= foodItem.filter((item)=>item.category=='vegetable');
    const chineseData= foodItem.filter((item)=>item.category=='chinese');
    const southData= foodItem.filter((item)=>item.category=='south-indian');
    biryaniData.map(item=>{
        var itemCard = createItemCard(item);
        biryani.appendChild(itemCard);
        
    })

    chickenData.map(item=>{
        var itemCard = createItemCard(item);
        chicken.appendChild(itemCard)

    })

    PaneerData.map(item=>{
        var itemCard = createItemCard(item);
        paneer.appendChild(itemCard)

    })

    vegetableData.map(item=>{
        var itemCard = createItemCard(item);
        vegetable.appendChild(itemCard)
    
    })

    chineseData.map(item=>{
        var itemCard = createItemCard(item);
        chinese.appendChild(itemCard)
        
    })

    southData.map(item=>{
        var itemCard = createItemCard(item);
        southIndian.appendChild(itemCard)

    })
}
displayItems();


const vegData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(vegData);

function selectTaste(){
    var categoryList= document.getElementById('category-list');

    vegData.map(item=>{
        console.log(item)
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        var listImg= document.createElement('img');
        listImg.src= item.img;
    
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();

//function to add items to cart
function addToCart(item){
    
    var itemToAdd= item.name;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);

    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];
    }
    else if(index > -1){
        alert("Added to cart!");
    }
    
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText=
    ' ' + cartData.length;
    totalAmount();
    cartItems();
}

//function to display items in the cart
function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

//function to add items in favourites
function toggleFavorite(item) {
    var index = favoritesData.indexOf(item);

    if (index === -1) {
        // Add to favorites
        favoritesData.push(item);
        document.getElementById('fav-' + item.id).classList.add('toggle-heart');
        console.log(favoritesData)
    } else {
        // Remove from favorites
        favoritesData.splice(index, 1);
        document.getElementById('fav-' + item.id).classList.remove('toggle-heart');
    }
}
//function to increase the quantity 
function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;
    
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}
//function to decrease the quantity
var currPrice= 0;
function decrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText= ' ' + cartData.length;
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
}
//function to calculate the total amount
function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : $ ' + sum;
    document.getElementById('m-total-amount').innerText= 'Total Price : $ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('cart').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

var flag= false;
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
        console.log(flag)
    }
    else{
        alert("Currently no item in cart!");
    }
}



// window.onresize= window.onload= function(){
//     var size= window.screen.width;
//     console.log(size)
//     if(size<800){
//         var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
//         var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
//         document.getElementById('food-items').remove();
//         document.getElementById('cart-page').remove();
//         document.getElementById('category-header').after(cloneFoodItems);
//         document.getElementById('food-items').after(cloneCartPage);
//         addEvents()
//     }
//     if(size>800){
//         var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
//         document.getElementById('food-items').remove();
//         document.getElementById('header').after(cloneFoodItems);

//         var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
//         document.getElementById('cart-page').remove();
//         document.getElementById('food-items').after(cloneCartPage);
//         addEvents()
//     }
// }

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

document.getElementById('add-address').addEventListener('click',addAddress);

document.getElementById('m-add-address').addEventListener('click',addAddress);
// Add event listener for input event on the search input field
document.getElementById('search-input').addEventListener('input', function(e) {
    const pattern = e.target.value;
    if (pattern.length > 0) {
        searchItems(pattern);
    } else {
        // Clear results if the input is empty
        document.getElementById('search-result').innerHTML = '';
        displayItems()
    }
});

//function to store address
function addAddress(){
    var address= prompt('Enter your address','');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else{
        alert("Address not added")
    }
}
//function to display items in the favorites
function favoriteItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}
