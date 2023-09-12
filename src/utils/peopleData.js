const imageContext = require.context("../assets/images", false, /\.png$/);

const peopleData = Array.from({ length: 10 }, (_, i) => ({
  head: imageContext(`./${i + 1}-1.png`),
  body: imageContext(`./${i + 1}-2.png`),
}));

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default peopleData;
