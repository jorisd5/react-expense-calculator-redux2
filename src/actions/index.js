export const FETCH_COSTS_MONTH = 'FETCH_COSTS_MONTH';

export function fetchCostsMonth(month) {
  // AJAX call to API
  const promise = fetch(`http://localhost:3000/costs/month/${month}`).then(response => response.json());
  return {
    type: FETCH_COSTS_MONTH,
    payload: promise
  };
}
