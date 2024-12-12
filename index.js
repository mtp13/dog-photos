const $gallery = document.querySelector(".gallery");

const fetchDogData = fetch(
  "https://api.thedogapi.com/v1/images/search?limit=10"
);
fetchDogData
  .then((response) => {
    return response.json();
  })
  .then((dogData) => {
    const dogUrls = dogData.map((dog) => dog.url);
    $gallery.innerHTML = `${dogUrls
      .map((url, index) => `<img src="${url}" alt="dog photo ${index + 1}"/>`)
      .join("")}`;
  });
