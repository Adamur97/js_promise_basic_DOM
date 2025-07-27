const loadData = () => {
  return new Promise(function (resolve, reject) {
    const success = true;

    if (success) {
      resolve('Dane załadowane pomyślnie');
    } else {
      reject(new Error('Wystąpił błąd podczas ładowania danych'));
    }
  });
};

loadData()
  .then((result) => {
    document.body.innerText = result;
  })
  .catch((error) => {
    document.body.innerText = error.message;
  });
