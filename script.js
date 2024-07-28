// Complete the js code
function Car(make, model) {
	this.make= make;
	this.model = model;
	getMakeModel(){
		return (this.make, this.model)
	}
	
}

Car.__proto__ = SportsCar;

function SportsCar(make, model, topSpeed) {
	SportsCar.call(Car,make, model)
	
	getTopSpeed(topSpeed){
		this.topSpeed = topSpeed;	
	}
	
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
