import Swal from 'sweetalert2';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

window.Swal = Swal;

const inputRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
btnStartRef.disabled = true;

let selectedDate; 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= options.defaultDate) {
      btnStartRef.disabled = true;
      Swal.fire({
        icon: 'error',
        text: 'Please choose a date in the future',
        timer: 3000,
        timerProgressBar: true,
        confirmButtonColor: '#3085d6',
        backdrop: 'rgba(230,53,53,0.4)',
      });
    }
    if (selectedDates[0] > options.defaultDate) {
      btnStartRef.disabled = false;
    }
    return selectedDate = selectedDates[0];
  },
};

inputRef.flatpickr(options);

btnStartRef.addEventListener('click', setTimer);

function setTimer() {
  const remainingTimeCalculation = setInterval(() => {
    const currentDate = Date.now();
    if (selectedDate > currentDate) {
      btnStartRef.disabled = true;
      return setRemainingTime(convertMs(selectedDate - currentDate));
    }
    Swal.fire({
      title: 'Time is up!',
      width: 500,
      padding: '3em',
      color: '#3085d6',
      confirmButtonColor: '#3085d6',
      backdrop: 'rgba(48,133,214,0.4)',
    });
    clearInterval(remainingTimeCalculation);
  }, 1000);
}

function setRemainingTime({ days, hours, minutes, seconds }) {
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minutesRef.textContent = `${minutes}`;
  secondsRef.textContent = `${seconds}`;
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

//---------------STYLES---------------\\
const timerRef = document.querySelector('.timer')
const fieldRef = document.querySelectorAll('.field');

inputRef.style.textAlign = 'center';
inputRef.style.backgroundColor = '#3085d6';
inputRef.style.color = '#ffffff';
inputRef.style.borderColor = '#000000';
inputRef.style.borderRadius = '5px';
btnStartRef.style.borderRadius = '5px';
timerRef.style.display = 'flex';
for (const field of fieldRef) {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
  field.style.marginRight = '10px';
  field.firstElementChild.style.fontSize = '40px';
}