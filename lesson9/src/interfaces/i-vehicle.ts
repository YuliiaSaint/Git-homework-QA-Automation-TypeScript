export interface IVehicle {
    get Brand(): string;
    get Model(): string;
    get Year(): number;

    start(): void;
    stop(): void;
    drive(speed: number): void;
}