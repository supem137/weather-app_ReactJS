export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const code = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        resolve(code);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
