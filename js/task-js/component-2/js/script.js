
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

    const roomType = document.querySelector('input[name="room-type"]:checked').value;


    const adults = document.querySelector('#adults');
    const children = document.querySelector('#children');
    const adultsValue = adults.value;
    const childrenValue = children.value;

    function correctResidents() {
      adults.classList.add('field-correct');
      adults.classList.remove('field-error');
      children.classList.add('field-correct');
      children.classList.remove('field-error');
    }

    function errorResidents() {
      adults.classList.add('field-error');
      adults.classList.remove('field-correct');
      children.classList.add('field-error');
      children.classList.remove('field-correct');
    }

    console.log(childrenValue);

    if (roomType === 'single' && adultsValue === '1' && (['0', '1', ''].includes(childrenValue))) {
      correctResidents();
    } else {
      errorResidents();
    }

  });

})();
