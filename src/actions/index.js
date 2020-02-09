export const FETCH_COSTS_MONTH = 'FETCH_COSTS_MONTH';
export const FETCH_COST = 'FETCH_COST';
export const COST_CREATED = 'COST_CREATED';

export function createCost(body) {
  const request = fetch('http://localhost:3000/costs/month/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: COST_CREATED,
    payload: request
  };
}

export function fetchCostsMonth(month) {
  // AJAX call to API
  const promise = fetch(`http://localhost:3000/costs/month/${month}`).then(response => response.json());
  return {
    type: FETCH_COSTS_MONTH,
    payload: promise
  };
}

export function fetchCost(id) {
  const promise = fetch(`http://localhost:3000/costs/${id}`).then(response => response.json());
  return {
    type: FETCH_COST,
    payload: promise
  };
}
