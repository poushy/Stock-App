import {get} from '../network/get';
import {actionTypes} from '../reducers/details';
import {getSearchValue} from "../selectors/search";
import SearchState from "../config/SearchState";

const getDetails = () => {
	return (dispatch, getState) => {
		const symbol = getSearchValue(getState());
		dispatch({
			type: actionTypes.SetStatus,
			item: SearchState.Loading
		})
		get('details',{ symbol, query: 'types=quote,company'})
		.then((resp) => {
			dispatch({
				type: actionTypes.LoadDetails,
				item: {
					price: resp.quote.latestPrice,
					description: resp.company.description
				}
			})
		})
		.catch((err) => {
			dispatch({
				type: actionTypes.SetError,
				item: err.message
			})
		})
	}
}

const clearDetails = () => {
	return dispatch => {
		dispatch({
			type: actionTypes.ClearDetails
		});
	}
}

export {
	clearDetails,
	getDetails
}