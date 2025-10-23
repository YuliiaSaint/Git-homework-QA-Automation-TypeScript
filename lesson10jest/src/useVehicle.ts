import { IVehicle } from './interfaces/i-vehicle';

export function useVehicle(vehicle: IVehicle, speed: number): void {
    vehicle.start();
    vehicle.drive(speed);
    vehicle.stop();
}
