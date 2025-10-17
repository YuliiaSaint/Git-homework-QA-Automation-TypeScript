import { IVehicle } from '../interfaces/i-vehicle';

export class Car implements IVehicle {
    private brand: string;
    private model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public start(): void {
        console.log(`${this.brand} ${this.model} (${this.year}) is starting...`);
    }

    public stop(): void {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }

    public drive(speed: number): void {
        console.log(`${this.brand} ${this.model} is driving at ${speed} km/h`);
    }

    public get Brand(): string {
        return this.brand;
    }

    public get Model(): string {
        return this.model;
    }

    public get Year(): number {
        return this.year;
    }
}