export const HISTORY_ACTION = 'HISTORY_ACTION';

export function history(payload) {
    return {
        type: HISTORY_ACTION,
        payload: payload
    }
}