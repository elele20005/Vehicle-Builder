export class Vehicle {
    public speed: number = 0;
    public isEngineRunning: boolean = false;

    constructor(
        public make: string,
        public model: string,
        public year: number,
        public VIN: string,
        public color: string,
        public weight: number,
        public topSpeed: number,
        public wheelDiameter: number,
        public tireBrand: string
    ) {}

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
        } else {
            console.log('Cannot exceed top speed!');
        }
    }

    deaccelerate() {
        if (this.speed - 10 >= 0) {
            this.speed -= 10;
            console.log(`Deaccelerating... Current speed: ${this.speed} MPH`);
        } else {
            console.log('Speed cannot be negative!');
        }
    }

    isEngineOn() {
        return this.isEngineRunning;
    }
}

