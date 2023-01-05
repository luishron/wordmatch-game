import confetti from "canvas-confetti";

export function shuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function isSelected(selectedWords, word, column) {
  return selectedWords.some(
    (selectedWord) =>
      selectedWord.word.english === word.english &&
      selectedWord.column === column
  );
}

export const confetyCustom = () => {
  confetti({
    particleCount: 360,
    startVelocity: 50,
    spread: 500,
    origin: { y: 0.5 },
  });
};

export const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};
