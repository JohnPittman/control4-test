import { FETCH_ACCOUNT } from './constants';

export function fetchAccount(accessKey: string): any {
    return {
        type: FETCH_ACCOUNT,
        payload: localStorage.getItem(accessKey)
    };
}
