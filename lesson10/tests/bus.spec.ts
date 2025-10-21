import { expect } from 'chai';
import { Bus } from '../src/vehicles/bus';

describe('Bus class', () => {
    let bus: Bus;

    beforeEach(() => {
        bus = new Bus('Mercedes', 'Sprinter', 2018);
    });

    it('should return correct brand', () => {
        expect(bus.Brand).to.equal('Mercedes');
    });

    it('should return correct model', () => {
        expect(bus.Model).to.equal('Sprinter');
    });

    it('should return correct year', () => {
        expect(bus.Year).to.equal(2018);
    });

    it('should NOT return wrong year', () => {
        expect(bus.Year).to.not.equal(2020);
    });
});
