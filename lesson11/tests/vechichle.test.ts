import { expect } from 'chai';
import sinon from 'sinon';
import { Car } from '../src/vehicles/car';
import { Bus } from '../src/vehicles/bus';
import { Motorcycle } from '../src/vehicles/motorcycle';
import { useVehicle } from '../src/useVehicle';
import { performService } from '../src/performService';

describe('Vehicle behaviour tests (lesson11)', () => {
    let myCar: Car;
    let myBus: Bus;
    let myMoto: Motorcycle;

    // Перед кожним тестом нові екземпляри класів
    beforeEach(() => {
        myCar = new Car('Toyota', 'Corolla', 2020);
        myBus = new Bus('Mercedes', 'Citaro', 2018);
        myMoto = new Motorcycle('Honda', 'CBR600', 2019);
    });

    // Після кожного тесту очищаємо всі спайки / моки / стаби
    afterEach(() => {
        sinon.restore();
    });

    // імітуємо методи і перевіряємо, що вони викликались
    it('should call start, drive and stop methods once (mock)', () => {
        // створюємо мок для об’єкта myCar
        const mock = sinon.mock(myCar);

        // очікуємо, що кожен метод буде викликано один раз
        mock.expects('start').once();
        mock.expects('drive').once().withArgs(60); // з аргументом 60
        mock.expects('stop').once();

        // викликаємо функцію, яка використовує ці методи
        useVehicle(myCar, 60);

        // перевіряємо, чи всі очікування справдились
        mock.verify();
    });

    // SPY спостерігаємо, чи був викликаний метод "service" у Bus
    it('should spy on service method of Bus', () => {
        const spy = sinon.spy(myBus, 'service');

        // Викликаємо функцію, яка повинна звертатись до service()
        performService(myBus);

        // Перевіряємо, що service() справді викликався 1 раз
        expect(spy.calledOnce).to.be.true;
    });

    // STUB підмінюємо метод drive() у Motorcycle
    it('should stub drive method of Motorcycle', () => {
        // callsFake створює фейкову функцію (замість справжньої)
        const stub = sinon.stub(myMoto, 'drive').callsFake((speed: number) => {
            console.log(`Fake driving motorcycle at ${speed} km/h`);
        });

        // Викликаємо нашу тестову функцію
        useVehicle(myMoto, 100);

        // Перевіряємо, що підставна функція викликалась з аргументом 100
        expect(stub.calledWith(100)).to.be.true;
    });

    // STUB замінюємо stop(), щоб він повертав значення (а не void)
    it('should replace stop method to return a message (stub)', () => {
        // Використовуємо as any, щоб TS не сварився
        const stub = sinon.stub(myBus as any, 'stop').returns('Bus stopped');

        // Тепер myBus.stop() повертає рядок замість undefined
        const result = myBus.stop();

        // Перевіряємо результат
        expect(result).to.equal('Bus stopped');
    });

    // SPY перевіряємо, що логування відбувається правильно
    it('should log correct message when car starts (spy on console)', () => {
        // Створюємо шпіона на console.log
        const consoleSpy = sinon.spy(console, 'log');

        // Викликаємо метод, який має щось вивести у консоль
        myCar.start();

        // Перевіряємо, що console.log був викликаний з правильним повідомленням
        expect(consoleSpy.calledWith('Toyota Corolla (2020) is starting...')).to.be.true;

        // Відновлюємо поведінку console.log, щоб не впливати на інші тести
        consoleSpy.restore();
    });
});
