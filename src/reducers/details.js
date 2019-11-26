import SearchState from "../config/SearchState";

export const actionTypes = {
    'LoadDetails': 'LOAD_DETAILS',
    'SetStatus': 'SET_DETAILS_STATUS',
     'SetError': 'SET_DETAILS_ERROR',
     'ClearDetails': 'CLEAR_DETAILS'
};

const InitialState = {
    data: {},
    status: SearchState.NotLoaded,
    error: ''
};

export default function reducer (state = InitialState, action) {
    switch (action.type) {
        case actionTypes.LoadDetails:
            return {
                ...state,
                data: action.item,
                status: SearchState.Loaded
            };
        case actionTypes.ClearDetails:
            return {
                ...state,
                data: {},
                error: '',
                status: SearchState.NotLoaded
            };
         case actionTypes.SetStatus:
            return {
                ...state,
                status: action.item
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