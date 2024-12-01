import { Vehicle } from './vehicle';

export class Car extends Vehicle {
    constructor(make: string, model: string, year: number, VIN: string, color: string, weight: number, topSpeed: number, wheelDiameter: number, tireBrand: string) {
        super(make, model, year, VIN, color, weight, topSpeed, wheelDiameter, tireBrand);
    }

    honkHorn() {
        console.log(`${this.make} ${this.model} honks its horn!`);
    }
}

