function birthday(date) {
  let birthPath = (date.day[0]+date.day[1]) % 9;
  let secondBirthPath = date.year.reduce((a, b) => a + b, 0);
}
