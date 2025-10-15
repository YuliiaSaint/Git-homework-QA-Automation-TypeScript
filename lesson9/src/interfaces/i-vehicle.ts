export interface IVehicle {
    brand: string;
    model: string;
    year: number;

    start(): void;
    stop(): void;
    drive(speed: number): void;
}
