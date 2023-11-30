/* eslint no-unused-vars: ["error", { "args": "none" }] */
export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => ({ status: 200, body: 'Success' }))
    .catch((err) => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
