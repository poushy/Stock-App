const baseUrl = 'https://cloud.iexapis.com/stable';
const key = 'pk_753d4b90246f4ecbb33273272e705248';
const NetworkConfig = {
	symbols: () => `${baseUrl}/ref-data/symbols?token=${key}`,
	details:  (params) => `${baseUrl}/stock/${params.symbol}/batch?token=${key}&${params.query}`
};
export default NetworkConfig;