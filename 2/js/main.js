// eslint-disable-next-line no-unused-vars
const getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// eslint-disable-next-line no-unused-vars
const checkComment = function(comment, maxLenght) {
  return comment.length <= maxLenght;
};
