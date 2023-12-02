const imageSections = document.querySelectorAll('.image-section');
const updateButtons = document.querySelectorAll('.update-button');
const backButton = document.querySelectorAll('.back-button');
let currentImageIndexes = [];

imageSections.forEach((section, index) => {
  const changingImage = section.querySelector('.changing-image');
  currentImageIndexes[index] = 1;

  updateButtons[index].addEventListener('click', () => {
    currentImageIndexes[index] = (currentImageIndexes[index] % 4) + 1;
    changingImage.src = `images/obraz${currentImageIndexes[index]}.png`;
    backButton[index].disabled = false;
  });

  backButton[index].addEventListener('click', () => {
    if (currentImageIndexes[index] === 1) {
      currentImageIndexes[index] = 4;
    } else {
      currentImageIndexes[index]--;
    }
    changingImage.src = `images/obraz${currentImageIndexes[index]}.png`;
    backButton[index].disabled = currentImageIndexes[index] === 1;
  });
});