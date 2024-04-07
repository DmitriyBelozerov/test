(function () {
  /**
   * Служебная функция для считывания параметров из адресной строки
   * и определения конфигурации компонента
   * @param  {string} name - имя параметра
   * @return {number} - значение параметра в адресной строке
   */
  const getUrlValue = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(name), 10);
  };

  /**
   * Настройки аккордеона, параметры получаются из командной строки
   *
   * tabs_limit - number, максимальное количество одновременно открытых элементов,
   * по умолчанию 0 - не ограничено
   *
   * Для тестирования работы своего скрипта при разных значениях tabs_limit
   * временно переопределяйте значение переменной, хранящей этот параметр.
   * Либо можете дописыват GET-параметр с нужным значением в конец адресной строки,
   * например: ?tabs_limit=1
   */
  const settings = {
    tabsLimit: getUrlValue('tabs_limit') || 0,
  };

  /* Код компонента пишите ниже */
  let openItems = [];

  const elements = document.querySelectorAll('.accordeon-item-title');
  elements.forEach(elem => elem.addEventListener('click', () => {
    if (settings.tabsLimit === 0) {
      elem.parentNode.classList.toggle('accordeon-item--open');
    } else if (settings.tabsLimit === 1) {
      elements.forEach(el => {
        if (el !== elem) {
          el.parentNode.classList.remove('accordeon-item--open');
        }
      });
    } else if (settings.tabsLimit > 1) {
      // elem.parentNode.classList.toggle('accordeon-item--open');
      if (!elem.parentNode.classList.contains('accordeon-item--open')) {
        openItems.unshift(elem);
      } else {
        openItems = openItems.filter(item => item !== elem);
        elem.parentNode.classList.remove('accordeon-item--open');

      }
      if (openItems.length > 3) {
        openItems[3].parentNode.classList.remove('accordeon-item--open');
        openItems.splice(3);
      }
      openItems.forEach(el => {
        el.parentNode.classList.add('accordeon-item--open');

      });
    }



  }));
})();
