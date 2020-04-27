let Food = function (pName, pQuantity, pCalories) {
    
    this.name = pName;
    console.log(this.name);
    this.quantity = pQuantity;
    console.log(this.quantity);
    this.calories = pCalories;
    console.log(this.calories);
    console.log("New food made");
}

Food.prototype.isValid = function() {
    
    // Validator will check for name first, then quantity and calorie numbers
    // and throw relevent alerts here for easier code
    if (this.name == "" || this. name == null) {
        window.alert("Food must have a name")
        return false; 
    } else if ( isNaN(this.quantity) || isNaN(this.calories) ) {
        window.alert("Quantity and Calorie must be postive number")
        return false;
    } else if ( this.quantity <= 0 || this.calories <= 0 ) {
        window.alert("Quantity and Calorie must be postive numbers");
        return false;
    } else {
        return true;
    }
}