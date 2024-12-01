"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const vehicle_1 = require("./vehicle");
class Truck extends vehicle_1.Vehicle {
    constructor(make, model, year, VIN, color, weight, topSpeed, wheelDiameter, tireBrand, towingCapacity) {
        super(make, model, year, VIN, color, weight, topSpeed, wheelDiameter, tireBrand);
        this.towingCapacity = towingCapacity;
    }
    loadCargo() {
        console.log(`${this.make} ${this.model} is loading cargo!`);
    }
}
exports.Truck = Truck;
