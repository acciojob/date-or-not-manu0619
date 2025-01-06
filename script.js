var isDate = function (input) {
  // Match a date in the format YYYY-MM-DD
  return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(input);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
