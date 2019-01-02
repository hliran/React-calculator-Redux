import * as HistoryActions from '../Action/HistoryActions';

const initialState = {
    histo: []
};

function HistoryReducer(state = initialState, action) {
    switch (action.type) {
        case HistoryActions.HISTORY_ACTION: {
            return {
                histo: [
                    ...state.histo,
                    action.payload.history
                ]
            }
        }

        default:
            return state;
    }
}
export default HistoryReducer;