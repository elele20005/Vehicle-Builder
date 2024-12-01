import { Vehicle } from './vehicle';

export class Motorbike extends Vehicle {
    frontWheelDiameter: number;
    rearWheelDiameter: number;

    constructor(make: string, model: string, year: number, VIN: string, color: string, weight: number, topSpeed: number, frontWheelDiameter: number, rearWheelDiameter: number, tireBrand: string) {
        super(make, model, year, VIN, color, weight, topSpeed, frontWheelDiameter, tireBrand);
        this.frontWheelDiameter = frontWheelDiameter;
        this.rearWheelDiameter = rearWheelDiameter;
    }

    popWheelie() {
        console.log(`${this.make} ${this.model} pops a wheelie!`);
    }
}

