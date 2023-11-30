export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-vars
  return promise.then((response) => ({ status: 200, body: 'Success' })).catch((err) => new Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
