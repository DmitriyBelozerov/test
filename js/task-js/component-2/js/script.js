
(function () {
  // /* Код компонента пишите здесь */
  const phone = document.querySelector('#phone');
  const regex = /(?:\+)[\d\-\(\)\ ]{9,}\d/g;

  const inputDayStart = document.querySelector('#checkin-date');
  const inputDayEnd = document.querySelector('#checkout-date');


  const btn = document.querySelector('.submit-btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const phoneValue = phone.value;
    if (regex.test(phoneValue)) {
      phone.classList.add('field-correct');
      phone.classList.remove('field-error');
    } else {
      phone.classList.add('field-error');
      phone.classList.remove('field-correct');
    }

    const dateStart = new Date(inputDayStart.value);
    const dateEnd = new Date(inputDayEnd.value);
    const dateDiffDays = (dateEnd - dateStart) / 1000 / 3600 / 24;

    if (dateDiffDays > 3) {
      inputDayStart.classList.add('field-correct');
      inputDayStart.classList.remove('field-error');
      inputDayEnd.classList.add('field-correct');
      inputDayEnd.classList.remove('field-error');
    } else {
      inputDayStart.classList.add('field-error');
      inputDayStart.classList.remove('field-correct');
      inputDayEnd.classList.add('field-error');
      inputDayEnd.classList.remove('field-correct');
    }
  });





})();
