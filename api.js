const product = {
  debug: 'B) Data from API successfully displayed'
};

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(product);
    }, 3000);
  });
};
