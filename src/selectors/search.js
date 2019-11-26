import SearchState from "../config/SearchState";
import {createSelector} from "reselect";

const getList = state => state.search.list;

const getError = state => state.search.error;

const getSearchList = createSelector(
	getList,
	list => list.map(l => ({label: l, value: l}))
);

const getSearchValue = state => state.search.value;

const isSearchDisabled = state => 
			state.search.status === SearchState.NotLoaded ||
			state.search.status === SearchState.Error ||
			state.details.status === SearchState.Loading;

const getPlaceHolderText = state => 
			state.search.status === SearchState.NotLoaded ? 
			'Loading...' : 'Select or type in stock symbols'

export {
	isSearchDisabled,
	getError,
	getPlaceHolderText,
	getSearchList,
	getSearchValue
}