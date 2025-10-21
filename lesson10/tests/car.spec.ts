import { expect } from 'chai';
import { Car } from '../src/vehicles/car';

describe('Car class', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car('Toyota', 'Corolla', 2020);
    });

    it('should return correct brand', () => {
        expect(car.Brand).to.equal('Toyota');
    });

    it('should return correct model', () => {
        expect(car.Model).to.equal('Corolla');
    });

    it('should return correct year', () => {
        expect(car.Year).to.equal(2020);
    });
});
