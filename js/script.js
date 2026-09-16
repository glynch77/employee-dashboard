

// 6 questions to ask before coding a new feature
// 1. What data do we need?
// 2. Whre does the data  go?
// 3. Wwne should the JavaScript run?
// 4. When should it run?
// 5. How does JS get the data?
// 6. How does JS display or use the data?

const addEmployeeModalEl = document.getElementById("addEmployeeModal");

addEmployeeModalEl.addEventListener("hide.bs.modal", function () {
  if (document.activeElement) {
    document.activeElement.blur();
  }
});

const addEmployeeButton = document.getElementById("addEmployeeButton");


addEmployeeButton.addEventListener("click", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("modalFirstName").value;
    const lastName = document.getElementById("modalLastName").value;
    const employeePosition = document.getElementById("modalPosition").value;
    const email = document.getElementById("modalEmail").value;
    const address = document.getElementById("modalAddress").value;
    const address2 = document.getElementById("modalAddress2").value;
    const city = document.getElementById("modalCity").value;
    const state = document.getElementById("modalState").value;
    const zip = document.getElementById("modalZip").value;
    console.log(modalState);
   

    document.getElementById("inputFirstName4").value = firstName;
    document.getElementById("inputLastName4").value = lastName;
    document.getElementById("inputPosition").value = employeePosition;
    document.getElementById("inputEmail4").value = email;
    document.getElementById("inputAddress").value = address;
    document.getElementById("inputAddress2").value = address2;
    document.getElementById("inputCity").value = city;
    document.getElementById("inputState").value = state;
    document.getElementById("inputZip").value = zip;

    // Close the modal
  const modalInstance = bootstrap.Modal.getInstance(addEmployeeModalEl);
  modalInstance.hide();

  // Reset the modal form so it's blank next time it opens
  document.getElementById("addEmployeeForm").reset();
});



const editButton = document.getElementById("editButton");

editButton.addEventListener("click", function (event) {
    event.preventDefault();
  const employeeForm = document.getElementById("employeeForm");
  const inputFields = employeeForm.querySelectorAll("input.form-control, select.form-select");

  inputFields.forEach(function (field) {
    field.disabled = !field.disabled;
  });

  if (editButton.textContent === "Edit") {
    editButton.textContent = "Save";
  } else {
    editButton.textContent = "Edit";
  }
});

 

