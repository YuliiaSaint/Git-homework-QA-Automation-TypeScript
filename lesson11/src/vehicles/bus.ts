import { IVehicle } from '../interfaces/i-vehicle';
import { IServiceable } from '../interfaces/i-serviceable';
export class Bus implements IVehicle, IServiceable {
    private brand: string;
    private model: string;
    private year: number;

    public constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public start(): void {
        console.log(`${this.brand} ${this.model} (${this.year}) is starting the engine...`);
    }

    public stop(): void {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }

    public drive(speed: number): void {
        console.log(`${this.brand} ${this.model} is driving at ${speed} km/h with passengers.`);
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
    //метод з оkремого інтерфейсу (isp)
    public service(): void {
        console.log(`${this.brand} ${this.model} is being serviced.`);
    }
}
