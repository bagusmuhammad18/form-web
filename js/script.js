var form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = "";
  });

  let isValid = true;

  const fName = document.getElementById("fName").value;
  if (!/^[a-zA-Z\s]+$/.test(fName)) {
    document.getElementById("fNameError").textContent =
      "First Name should contain only alphabets.";
    isValid = false;
  }

  const lName = document.getElementById("lName").value;
  if (!/^[a-zA-Z\s]+$/.test(lName)) {
    document.getElementById("lNameError").textContent =
      "Last Name should contain only alphabets.";
    isValid = false;
  }

  const email = document.getElementById("email").value;
  if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  const pNumber = document.getElementById("pNumber").value;
  if (!/^\d+$/.test(pNumber)) {
    document.getElementById("pNumberError").textContent =
      "Phone Number should contain only numbers.";
    isValid = false;
  }

  const address = document.getElementById("address").value;
  if (address.trim() === "") {
    document.getElementById("addressError").textContent =
      "Address is required.";
    isValid = false;
  }

  const dBirth = document.getElementById("dBirth").value;
  if (dBirth === "") {
    document.getElementById("dBirthError").textContent =
      "Date of Birth is required.";
    isValid = false;
  }

  if (isValid) {
    const formData = {
      firstName: fName,
      lastName: lName,
      email: email,
      phoneNumber: pNumber,
      address: address,
      dateOfBirth: dBirth,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    window.location.href = "result.html";
  }
});
