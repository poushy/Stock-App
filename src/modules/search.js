import {get} from '../network/get';
import {actionTypes} from '../reducers/search';
import {getDetails, clearDetails} from './details';

const getSymbols = () => {
	return dispatch => {
		get('symbols')
		.then((resp) => {
			dispatch({
				type: actionTypes.LoadSearch,
				items: resp.map(stock => stock.symbol)
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

const setValue = (selected) => {
	return dispatch => {
		dispatch(clearDetails());
		dispatch({
			type: actionTypes.SetValue,
			item: selected ? selected.value : ''
		});

		if (selected) {
			dispatch(getDetails());
		}
	}
}

export {
	getSymbols,
	setValue
}