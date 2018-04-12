import { STORE_ACCESS_KEY } from './constants';

export function storeAccessKey(key: string): any {
    return {
        type: STORE_ACCESS_KEY,
        payload: key
    };
}
