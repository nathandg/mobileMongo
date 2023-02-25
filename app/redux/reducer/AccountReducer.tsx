import Connection from '../../types/Connection';

interface AccountState {
  savedConnections: Connection[];
  currentConnection: Connection[];
}

const initialState: AccountState = {
  savedConnections: [],
  currentConnection: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_CONNECTION':
      return {
        ...state,
        savedConnections: [...state.savedConnections, action.payload],
      };
    default:
      return state;
  }
};
