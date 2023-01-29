// restore the html button in the variable "numberInput" to have the placeholder
// "possible number"
console.dir(numberInput);
numberInput.placeholder="possible number";

// restore the html element in the variable "calculateHighestSalaries" to have the button text
// "Calculate the highest salary"
console.dir(calculateHighestSalaries);
calculateHighestSalaries.children[1].children[0].innerText = 'Calculate highest salary';

// change the salaries which have the value "-999999" to "12823" by accessing the html element
// in the variable "salaryList"
console.dir(salaryList);
salaryList.children[2].children[1].innerText = '12823';
salaryList.children[5].children[1].innerText = '12823';
salaryList.children[9].children[1].innerText = '12823';

// restore the html element in the variable "employeeList" to have the button with the text
// "Find all matching inputs" and "btn-primary" bootstrap design.
console.dir(employeeList);
employeeList.children[2].children[0].innerText = 'Find all matching inputs';
employeeList.children[2].children[0].style.backgroundColor = "blue";
employeeList.children[2].children[0].style.cssText = "background: red; color: white;"; //added just to experiment with various properties setting
employeeList.children[2].children[0].style = "background: green; color: white;"; //added just to experiment with various options


// restore the html element in the variable "employeeList" to contain employee names from
// originalEmployeeData.
console.dir(employeeList);
let originalEmployeeData = [
  "John Smith",
  "Phyllis Duncan",
  "Alexandra Cummings",
  "Ruth Martin",
  "Charissa Kinney",
  "Jared Noel",
  "Mark Osborne",
  "Andrew Johnson",
  "Macy Massey",
  "David Mcdonald",
];

// restore the html element in the variable "salariesInput" to have the original html code
// contained in the div with the id "employeeList" from "index.html".
// After restoring the button with the text "Sum salaries" restore it's click functionality
// to execute the function "sumSalaries".
console.dir(salariesInput);
function sumSalaries() {
  let sum = 0;

  for (let i = 1; i <= 5; i++) {
    let salary = document.ElementById("number-" + i).value;

    sum = sum + parseInt(salary);
  }

  document.ElementById("number-sum").innerText = sum;
}
