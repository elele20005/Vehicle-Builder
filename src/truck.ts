import { Vehicle } from './vehicle';

export class Truck extends Vehicle {
    towingCapacity: number;

    constructor(make: string, model: string, year: number, VIN: string, color: string, weight: number, topSpeed: number, wheelDiameter: number, tireBrand: string, towingCapacity: number) {
        super(make, model, year, VIN, color, weight, topSpeed, wheelDiameter, tireBrand);
        this.towingCapacity = towingCapacity;
    }

    loadCargo() {
        console.log(`${this.make} ${this.model} is loading cargo!`);
    }
}

