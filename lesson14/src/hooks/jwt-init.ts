export async function setup(): Promise<void> {
    console.log('Global setup for JWT initialization');
}

export async function teardown(): Promise<void> {
    console.log('Global teardown after tests');
}
