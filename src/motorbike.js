"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorbike = void 0;
const vehicle_1 = require("./vehicle");
class Motorbike extends vehicle_1.Vehicle {
    constructor(make, model, year, VIN, color, weight, topSpeed, frontWheelDiameter, rearWheelDiameter, tireBrand) {
        super(make, model, year, VIN, color, weight, topSpeed, frontWheelDiameter, tireBrand);
        this.frontWheelDiameter = frontWheelDiameter;
        this.rearWheelDiameter = rearWheelDiameter;
    }
    popWheelie() {
        console.log(`${this.make} ${this.model} pops a wheelie!`);
    }
}
exports.Motorbike = Motorbike;
