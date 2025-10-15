import { IVehicle } from '../interfaces/i-vehicle';

export class Car implements IVehicle {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    start(): void {
        console.log(`${this.brand} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }

    drive(speed: number): void {
        console.log(`${this.brand} ${this.model} is driving at ${speed} km/h`);
    }
}
