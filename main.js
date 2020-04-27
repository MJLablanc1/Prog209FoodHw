let foodArr = [];
let tracker = document.getElementById("outputbox");
let calcount = document.getElementById("totalout");


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("submit").addEventListener("click", function () {
        console.log("button clicked");

        let name = document.getElementById("food").value;
        console.log(name);
        let quantity = document.getElementById("quantity").value;
        console.log(quantity);
        let calories = document.getElementById("calories").value;
        console.log(calories);

        // Use of console log to check if food data passed correctly

        // Submit button runs three funtions:

        NewFood (name, quantity, calories);        
        UpdateTracker ();
        UpdateTotal ();
       
    });
});

function NewFood (name, quantity, calories){
    console.log("Making new food");
    let foodItem = new Food(name, quantity, calories);
    if  (foodItem.isValid()){
    foodArr.push(foodItem); 
    }
    // If foodItem is not vaild, it misses being pushed and
    // the rest of the functions run with it
}

// Reinitalizes the tracker each time and cycles through the foodArr and display each item
function UpdateTracker() {
    console.log("updating tracker");
    tracker.innerHTML = "";
    for (i = 0; i < foodArr.length; i++) {
        console.log(foodArr[i].name);
        console.log(foodArr[i].quantity);
        console.log(foodArr[i].calories);
        tracker.innerHTML += "<div id = 'outent' >" + foodArr[i].name + "<br/>" + foodArr[i].quantity + "<br/>" + foodArr[i].calories + "</div>";        
    }
}

// Also reinitalizes the total and cycles through foodArr to find the new total
function UpdateTotal() {
    console.log("updating total");
    let total = 0;
    for (let i = 0; i < foodArr.length; i++) {
        total += foodArr[i].calories * foodArr[i].quantity;    
    }
    console.log(total);
    totalout.innerHTML = "Total calories: " + total;
}
