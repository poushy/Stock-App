const ErrorMessages = {
	400: 'Invalid values in request.  Please check your configuration.',
	401: 'Sorry, you are not authorized to access this data.',
	402: 'Your API request limit has exceeded.  Please try again later or upgrade to higher tier.',
	403: 'The API key used to access this data is invalid or disabled.',
	404: 'We could not find this data.  Please try with some other value.',
	413: 'Maximum number of types have exceeded in this request.',
	429: 'We are getting too many requests at once, please try again later.',
	451: 'You need additional permissions to access this data.',
	500: 'The service is unreachable at this moment.',
	defaultError: 'Something does not look right.  Please try again.'
}	

export default ErrorMessages;