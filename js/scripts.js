function Phone(brand, price, color) {
    this.brand = brand;
    this.color = color;
    this.price = price;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.applyDiscount = function (discount) {
    this.price -= discount;
}
var iPhone6S = new Phone("Apple", 2500, "gold"),
    samsungGalaxyS6 = new Phone("Samsung", 2200, "silver"),
    onePlusOne = new Phone("OnePlus", 2000, "black"),
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
