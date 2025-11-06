export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

// Функція для одного випадкового жарту
export async function getRandomJoke(): Promise<Joke> {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    return res.json();
}

// Функція для масиву з 10 жартів
export async function getTenJokes(): Promise<Joke[]> {
    const res = await fetch('https://official-joke-api.appspot.com/random_ten');
    return res.json();
}
