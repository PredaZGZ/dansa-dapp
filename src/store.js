import { createStore } from 'redux';

// Estado inicial
const initialState = {
  username: ''
};

// Acción para actualizar el nombre de usuario
const updateUsername = (username) => {
  return {
    type: 'UPDATE_USERNAME',
    payload: username
  }
}

// Reducer que maneja la acción de actualizar el nombre de usuario
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
}

// Crear el store de Redux
const store = createStore(reducer);

export { store, updateUsername };
