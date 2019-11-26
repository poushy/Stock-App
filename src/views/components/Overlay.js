import React from 'react';
import PropTypes from 'prop-types';

const Overlay = ({isDisabled}) => {
	return (
		<div className={`overlay ${isDisabled ? 'disable-overlay' : ''}`}>
			Loading Data...
		</div>
	);
}

Overlay.propTypes = {
    isDisabled: PropTypes.bool.isRequired
};

export default Overlay;