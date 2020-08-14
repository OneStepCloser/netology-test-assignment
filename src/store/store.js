import { createStore } from 'redux';

const initialState = {
  employees: null,
}

export const ReducerType = {
  LOAD_EMPLOYEES: 'LOAD_EMPLOYEES',
};

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
);