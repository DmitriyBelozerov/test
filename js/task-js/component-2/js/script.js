(function () {
  // /* Код компонента пишите здесь */
  const phone = document.querySelector('#phone');
  const regex = /(?:\+)[\d\-\(\)\ ]{9,}\d/g;

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

  });





})();
