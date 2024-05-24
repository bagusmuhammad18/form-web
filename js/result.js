const formData = JSON.parse(localStorage.getItem("formData"));

if (formData) {
  const formDataDisplay = document.getElementById("formDataDisplay");

  const dataHtml = `
    <p><strong>First Name:</strong> ${formData.firstName}</p>
    <p><strong>Last Name:</strong> ${formData.lastName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
    <p><strong>Address:</strong> ${formData.address}</p>
    <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
  `;

  formDataDisplay.innerHTML = dataHtml;
} else {
  document.getElementById("formDataDisplay").innerHTML =
    "<p>No data found. Please submit the form first.</p>";
}
