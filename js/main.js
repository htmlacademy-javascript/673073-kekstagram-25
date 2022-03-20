let getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let checkComment = function(comment, maxLenght) {
  return comment.length <= maxLenght ? true : false
};