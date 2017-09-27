function Phone(brand, price, color) {
    this.brand = brand;
    this.color = color;
    this.price = price;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2500, "gold"),
    SamsungGalaxyS6 = new Phone("Samsung", 2200, "silver"),
    OnePlusOne = new Phone("OnePlus", 2000, "black");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();