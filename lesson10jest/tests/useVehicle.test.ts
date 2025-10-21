// тестуємо функцію useVehicle, яка керує транспортом
//Вона приймає об’єкт vehicle і викликає його методи: start(), drive(speed), stop()
//Перевірити, чи ці методи викликаються у правильному порядку та з правильними параметрами

//jest для створення підроблених mock функцій
import { jest } from '@jest/globals';
//сама функція
import { useVehicle } from '../src/useVehicle';
// тип інтерфейсу,хай буде для структури об’єкта
import { IVehicle } from '../src/interfaces/i-vehicle';

describe('useVehicle function', () => {
    // Тест1 перевіряємо правильну роботу функції, коли швидкість > 0
    test('should call start, drive, and stop once each', () => {
        //Arrange
        //підроблений об’єкт vehicle з тими ж методами, що в реальному класі (start, drive, stop).
        // Jest.fn() фіктивна функціЯ, щоб побачити, чи її викликали і скільки разів.
        const mockVehicle: IVehicle = {
            Brand: 'Toyota',
            Model: 'Corolla',
            Year: 2020,
            start: jest.fn(), // фіктивна функція, імітує запуск двигуна
            drive: jest.fn(), // імітує рух
            stop: jest.fn() // імітує зупинку
        };

        // Act
        // Викликаємо функцію useVehicle, передаючи підроблений об’єкт і швидкість 60
        // Усередині послідовно виклик методів start → drive → stop
        useVehicle(mockVehicle, 60);

        // Assert (перевірка того)
        // всі методи по одному разу:
        expect(mockVehicle.start).toHaveBeenCalledTimes(1); // start() викликано один раз
        expect(mockVehicle.drive).toHaveBeenCalledWith(60); // drive() викликано зі швидкістю 60
        expect(mockVehicle.stop).toHaveBeenCalledTimes(1); // stop() викликано один раз
    });

    // Тест2 ситуація, коли швидкість некоректна (0 або менше )
    // drive() не повинен бути викликаний зовсім
    test('should NOT call drive with wrong speed', () => {
        // Arrange
        // інший мок обєкт для цього тесту
        const mockVehicle: IVehicle = {
            Brand: 'Ford',
            Model: 'Focus',
            Year: 2018,
            start: jest.fn(),
            drive: jest.fn(),
            stop: jest.fn()
        };

        // Act
        // Викликаємо useVehicle з швидкістю 0 і машина не повинна їхати
        useVehicle(mockVehicle, 0);

        // Assert
        // start() і stop() все одно викликаються, але drive() ні
        expect(mockVehicle.start).toHaveBeenCalledTimes(1); // машина стартує
        expect(mockVehicle.drive).not.toHaveBeenCalledWith(60); // не рухається
        expect(mockVehicle.stop).toHaveBeenCalledTimes(1); // потім зупиняється
    });
});
