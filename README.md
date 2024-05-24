# Form Validation Project

This project is a simple HTML form with JavaScript validation for each input field. The form collects user details such as first name, last name, email, phone number, address, and date of birth. The JavaScript code validates each input field according to specific rules, ensuring that the data entered by the user meets the required criteria.

## Validation Check

- First name and last name should contain only alphabets.
- Email must be in a valid email format.
- Phone number must contain only numbers and should be between 7 and 15 digits.
- Address must not be empty.
- Date of birth must not be in the future.

## Usage

1. Clone the repository to your local machine:

```bash
git clone https://github.com/bagusmuhammad18/form-web.git

```

2. Open the `index.html` file in your web browser.

3. Fill out the form fields and submit the form.

4. If there are any validation errors, error messages will be displayed below the respective input fields.

5. If all fields are valid, the form data will be stored in the browser's localStorage and you will be redirected to the result page (`result.html`).

## Technologies Used

- HTML5
- CSS3
- JavaScript

## File Structure

- `index.html`: Main HTML file containing the form.
- `result.html`: Result page displayed after successful form submission.
- `css/style.css`: CSS file for styling the form.
- `js/script.js`: JavaScript file for form validation and data storage.
