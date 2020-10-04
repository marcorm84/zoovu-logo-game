export const initSquare = (active, { image, type, key }, index) => ({
  active,
  image,
  key,
  type,
  index,
  droppable: !active
});

export const shuffleElements = array =>
  [...array].sort(() => Math.random() - 0.5);

export const isFinished = array => array.every(item => item.active);
