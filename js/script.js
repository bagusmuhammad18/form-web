var form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset pesan kesalahan
  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = "";
  });

  // Validasi setiap input
  let isValid = true;

  // First Name harus berisi huruf saja
  const fName = document.getElementById("fName").value;
  if (!/^[a-zA-Z\s]+$/.test(fName)) {
    document.getElementById("fNameError").textContent =
      "First Name should contain only alphabets.";
    isValid = false;
  }

  // Last Name harus berisi huruf saja
  const lName = document.getElementById("lName").value;
  if (!/^[a-zA-Z\s]+$/.test(lName)) {
    document.getElementById("lNameError").textContent =
      "Last Name should contain only alphabets.";
    isValid = false;
  }

  // Email harus berisi email yang valid
  const email = document.getElementById("email").value;
  if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Phone Number harus berisi angka saja dan memiliki panjang antara 8 dan 12 digit
  const pNumber = document.getElementById("pNumber").value;
  if (!/^\d+$/.test(pNumber)) {
    document.getElementById("pNumberError").textContent =
      "Phone Number should contain only numbers.";
    isValid = false;
  } else if (pNumber.length < 7 || pNumber.length > 15) {
    document.getElementById("pNumberError").textContent =
      "Phone Number should be between 7 and 15 digits.";
    isValid = false;
  }

  // Address tidak boleh kosong
  const address = document.getElementById("address").value;
  if (address.trim() === "") {
    document.getElementById("addressError").textContent =
      "Address is required.";
    isValid = false;
  }

  // Date of Birth tidak boleh kosong dan harus kurang dari atau sama dengan tanggal hari ini
  const dBirth = document.getElementById("dBirth").value;
  const today = new Date().toISOString().slice(0, 10); // Mendapatkan tanggal hari ini dalam format YYYY-MM-DD
  if (dBirth === "") {
    document.getElementById("dBirthError").textContent =
      "Date of Birth is required.";
    isValid = false;
  } else if (dBirth > today) {
    document.getElementById("dBirthError").textContent =
      "Date of Birth cannot be in the future.";
    isValid = false;
  }

  // Jika semua validasi lolos, simpan data dan alihkan ke halaman hasil
  if (isValid) {
    const formData = {
      firstName: fName,
      lastName: lName,
      email: email,
      phoneNumber: pNumber,
      address: address,
      dateOfBirth: dBirth,
    };

    // Simpan data dalam localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Alihkan ke halaman baru
    window.location.href = "result.html";
  }
});
