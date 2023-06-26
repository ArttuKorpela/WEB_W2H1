let button = document.getElementById("submit-data");

const usrnm = document.getElementById("input-username");
const email = document.getElementById("input-email");
const address = document.getElementById("input-address");
const admin = document.getElementById("input-admin");
let checkbox = document.getElementById("input-admin");

let table = document.getElementById("table tr");
let deleteButton = document.getElementById("empty-table");

button.addEventListener("click", function () {
  console.log("Button clicked!");

  if (!ifExist(usrnm.value)) {
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

    let cell5 = document.createElement("td");

    if (fileElem.files.length == 0) {
      cell5.innerHTML ="Add picture"
      newRow.appendChild(cell5);
    } else {
      let profilePic = document.createElement("img");
      profilePic.src = URL.createObjectURL(fileElem.files[0]);
        profilePic.height = 64;
        profilePic.onload = () => {
          URL.revokeObjectURL(profilePic.src);
        };

        cell5.appendChild(profilePic);
        newRow.appendChild(cell5);
    }
      table.appendChild(newRow);
    }


});



deleteButton.addEventListener("click", function () {
  table.innerHTML = "";
});

function ifExist(username) {
  for (let n = 0; n < table.rows.length; n++) {
    if (table.rows[n].cells[0].textContent === username) {
      table.rows[n].cells[1].textContent = email.value;
      table.rows[n].cells[2].textContent = address.value;

      if (checkbox.checked) {
        table.rows[n].cells[3].textContent = "X";
      } else {
        table.rows[n].cells[3].textContent = "-";
      }

      return true;
    }
  }
  return false;
}


const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("#input-image"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
  
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 64;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
      li.appendChild(img);
    }
  }
}

