document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    registerEvents();
  }
};

function registerEvents() {
  document.querySelector('.submit-button').addEventListener('click', () => {
    if (validateForm()) {
        clearForm();
    }
  });
}

function clearForm() {
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#telephone').value = '';
}

function validateForm() {
  const firstNameValid = !!document.querySelector('#firstName').value.trim();
  displayError('firstName', !firstNameValid);

  const lastNameValid = !!document.querySelector('#lastName').value.trim();
  displayError('lastName', !lastNameValid);

  const emailValid = !!ValidateEmail(
    document.querySelector('#email').value.trim()
  );
  displayError('email', !emailValid);

  const telephoneValid = !!document.querySelector('#telephone').value.trim();
  displayError('telephone', !telephoneValid);

  return firstNameValid && lastNameValid && emailValid && telephoneValid;
}

function displayError(elem, isError) {
  let displayType = isError ? 'block' : 'none';
  let border = isError ? '2px solid hsl(0, 100%, 74%)' : '2px solid hsl(246, 25%, 77%, 0.3)';

  document.querySelector(`.error-text.${elem}`).style.display = displayType;
  document.querySelector(`#${elem}+.err-icon`).style.display = displayType;
  document.querySelector(`#${elem}`).style.border = border;

  if (elem == 'email' && !!isError) {
    document.querySelector(`#${elem}`).style.color = 'hsl(0, 100%, 74%)';
  }
  else if (elem == 'email' && !isError) {
    document.querySelector(`#${elem}`).style.color = 'hsl(249, 10%, 26%)';
  }
}

function ValidateEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
