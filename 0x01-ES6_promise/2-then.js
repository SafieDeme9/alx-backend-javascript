export default function handleResponseFromAPI(promise) {
  const objectResolve = { status: 200, body: 'Success' };
  promise.then(() => objectResolve).catch(() => Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
