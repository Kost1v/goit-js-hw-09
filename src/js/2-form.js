const feedbackForm = document.querySelector('.feedback-form');

let formData = { email: '', message: '' };

const fillFormFields = () => {
  const formInfoFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formInfoFromLS === null) {
    return;
  }

  formData = formInfoFromLS;

  for (const key of Object.keys(formInfoFromLS)) {
    feedbackForm.elements[key].value = formInfoFromLS[key];
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  if (
    feedbackForm.elements.email.value === '' ||
    feedbackForm.elements.message.value === ''
  ) {
    alert('Fill please all fields');
  } else {
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {
      email: '',
      message: '',
    };
  }
};

feedbackForm.addEventListener('input', onFormFieldChange);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
