import React from 'react';
import PropTypes from 'prop-types';
import CreatableWindowSelect from '../components/CreatableWindowSelect';

const Search = (props) => {
	const { 
		placeholder, 
		options, 
		onSetValue, 
		error
	} = props;

	return (
		<div className={`stock-search ${error === '' ? '' : 'search-error'}`}>
			<CreatableWindowSelect
		        placeholder={placeholder}
		        onChange={onSetValue}
		        options={options}
		      />
		      {error !== '' && <div className='input-error'>{error}</div>}
		</div>
		);
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onSetValue: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default Search;