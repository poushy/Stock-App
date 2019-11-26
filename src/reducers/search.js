import SearchState from "../config/SearchState";

export const actionTypes = {
    'LoadSearch': 'LOAD_SEARCH_LIST',
    'SetState': 'SET_SEARCH_STATE',
    'SetValue': 'SET_SEARCH_VALUE',
    'SetError': 'SET_SEARCH_ERROR'
};

const InitialState = {
    value: '',
    list: [],
    status: SearchState.NotLoaded,
    error: ''
};

export default function reducer (state = InitialState, action) {
    switch (action.type) {
        case actionTypes.LoadSearch:
            return {
                ...state,
                list: action.items,
                status: SearchState.Loaded
            };
        case actionTypes.SetState:
            return {
                ...state,
                status: action.item
            };
         case actionTypes.SetValue:
            return {
                ...state,
                value: action.item
            };
        case actionTypes.SetError:
            return {
                ...state,
                error: action.item,
                status: SearchState.Error
            };
        default:
            return state;
    }
}