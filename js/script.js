const editButton = document.getElementById("editButton");

editButton.addEventListener("click", function () {
    editButton.addEventListener("click", function () {
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
});
 