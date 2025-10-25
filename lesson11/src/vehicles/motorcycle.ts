import { IVehicle } from 'src/interfaces/i-vehicle';
export class Motorcycle implements IVehicle {
    private brand: string;
    private model: string;
    private year: number;
    public constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public start(): void {
        console.log(`${this.brand} ${this.model} (${this.year}) is roaring to life...`);
    }

    public stop(): void {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }

    public drive(speed: number): void {
        console.log(`${this.brand} ${this.model} is riding at ${speed} km/h`);
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
