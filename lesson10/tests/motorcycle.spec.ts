import { expect } from 'chai';
import { Motorcycle } from '../src/vehicles/motorcycle';

describe('Motorcycle class', () => {
    let moto: Motorcycle;

    beforeEach(() => {
        moto = new Motorcycle('Yamaha', 'MT-07', 2021);
    });

    it('should return correct brand', () => {
        expect(moto.Brand).to.equal('Yamaha');
    });

    it('should return correct model', () => {
        expect(moto.Model).to.equal('MT-07');
    });

    it('should return correct year', () => {
        expect(moto.Year).to.equal(2021);
    });

    it('should NOT return incorrect brand', () => {
        expect(moto.Brand).to.not.equal('Honda');
    });
});
