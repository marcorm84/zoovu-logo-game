export const initSquare = (active, { image, type, key }, index) => ({
  active,
  image,
  key,
  type,
  index,
  droppable: !active,
  match: false,
  activeImage: null,
  activeType: null
});

export const shuffleElements = array =>
  [...array].sort(() => Math.random() - 0.5);
