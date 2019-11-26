import React from 'react';
import PropTypes from 'prop-types';

const DetailRow = ({detail}) => (
	<div className='detail-row'>
		<div>
			<label>{detail.label}</label>
			<div>{detail.value}</div>
		</div>
	</div>
);

const Details = ({details, error}) => {
	return (
		<div className='stock-details'>
			{	details.map(detail => (
				<DetailRow key={detail.id} detail={detail} />
			))}
			{	details.length === 0 && error === '' &&
				<div className="section-message">Search for stock details based on stock symbols.</div>
			}
			{	error !== '' &&
				<div className="error-message">{error}</div>
			}
		</div>
		);
}

Details.propTypes = {
    details: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired
};

export default Details;