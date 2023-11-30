export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const objectResolve = { status: 200, body: 'Success' };
    const message = 'The fake API is not working currently';
    if (success === true) {
      resolve(objectResolve);
    } else {
      reject(Error(message));
    }
  });
}
