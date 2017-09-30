function phone(brand, price, color) {
    this.brand = brand;
    this.color = color;
    this.price = price;
}
phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
phone.prototype.applyDiscount = function (discount) {
    this.price -= discount;
}
var iPhone6S = new phone("Apple", 2500, "gold"),
    samsungGalaxyS6 = new phone("Samsung", 2200, "silver"),
    onePlusOne = new phone("OnePlus", 2000, "black"),
    discountAmount = 250;

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
iPhone6S.applyDiscount(discountAmount);
samsungGalaxyS6.applyDiscount(discountAmount);
onePlusOne.applyDiscount(discountAmount);
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();