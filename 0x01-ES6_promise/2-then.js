export default function handleResponseFromAPI(promise) {
  promise.then(() => {}).catch(() => Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
