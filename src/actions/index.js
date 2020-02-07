export const FETCH_COSTS = 'FETCH_COSTS';
export const MONTH_NAME = 'MONTH_NAME';

export function monthName() {
  const currentDate = Date.now();
  const options = { month: 'long' };
  const month = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  return {
    type: MONTH_NAME,
    payload: month
  };
}

export function fetchCosts() {
  // AJAX call to API
  const promise = fetch("http://localhost:3000/costs/").then(response => response.json());
  console.log(promise);
  return {
    type: FETCH_COSTS,
    payload: promise
  };
}
