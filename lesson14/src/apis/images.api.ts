const DOGS_BASE_URL = 'https://api.thedogapi.com/v1';

export interface DogImageDto {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds?: { id: number; name: string }[];
}

export interface DogBreedDto {
    id: number;
    name: string;
}

/** headers з apiKey у .env вроді не обов'язково для GET, але хай буде) */
function authHeaders(): Record<string, string> {
    const key = process.env.DOGS_API_KEY?.trim();
    return key ? { 'x-api-key': key } : {};
}

/** GET /breeds */
export async function getDogBreeds(): Promise<DogBreedDto[]> {
    const res = await fetch(`${DOGS_BASE_URL}/breeds`, {
        headers: { ...authHeaders() }
    });
    if (!res.ok) {
        throw new Error(`Breeds failed: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as DogBreedDto[];
}

/** GET /images/search?limit=1 */
export async function searchDogImages(limit = 1): Promise<DogImageDto[]> {
    const url = new URL(`${DOGS_BASE_URL}/images/search`);
    url.searchParams.set('limit', String(limit));

    const res = await fetch(url, { headers: { ...authHeaders() } });
    if (!res.ok) {
        throw new Error(`Images failed: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as DogImageDto[];
}

