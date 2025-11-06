import { describe, it, expect } from 'vitest';
import { getRandomJoke, getTenJokes } from '../src/apis/joke.api';

describe('Official Joke API', () => {

    it('returns a random joke with expected shape', async () => {
        const joke = await getRandomJoke();

        // Перевіряємо, що структура відповіді правильна
        expect(joke).toBeTypeOf('object');
        expect(joke).toHaveProperty('id');
        expect(joke).toHaveProperty('type');
        expect(joke).toHaveProperty('setup');
        expect(joke).toHaveProperty('punchline');

        // Перевіряємо типи даних
        expect(typeof joke.id).toBe('number');
        expect(typeof joke.type).toBe('string');
        expect(typeof joke.setup).toBe('string');
        expect(typeof joke.punchline).toBe('string');
    });

    it('returns array of 10 jokes from /random_ten', async () => {
        const jokes = await getTenJokes();

        // Має бути масив
        expect(Array.isArray(jokes)).toBe(true);
        expect(jokes.length).toBe(10);

        // Перевіряємо структуру першого елементу
        const first = jokes[0];
        expect(first).toHaveProperty('id');
        expect(first).toHaveProperty('type');
        expect(first).toHaveProperty('setup');
        expect(first).toHaveProperty('punchline');

        expect(typeof first.id).toBe('number');
        expect(typeof first.type).toBe('string');
        expect(typeof first.setup).toBe('string');
        expect(typeof first.punchline).toBe('string');
    });
});
