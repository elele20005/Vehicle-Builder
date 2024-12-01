"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(make, model, year, VIN, color, weight, topSpeed, wheelDiameter, tireBrand) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.VIN = VIN;
        this.color = color;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheelDiameter = wheelDiameter;
        this.tireBrand = tireBrand;
        this.speed = 0;
        this.isEngineRunning = false;
    }
    startEngine() {
        this.isEngineRunning = true;
        console.log('Engine started.');
    }
    stopEngine() {
        this.isEngineRunning = false;
        this.speed = 0;
        console.log('Engine stopped.');
    }
    accelerate() {
        if (this.speed + 10 <= this.topSpeed) {
            this.speed += 10;
            console.log(`Accelerating... Current speed: ${this.speed} MPH`);
        }
        else {
            console.log('Cannot exceed top speed!');
        }
    }
    deaccelerate() {
        if (this.speed - 10 >= 0) {
            this.speed -= 10;
            console.log(`Deaccelerating... Current speed: ${this.speed} MPH`);
        }
        else {
            console.log('Speed cannot be negative!');
        }
    }
    isEngineOn() {
        return this.isEngineRunning;
    }
}
exports.Vehicle = Vehicle;
