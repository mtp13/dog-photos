const $gallery = document.querySelector(".gallery");
const $breedSelect = document.querySelector(".breed-select");

const fetchDogBreeds = fetch("https://dog.ceo/api/breeds/list/all");
fetchDogBreeds
  .then((response) => {
    return response.json();
  })
  .then((breedsData) => {
    const breeds = breedsData.message;
    $breedSelect.innerHTML += Object.keys(breeds)
      .map((breed) => `<option value="${breed}">${capitalize(breed)}</option>`)
      .join("");
  })
  .catch((error) => {
    console.error("Error fetching dog breeds", error);
  });

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderDogImages(breed) {
  let url = `https://dog.ceo/api/breed/${breed}/images/random/50`;
  const fetchDogImages = fetch(url);
  fetchDogImages
    .then((response) => {
      return response.json();
    })
    .then((dogData) => {
      const dogUrls = dogData.message;
      $gallery.innerHTML = `${dogUrls
        .map(
          (url, index) =>
            `<a href="${url}"><img src="${url}" alt="dog photo ${
              index + 1
            }"/></a>`
        )
        .join("")}`;
    })
    .catch((error) => {
      console.error("Error fetching dog images", error);
    });
}

$breedSelect.addEventListener("change", (event) => {
  const selectedBreed = event.target.value;
  if (selectedBreed) {
    renderDogImages(selectedBreed);
  }
});

renderDogImages("labrador");
