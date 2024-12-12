const $gallery = document.querySelector(".gallery");

const fetchDogData = fetch(
  "https://dog.ceo/api/breed/labrador/images/random/50"
);
fetchDogData
  .then((response) => {
    return response.json();
  })
  .then((dogData) => {
    const dogUrls = dogData.message;
    $gallery.innerHTML = `${dogUrls
      .map((url, index) => `<img src="${url}" alt="dog photo ${index + 1}"/>`)
      .join("")}`;
  });
