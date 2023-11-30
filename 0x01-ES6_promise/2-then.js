export default function handleResponseFromAPI(promise) {
  const objectResolve = { status: 200, body: 'Success' };
  promise.then(() => {
    console.log('Got a response from the API');
    return objectResolve;
  }).catch(() => {
    console.log('Got a response from the API');
    return Error();
  });
}
