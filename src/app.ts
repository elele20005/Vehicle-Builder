import inquirer from 'inquirer';
import { Car } from './car';
import { Truck } from './truck';
import { Motorbike } from './motorbike';

const vehicles: Array<Car | Truck | Motorbike> = [];

    let engineStarted = false;
    //let engineStarted = true;
    let currentSpeed = 0;
    let vehicleTowed: Car | Truck | Motorbike | null = null;

async function main() {
    while (true) {
        const option = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'SELECT THE OPTIONS:',
            choices: ['ADD VEHICLE', 'LIST VEHICLE', 'EXIT'],
        });

        switch (option.action) {
            case 'ADD VEHICLE':
                await addVehicle();
                break;
            case 'LIST VEHICLE':
                await listVehicles();
                break;
            case 'EXIT':
                console.log('Exiting the vehicle management system.');
                process.exit();
                break;
            default:
                console.log('Invalid option. Please try again.');
        }
    }
}

async function addVehicle() {
    const { vehicleType } = await inquirer.prompt({
        type: 'list',
        name: 'vehicleType',
        message: 'Select the type of vehicle to add:',
        choices: ['Car', 'Truck', 'Motorbike'],
    });

    let vehicle;

    switch (vehicleType) {
        case 'Car':
            vehicle = await addCar();
            break;
        case 'Truck':
            vehicle = await addTruck();
            break;
        case 'Motorbike':
            vehicle = await addMotorbike();
            break;
    }

    if (vehicle) {
        vehicles.push(vehicle);
        console.log(`Added a new ${vehicleType}: ${vehicle.make} ${vehicle.model} (${vehicle.year})`);
    } else {
        console.log(`Failed to add a new ${vehicleType}.`);
    }
}

async function addCar() {
    const carDetails = await inquirer.prompt([
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

    return new Car(
        carDetails.make,
        carDetails.model,
        Number(carDetails.year),
        carDetails.VIN,  // Use the correct property name
        carDetails.color,
        Number(carDetails.weight),
        Number(carDetails.topSpeed),
        Number(carDetails.wheelDiameter),
        carDetails.tireBrand
    );
}

async function addTruck() {
    const truckDetails = await inquirer.prompt([
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

    return new Truck(
        truckDetails.make,
        truckDetails.model,
        Number(truckDetails.year),
        truckDetails.VIN,  // Use the correct property name
        truckDetails.color,
        Number(truckDetails.weight),
        Number(truckDetails.topSpeed),
        Number(truckDetails.wheelDiameter),
        truckDetails.tireBrand,
        Number(truckDetails.towingCapacity)
    );
}

async function addMotorbike() {
    const motorbikeDetails = await inquirer.prompt([
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

    return new Motorbike(
        motorbikeDetails.make,
        motorbikeDetails.model,
        Number(motorbikeDetails.year),
        motorbikeDetails.VIN,  // Use the correct property name
        motorbikeDetails.color,
        Number(motorbikeDetails.weight),
        Number(motorbikeDetails.topSpeed),
        Number(motorbikeDetails.frontWheelDiameter),
        Number(motorbikeDetails.rearWheelDiameter),
        motorbikeDetails.tireBrand
    );
}

async function listVehicles() {
    if (vehicles.length === 0) {
        console.log('No vehicles found.');
        return;
    }

    const vehicleTypeChoices = vehicles.map((v, index) => {
        return `${index + 1}: ${v.make} ${v.model} (${v.constructor.name})`;
    });

    const vehicleSelection = await inquirer.prompt({
        type: 'list',
        name: 'vehicleIndex',
        message: 'Select a vehicle to view details:',
        choices: vehicleTypeChoices,
    });

    /*const selectedVehicle = vehicles[parseInt(vehicleSelection.vehicleIndex.split(':')[0]) - 1];
    showVehicleDetails(selectedVehicle);*/
    
    const selectedVehicle = vehicles[parseInt(vehicleSelection.vehicleIndex.split(':')[0]) - 1];
    showVehicleDetails(selectedVehicle);
    await vehicleOperations(selectedVehicle); // Call operations for the selected vehicle

}

function showVehicleDetails(vehicle: Car | Truck | Motorbike) {
    console.log('ALL DETAILS OF VEHICLE:');
    console.log(`Make: ${vehicle.make}`);
    console.log(`Model: ${vehicle.model}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`VIN: ${vehicle.VIN}`);  // Use the correct property name
    console.log(`Color: ${vehicle.color}`);
    console.log(`Weight: ${vehicle.weight}`);
    console.log(`Top Speed: ${vehicle.topSpeed}`);
    
    if (vehicle instanceof Truck) {
        console.log(`Towing Capacity: ${vehicle.towingCapacity}`);
    } else if (vehicle instanceof Motorbike) {
        console.log(`Front Wheel Diameter: ${vehicle.frontWheelDiameter}`);
        console.log(`Rear Wheel Diameter: ${vehicle.rearWheelDiameter}`);
    } else {
        console.log(`Wheel Diameter: ${vehicle.wheelDiameter}`);
    }

    //vehicleOperations(vehicle);
}

/*function vehicleOperations(vehicle: Car | Truck | Motorbike) {
    // Implement operations based on vehicle type...
    console.log('Operation of Vehicle:');
    // Add more operation handling based on the type of vehicle...
}*/

async function vehicleOperations(vehicle: Car | Truck | Motorbike) {
    /*let engineStarted = false;
    //let engineStarted = true;
    let currentSpeed = 0;
    let vehicleTowed: Car | Truck | Motorbike | null = null;*/

    // Start Engine function
    async function startEngine() {
        if (!engineStarted) {
            engineStarted = true;
            currentSpeed = 0;
            console.log(`Engine started. Current speed: 0 MPH.`);
        } else {
            console.log('Engine is already started.');
        }
    }

    // Stop Engine function
    async function stopEngine() {
        if (engineStarted) {
            engineStarted = false;
            currentSpeed = 0;
            console.log('Engine stopped. Current speed: 0 MPH.');
        } else {
            console.log('Engine is already stopped.');
        }
    }

    // Accelerate function
    async function accelerate() {
        if (engineStarted) {
            if (currentSpeed < vehicle.topSpeed) {
                currentSpeed += 10;
                if (currentSpeed > vehicle.topSpeed) currentSpeed = vehicle.topSpeed;
                console.log(`Accelerating. Current speed: ${currentSpeed} MPH.`);
            } else {
                console.log('Already at top speed.');
            }
        } else {
            console.log('Cannot accelerate, engine is off.');
        }
    }

    // Deaccelerate function
    async function deaccelerate() {
        if (engineStarted) {
            if (currentSpeed > 0) {
                currentSpeed -= 10;
                if (currentSpeed < 0) currentSpeed = 0;
                console.log(`Deaccelerating. Current speed: ${currentSpeed} MPH.`);
            } else {
                console.log('Already at zero speed.');
            }
        } else {
            console.log('Cannot deaccelerate, engine is off.');
        }
    }

    // Pop Wheelie (only for Motorbikes)
    async function popWheelie() {
        if (vehicle instanceof Motorbike && engineStarted) {
            console.log('Performing a wheelie!');
        } else if (!(vehicle instanceof Motorbike)) {
            console.log('Only motorbikes can perform a wheelie.');
        } else {
            console.log('Cannot pop a wheelie, engine is off.');
        }
    }

    // Tow Vehicle (only for Trucks)
    async function towVehicle() {
        if (vehicle instanceof Truck && engineStarted) {
            const vehiclesToTow = vehicles.filter(v => v !== vehicle); // Exclude the current truck
            const { vehicleIndex } = await inquirer.prompt({
                type: 'list',
                name: 'vehicleIndex',
                message: 'Select a vehicle to tow:',
                choices: vehiclesToTow.map((v, index) => `${index + 1}: ${v.make} ${v.model} (${v.constructor.name})`),
            });
            vehicleTowed = vehiclesToTow[parseInt(vehicleIndex.split(':')[0]) - 1];
            console.log(`${vehicle.make} ${vehicle.model} is now towing ${vehicleTowed?.make} ${vehicleTowed?.model}`);
        } else {
            console.log('Only trucks can tow vehicles, and the engine must be running.');
        }
    }

    // List of operations
    const actions = ['START ENGINE', 'STOP ENGINE', 'ACCELERATE', 'DEACCELERATE'];

    if (vehicle instanceof Motorbike) {
        actions.push('POPWHEELIE');
    }

    if (vehicle instanceof Truck) {
        actions.push('WANT TO TOW VEHICLE');
    }

    actions.push('BACK');

    // Prompt the user for an operation
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Select an operation:',
        choices: actions,
    });

    // Handle the selected operation
    switch (answer.action) {
        case 'START ENGINE':
            await startEngine();
            break;
        case 'STOP ENGINE':
            await stopEngine();
            break;
        case 'ACCELERATE':
            await accelerate();
            break;
        case 'DEACCELERATE':
            await deaccelerate();
            break;
        case 'POPWHEELIE':
            await popWheelie();
            break;
        case 'WANT TO TOW VEHICLE':
            await towVehicle();
            break;
        case 'BACK':
            console.log('Going back to Main Menu...');
            //await listVehicles(); // Go back to list of vehicles
            //main();
            return; // Exit the current vehicle operation flow
        default:
            console.log('Invalid option.');
    }

   
    await vehicleOperations(vehicle); 
}


main();
