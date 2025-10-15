import { IVehicle } from './interfaces/i-vehicle';
import { Car } from './vehicles/car';
import { Motorcycle } from './vehicles/motorcycle';
import { Bus } from './vehicles/bus';

// Функція, яка працює з будь яким транспортом (DIP)
function useVehicle(vehicle: IVehicle): void {
    vehicle.start();
    vehicle.drive(80);
    vehicle.stop();
}

// Створюємо екземпляри класів
const myCar = new Car('Toyota', 'Corolla', 2020);
const myMoto = new Motorcycle('Honda', 'CBR600', 2018);
const myBus = new Bus('Mercedes', 'Citaro', 2018);
// Викликаємо функцію з різними екземплярами
useVehicle(myCar);
useVehicle(myMoto);
useVehicle(myBus);
