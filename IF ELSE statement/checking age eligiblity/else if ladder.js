let age = prompt("Enter the age: ");

age = parseInt(age);

if (age < 0 || age >= 100) {
  document.write("Invalid input");
} else if (age >= 18) {
  document.write("Eligible for vote");
} else {
  document.write("Not eligible for vote");
}
