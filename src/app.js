"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const car_1 = require("./car");
const truck_1 = require("./truck");
const motorbike_1 = require("./motorbike");
const vehicles = [];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const option = yield inquirer_1.default.prompt({
                type: 'list',
                name: 'action',
                message: 'SELECT THE OPTIONS:',
                choices: ['ADD VEHICLE', 'LIST VEHICLE', 'EXIT'],
            });
            switch (option.action) {
                case 'ADD VEHICLE':
                    yield addVehicle();
                    break;
                case 'LIST VEHICLE':
                    yield listVehicles();
                    break;
                case 'EXIT':
                    console.log('Exiting the vehicle management system.');
                    process.exit();
                    break;
                default:
                    console.log('Invalid option. Please try again.');
            }
        }
    });
}
function addVehicle() {
    return __awaiter(this, void 0, void 0, function* () {
        const { vehicleType } = yield inquirer_1.default.prompt({
            type: 'list',
            name: 'vehicleType',
            message: 'Select the type of vehicle to add:',
            choices: ['Car', 'Truck', 'Motorbike'],
        });
        let vehicle;
        switch (vehicleType) {
            case 'Car':
                vehicle = yield addCar();
                break;
            case 'Truck':
                vehicle = yield addTruck();
                break;
            case 'Motorbike':
                vehicle = yield addMotorbike();
                break;
        }
        if (vehicle) {
            vehicles.push(vehicle);
            console.log(`Added a new ${vehicleType}: ${vehicle.make} ${vehicle.model} (${vehicle.year})`);
        }
        else {
            console.log(`Failed to add a new ${vehicleType}.`);
        }
    });
}
function addCar() {
    return __awaiter(this, void 0, void 0, function* () {
        const carDetails = yield inquirer_1.default.prompt([
            { type: 'input', name: 'make', message: 'Enter make:' },
            { type: 'input', name: 'model', message: 'Enter model:' },
            { type: 'input', name: 'year', message: 'Enter year:' },
            { type: 'input', name: 'VIN', message: 'Enter VIN:' },
            { type: 'input', name: 'color', message: 'Enter color:' },
            { type: 'input', name: 'weight', message: 'Enter weight:' },
            { type: 'input', name: 'topSpeed', message: 'Enter top speed:' },
            { type: 'input', name: 'wheelDiameter', message: 'Enter wheel diameter (INCHES):' },
            { type: 'input', name: 'tireBrand', message: 'Enter tire brand:' },
        ]);
        return new car_1.Car(carDetails.make, carDetails.model, Number(carDetails.year), carDetails.VIN, // Use the correct property name
        carDetails.color, Number(carDetails.weight), Number(carDetails.topSpeed), Number(carDetails.wheelDiameter), carDetails.tireBrand);
    });
}
function addTruck() {
    return __awaiter(this, void 0, void 0, function* () {
        const truckDetails = yield inquirer_1.default.prompt([
            { type: 'input', name: 'make', message: 'Enter make:' },
            { type: 'input', name: 'model', message: 'Enter model:' },
            { type: 'input', name: 'year', message: 'Enter year:' },
            { type: 'input', name: 'VIN', message: 'Enter VIN:' },
            { type: 'input', name: 'color', message: 'Enter color:' },
            { type: 'input', name: 'weight', message: 'Enter weight:' },
            { type: 'input', name: 'topSpeed', message: 'Enter top speed:' },
            { type: 'input', name: 'wheelDiameter', message: 'Enter wheel diameter (INCHES):' },
            { type: 'input', name: 'tireBrand', message: 'Enter tire brand:' },
            { type: 'input', name: 'towingCapacity', message: 'Enter towing capacity:' },
        ]);
        return new truck_1.Truck(truckDetails.make, truckDetails.model, Number(truckDetails.year), truckDetails.VIN, // Use the correct property name
        truckDetails.color, Number(truckDetails.weight), Number(truckDetails.topSpeed), Number(truckDetails.wheelDiameter), truckDetails.tireBrand, Number(truckDetails.towingCapacity));
    });
}
function addMotorbike() {
    return __awaiter(this, void 0, void 0, function* () {
        const motorbikeDetails = yield inquirer_1.default.prompt([
            { type: 'input', name: 'make', message: 'Enter make:' },
            { type: 'input', name: 'model', message: 'Enter model:' },
            { type: 'input', name: 'year', message: 'Enter year:' },
            { type: 'input', name: 'VIN', message: 'Enter VIN:' },
            { type: 'input', name: 'color', message: 'Enter color:' },
            { type: 'input', name: 'weight', message: 'Enter weight:' },
            { type: 'input', name: 'topSpeed', message: 'Enter top speed:' },
            { type: 'input', name: 'frontWheelDiameter', message: 'Enter FRONT wheel diameter (INCHES):' },
            { type: 'input', name: 'rearWheelDiameter', message: 'Enter REAR wheel diameter (INCHES):' },
            { type: 'input', name: 'tireBrand', message: 'Enter tire brand:' },
        ]);
        return new motorbike_1.Motorbike(motorbikeDetails.make, motorbikeDetails.model, Number(motorbikeDetails.year), motorbikeDetails.VIN, // Use the correct property name
        motorbikeDetails.color, Number(motorbikeDetails.weight), Number(motorbikeDetails.topSpeed), Number(motorbikeDetails.frontWheelDiameter), Number(motorbikeDetails.rearWheelDiameter), motorbikeDetails.tireBrand);
    });
}
function listVehicles() {
    return __awaiter(this, void 0, void 0, function* () {
        if (vehicles.length === 0) {
            console.log('No vehicles found.');
            return;
        }
        const vehicleTypeChoices = vehicles.map((v, index) => {
            return `${index + 1}: ${v.make} ${v.model} (${v.constructor.name})`;
        });
        const vehicleSelection = yield inquirer_1.default.prompt({
            type: 'list',
            name: 'vehicleIndex',
            message: 'Select a vehicle to view details:',
            choices: vehicleTypeChoices,
        });
        /*const selectedVehicle = vehicles[parseInt(vehicleSelection.vehicleIndex.split(':')[0]) - 1];
        showVehicleDetails(selectedVehicle);*/
        const selectedVehicle = vehicles[parseInt(vehicleSelection.vehicleIndex.split(':')[0]) - 1];
        showVehicleDetails(selectedVehicle);
        yield vehicleOperations(selectedVehicle); // Call operations for the selected vehicle
    });
}
function showVehicleDetails(vehicle) {
    console.log('ALL DETAILS OF VEHICLE:');
    console.log(`Make: ${vehicle.make}`);
    console.log(`Model: ${vehicle.model}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`VIN: ${vehicle.VIN}`); // Use the correct property name
    console.log(`Color: ${vehicle.color}`);
    console.log(`Weight: ${vehicle.weight}`);
    console.log(`Top Speed: ${vehicle.topSpeed}`);
    if (vehicle instanceof truck_1.Truck) {
        console.log(`Towing Capacity: ${vehicle.towingCapacity}`);
    }
    else if (vehicle instanceof motorbike_1.Motorbike) {
        console.log(`Front Wheel Diameter: ${vehicle.frontWheelDiameter}`);
        console.log(`Rear Wheel Diameter: ${vehicle.rearWheelDiameter}`);
    }
    else {
        console.log(`Wheel Diameter: ${vehicle.wheelDiameter}`);
    }
    //vehicleOperations(vehicle);
}
/*function vehicleOperations(vehicle: Car | Truck | Motorbike) {
    // Implement operations based on vehicle type...
    console.log('Operation of Vehicle:');
    // Add more operation handling based on the type of vehicle...
}*/
function vehicleOperations(vehicle) {
    return __awaiter(this, void 0, void 0, function* () {
        let engineStarted = false;
        //let engineStarted = true;
        let currentSpeed = 0;
        let vehicleTowed = null;
        // Start Engine function
        function startEngine() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!engineStarted) {
                    engineStarted = true;
                    currentSpeed = 0;
                    console.log(`Engine started. Current speed: 0 MPH.`);
                }
                else {
                    console.log('Engine is already started.');
                }
            });
        }
        // Stop Engine function
        function stopEngine() {
            return __awaiter(this, void 0, void 0, function* () {
                if (engineStarted) {
                    engineStarted = false;
                    currentSpeed = 0;
                    console.log('Engine stopped. Current speed: 0 MPH.');
                }
                else {
                    console.log('Engine is already stopped.');
                }
            });
        }
        // Accelerate function
        function accelerate() {
            return __awaiter(this, void 0, void 0, function* () {
                if (engineStarted) {
                    if (currentSpeed < vehicle.topSpeed) {
                        currentSpeed += 10;
                        if (currentSpeed > vehicle.topSpeed)
                            currentSpeed = vehicle.topSpeed;
                        console.log(`Accelerating. Current speed: ${currentSpeed} MPH.`);
                    }
                    else {
                        console.log('Already at top speed.');
                    }
                }
                else {
                    console.log('Cannot accelerate, engine is off.');
                }
            });
        }
        // Deaccelerate function
        function deaccelerate() {
            return __awaiter(this, void 0, void 0, function* () {
                if (engineStarted) {
                    if (currentSpeed > 0) {
                        currentSpeed -= 10;
                        if (currentSpeed < 0)
                            currentSpeed = 0;
                        console.log(`Deaccelerating. Current speed: ${currentSpeed} MPH.`);
                    }
                    else {
                        console.log('Already at zero speed.');
                    }
                }
                else {
                    console.log('Cannot deaccelerate, engine is off.');
                }
            });
        }
        // Pop Wheelie (only for Motorbikes)
        function popWheelie() {
            return __awaiter(this, void 0, void 0, function* () {
                if (vehicle instanceof motorbike_1.Motorbike && engineStarted) {
                    console.log('Performing a wheelie!');
                }
                else if (!(vehicle instanceof motorbike_1.Motorbike)) {
                    console.log('Only motorbikes can perform a wheelie.');
                }
                else {
                    console.log('Cannot pop a wheelie, engine is off.');
                }
            });
        }
        // Tow Vehicle (only for Trucks)
        function towVehicle() {
            return __awaiter(this, void 0, void 0, function* () {
                if (vehicle instanceof truck_1.Truck && engineStarted) {
                    const vehiclesToTow = vehicles.filter(v => v !== vehicle); // Exclude the current truck
                    const { vehicleIndex } = yield inquirer_1.default.prompt({
                        type: 'list',
                        name: 'vehicleIndex',
                        message: 'Select a vehicle to tow:',
                        choices: vehiclesToTow.map((v, index) => `${index + 1}: ${v.make} ${v.model} (${v.constructor.name})`),
                    });
                    vehicleTowed = vehiclesToTow[parseInt(vehicleIndex.split(':')[0]) - 1];
                    console.log(`${vehicle.make} ${vehicle.model} is now towing ${vehicleTowed === null || vehicleTowed === void 0 ? void 0 : vehicleTowed.make} ${vehicleTowed === null || vehicleTowed === void 0 ? void 0 : vehicleTowed.model}`);
                }
                else {
                    console.log('Only trucks can tow vehicles, and the engine must be running.');
                }
            });
        }
        // List of operations
        const actions = ['START ENGINE', 'STOP ENGINE', 'ACCELERATE', 'DEACCELERATE'];
        if (vehicle instanceof motorbike_1.Motorbike) {
            actions.push('POPWHEELIE');
        }
        if (vehicle instanceof truck_1.Truck) {
            actions.push('WANT TO TOW VEHICLE');
        }
        actions.push('BACK');
        // Prompt the user for an operation
        const answer = yield inquirer_1.default.prompt({
            type: 'list',
            name: 'action',
            message: 'Select an operation:',
            choices: actions,
        });
        // Handle the selected operation
        switch (answer.action) {
            case 'START ENGINE':
                yield startEngine();
                break;
            case 'STOP ENGINE':
                yield stopEngine();
                break;
            case 'ACCELERATE':
                yield accelerate();
                break;
            case 'DEACCELERATE':
                yield deaccelerate();
                break;
            case 'POPWHEELIE':
                yield popWheelie();
                break;
            case 'WANT TO TOW VEHICLE':
                yield towVehicle();
                break;
            case 'BACK':
                console.log('Going back to Main Menu...');
                //await listVehicles(); // Go back to list of vehicles
                //main();
                return; // Exit the current vehicle operation flow
            default:
                console.log('Invalid option.');
        }
        yield vehicleOperations(vehicle);
    });
}
main();
