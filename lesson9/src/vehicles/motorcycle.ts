import { IVehicle } from 'src/interfaces/i-vehicle';
export class Motorcycle implements IVehicle {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    start(): void {
        console.log(`${this.brand} ${this.model} is roaring to life...`);
    }

    stop(): void {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }

    drive(speed: number): void {
        console.log(`${this.brand} ${this.model} is riding at ${speed} km/h`);
    }
}
