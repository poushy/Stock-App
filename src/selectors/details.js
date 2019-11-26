import DetailsLabelMap from '../config/DetailsLabelMap';

const getError = state => state.details.error;

const getStockDetails = state => {
	const details = state.details.data;
	if (Object.keys(details).length > 0) {
		const mappings = Object.keys(details).map(id => ({
			id,
			value: details[id] && details[id] !== '' ? details[id] : 'Data Not Found',
			label: DetailsLabelMap[id]
		}));
		const symbol = {
			id: 'symbol',
			value: state.search.value,
			label: DetailsLabelMap['symbol']
		};
		return [symbol, ...mappings];
	} else {
		return [];
	}
}

export {
	getError,
	getStockDetails
}