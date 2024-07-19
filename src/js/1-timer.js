import flatpickr from 'flatpickr';
const flatpickr = require('flatpickr');
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
// const stopBtn = document.querySelector('button[data-action-stop]');
// const clockface = document.querySelector('.js-clockface');

flatpickr('#datetime-picker', {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  minDate: 'today', // Запобігає вибору минулих дат
  defaultDate: new Date(), // Встановлює дату за замовчуванням на сьогодні
});
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
