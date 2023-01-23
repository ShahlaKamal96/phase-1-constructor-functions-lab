// Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

// Driver constructor function
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

// PickupLocation constructor function
function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
// create a new scooter
let myScooter = new Scooter(2023, "black", "Vespa");

// create a new driver
let myDriver = new Driver("Shahla Kamal", 26, 5);

// create a new pickup location
let myPickupLocation = new PickupLocation("Kurdistan", "Erbil");
