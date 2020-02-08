export const FETCH_COSTS_MONTH = 'FETCH_COSTS_MONTH';
export const MONTH_NAME = 'MONTH_NAME';
export const MONTH_NUMBER = 'MONTH_NUMBER';

const currentDate = new Date();
const numberOfMonth = currentDate.getMonth();
console.log(numberOfMonth);

export function monthNumber() {
  return {
    type: MONTH_NUMBER,
    payload: numberOfMonth
  };
}

export function monthName() {
  const options = { month: 'long' };
  const nameOfMonth = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  return {
    type: MONTH_NAME,
    payload: nameOfMonth
  };
}

export function fetchCostsMonth(month) {
  // AJAX call to API
  const promise = fetch(`http://localhost:3000/costs/month/${month}`).then(response => response.json());
  console.log(promise);
  return {
    type: FETCH_COSTS_MONTH,
    payload: promise
  };
}
