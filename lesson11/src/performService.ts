import { IServiceable } from './interfaces/i-serviceable';

export function performService(item: IServiceable): void {
    item.service();
}
