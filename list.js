class Item { 
    constructor (name, plu) {
        this.name = name
        this.plu = plu; 
    }
}
// search bar which narrows down all the results as you type in the list

const list = document.getElementById('list');
const search = document.getElementById('search');



let productNames = [ "Apple", "Orange", "Banana", "Pear", "Grape", "Pineapple", "Strawberry", "Blueberry", "Raspberry", "Blackberry", "Watermelon", "Cantaloupe", "Honeydew", "Mango", "Papaya", "Kiwi", "Lemon", "Lime", "Cherry", "Peach", "Plum", "Apricot", "Pomegranate", "Tomato", "Potato", "Onion", "Garlic", "Carrot", "Celery", "Lettuce", "Spinach", "Cucumber", "Broccoli", "Cauliflower", "Asparagus", "Mushroom", "Pepper", "Eggplant", "Zucchini", "Squash", "Cabbage", "Corn", "Beet", "Radish", "Turnip", "Brussels Sprout", "Cranberry", "Pumpkin", "Sweet Potato", "Artichoke", "Avocado", "Chestnut", "Coconut", "Date", "Figs", "Grapefruit", "Jackfruit", "Mandarin", "Nectarine", "Olive", "Pistachio", "Quince", "Raisin", "Tangerine", "Ugli Fruit", "Yam", "Zucchini" ]; 

function makeList(array) { 
    let list = document.getElementById("list");
    for (let i = 0; i < productNames.length; i++) {
     
        let item = document.createElement("li");
 


        item.innerHTML = productNames[i];
        list.appendChild(item);
    }

}


 
makeList(productNames); 


item.addEventListener("click", function() {

    location.href = "product.html/" + productNames[i] ;
});
