import {
    SET_WATCHERS
} from './actions';

const initialState = {
    selectedWatchers: []
};

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case SET_WATCHERS:
            return {
                ...state,
                selectedWatchers: action.selectedWatchers,
            };
        default:
            return state;
    }
}