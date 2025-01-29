"use strict";
var a = 18;
let arr = [1, 2, 3, 4, 5];
let tuple = ["Air", 10];
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPERADMIN"] = "superadmin";
})(userRoles || (userRoles = {}));
userRoles.ADMIN;
var statusCodes;
(function (statusCodes) {
    statusCodes["ABANDOND"] = "abandonded status code 500";
    statusCodes["NOTFOUND"] = "Status code not found";
})(statusCodes || (statusCodes = {}));
statusCodes.NOTFOUND;
// console.log(a);
let b = 10;
function abcd() {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    return sum;
}
function inheritence(obj) {
}
function getDataUser(obj) {
}
function abcdef(obj) {
}
getDataUser({ name: "macbook", email: "app@gmail.com", password: "123456" });
function getdatauser(a, b) {
    a = 12;
    b = "username";
}
class Device {
    constructor() {
        this.name = "Apple";
        this.price = 2000000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
class BottleMarker {
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
}
let newBottle = new BottleMarker("Louis Phille", 50000, "gold", "metal");
class biscuitMaker {
    constructor(brand, flavour, isMaida, price) {
        this.brand = brand;
        this.flavour = flavour;
        this.isMaida = isMaida;
        this.price = price;
    }
}
let darkfantasy = new biscuitMaker("dairy milk", "chocolate", false, 12);
console.log(darkfantasy);
