export interface IVehicle {
    start(): void;
    drive(speed: number): void;
    stop(): void;
}

export function useVehicle(vehicle: IVehicle): void {
    vehicle.start();
    vehicle.drive(80);
    vehicle.stop();
}
