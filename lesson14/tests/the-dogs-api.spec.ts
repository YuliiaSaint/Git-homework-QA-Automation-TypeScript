import { describe, it, expect } from 'vitest';
import { getDogBreeds, searchDogImages } from '../src/apis/images.api';

describe('TheDogAPI (public GETs)', () => {
    it('returns list of dog breeds', async () => {
        const breeds = await getDogBreeds();
        expect(Array.isArray(breeds)).toBe(true);
        expect(breeds.length).toBeGreaterThan(0);

        const first = breeds[0];
        expect(first).toHaveProperty('id');
        expect(first).toHaveProperty('name');
        expect(typeof first.id === 'number' || typeof first.id === 'string').toBe(true);
        expect(typeof first.name).toBe('string');
    });

    it('searches dog images and returns valid structure', async () => {
        const images = await searchDogImages(1);
        expect(Array.isArray(images)).toBe(true);
        expect(images.length).toBeGreaterThan(0);

        const img = images[0];
        expect(img).toHaveProperty('id');
        expect(img).toHaveProperty('url');
        expect(img).toHaveProperty('width');
        expect(img).toHaveProperty('height');

        expect(typeof img.id).toBe('string');
        expect(typeof img.url).toBe('string');
        expect(['number', 'object']).toContain(typeof img.width);
        expect(['number', 'object']).toContain(typeof img.height);
    });
});

