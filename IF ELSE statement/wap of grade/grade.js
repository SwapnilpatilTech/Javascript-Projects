let grade = prompt("enter value");
garde = parseInt(grade);

if (grade >= 101) {
  document.write("Enter valid number");
} else if (grade >= 90 && grade <= 100) {
  document.write("garde A+");
} else if (grade >= 80 && grade <= 89) {
  document.write("garde A");
} else if (grade >= 70 && grade <= 79) {
  document.write("garde B");
} else if (grade >= 60 && grade <= 45) {
  document.write("garde D");
} else if (grade >= 33 && grade <= 44) {
  document.write("garde D");
} else {
  document.write("Fail");
}
