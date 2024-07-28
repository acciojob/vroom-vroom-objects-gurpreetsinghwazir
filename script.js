// write your code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add a prototype method to Car
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Define the SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor with the current instance
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Set up inheritance so SportsCar inherits from Car
SportsCar.prototype = Object.create(Car.prototype);
// Restore the constructor property on SportsCar.prototype
SportsCar.prototype.constructor = SportsCar;

// Add a prototype method to SportsCar
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
