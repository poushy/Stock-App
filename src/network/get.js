import NetworkConfig from '../config/NetworkConfig';
import ErrorMessages from '../config/ErrorMessages';

function get(api, params = {}) {
    return fetch(NetworkConfig[api](params))
        .then(function(response) {
        	if (response.status > 200) {
        		const error = ErrorMessages[response.status];
        		throw new Error(error || ErrorMessages.defaultError);
        	}
            return response.json()
        }).then(function(json) {
            return json;
        }).catch(function(error) {
            console.log('Error retrieving data', error)
            throw error;
        });
}

export {
    get
}