import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchEmployees } from 'assets/js/mocks';

const initialState = {
  employees: null,
}

export const ReducerType = {
  LOAD_EMPLOYEES: 'LOAD_EMPLOYEES',
};

export function loadEmployees() {
  return function (dispatch) {
    return fetchEmployees()
      .then((data) => {
          dispatch({
            type: ReducerType.LOAD_EMPLOYEES,
            payload: data,
          })
      })
  }
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case ReducerType.LOAD_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(
  rootReducer,
  applyMiddleware(thunk),
);