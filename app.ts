var a = 18;
let arr: number[] = [1,2,3,4,5]
let tuple:[String, Number] = ["Air", 10]

enum userRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPERADMIN = "superadmin",
}

userRoles.ADMIN

enum statusCodes {
    ABANDOND = "abandonded status code 500",
    NOTFOUND = "Status code not found"
}

statusCodes.NOTFOUND
// console.log(a);

let b: Number = 10;

function abcd(): Number{
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2
    return sum;
}

// console.log(abcd);

// function bcd(): never{
//     while(true){

//     }
//     // let d:number = 12;
// }




interface user{
    name: string,
    email: string,
    password: string
    gender?: string
}
// Interface is like face of objects

interface admin extends user{
    head: boolean
}


function inheritence(obj:admin){
    
}

function getDataUser(obj: user){

}

type arg = string | null;
function abcdef(obj:arg){
    
}

getDataUser({name: "macbook", email: "app@gmail.com", password: "123456"})

function getdatauser(a: Number, b: String){
    a = 12;
    b = "username"
}

class Device{
    name = "Apple"
    price = 2000000
    category = "digital"
}

let d1 = new Device();
let d2 = new Device();

class BottleMarker{
    constructor(public brand: String, public price: Number, public color: String, public material: String){

    }
}

let newBottle = new BottleMarker("Louis Phille", 50000, "gold", "metal")

class biscuitMaker{
    public brand;
    public flavour;
    public isMaida;
    public price;
    constructor(brand: string, flavour: string, isMaida:boolean, price: number){
        this.brand = brand;
        this.flavour = flavour;
        this.isMaida = isMaida;
        this.price = price;
    }
}

let darkfantasy = new biscuitMaker("dairy milk", "chocolate", false, 12);

console.log(darkfantasy)