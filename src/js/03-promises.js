import Swal from 'sweetalert2';
window.Swal = Swal;

const formRef = document.querySelector('form');
formRef.addEventListener('submit', createPromises);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Fulfilled promise ${position} in ${delay}ms`,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    })
    .catch(({ position, delay }) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Rejected promise ${position} in ${delay}ms`,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    });
}

function createPromises(event) {
  event.preventDefault();

  const firstDelayValue = Number(event.currentTarget.elements.delay.value);
  const delayStepValue = Number(event.currentTarget.elements.step.value);
  const amountValue = Number(event.currentTarget.elements.amount.value);

  for (let i = 0; i < amountValue; i++) {
    const delayCalculation = i * delayStepValue + firstDelayValue;
    createPromise(i + 1, delayCalculation);
  }
}

//---------------STYLES---------------\\
const labelRef = document.querySelectorAll('label');
const inputRef = document.querySelectorAll('input');
const buttonRef = document.querySelector('button');

for (const label of labelRef) {
  label.style.display = 'flex';
  label.style.flexDirection = 'column';
  label.style.fontSize = '18px';
}
for (const input of inputRef) {
  input.style.width = '130px';
  input.style.fontSize = '16px';
  input.style.padding = '5px';
}
buttonRef.style.fontSize = '18px';
buttonRef.style.marginTop = '20px';
buttonRef.style.padding = '5px';
