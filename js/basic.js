let button = document.getElementById("submit-data");

const usrnm = document.getElementById("input-username");
const email = document.getElementById("input-email");
const address = document.getElementById("input-address");
const admin = document.getElementById("input-admin");
let checkbox = document.getElementById("input-admin");

let table = document.getElementById("table-one");
let deleteButton = document.getElementById("delete-data");

button.addEventListener("click", function () {
  console.log("Button clicked!");

  let newRow = document.createElement("tr");
  let cell1 = document.createElement("td");
  cell1.textContent = usrnm.value;
  newRow.appendChild(cell1);

  let cell2 = document.createElement("td");
  cell2.textContent = email.value;
  newRow.appendChild(cell2);

  let cell3 = document.createElement("td");
  cell3.textContent = address.value;
  newRow.appendChild(cell3);

  let cell4 = document.createElement("td");

  if (checkbox.checked) {
    cell4.textContent = "X";
  } else {
    cell4.textContent = "-";
  }
  newRow.appendChild(cell4);
  
  table.appendChild(newRow);
});

deleteButton.addEventListener("click", function () {
  table.remove();
});
