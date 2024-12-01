"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_1 = require("./vehicle");
class Car extends vehicle_1.Vehicle {
    constructor(make, model, year, VIN, color, weight, topSpeed, wheelDiameter, tireBrand) {
        super(make, model, year, VIN, color, weight, topSpeed, wheelDiameter, tireBrand);
    }
    honkHorn() {
        console.log(`${this.make} ${this.model} honks its horn!`);
    }
}
exports.Car = Car;
