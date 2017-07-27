import merge from './../helpers/merge';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'INITIALIZE_APP': {
      return merge(state, action.data);
    }
    case 'UPDATE_MEAN': {
      const updatedMean = merge(state.data, { mean: action.data });
      return merge(state, { data: updatedMean });
    }
    case 'UPDATE_STD_DEV': {
      const updatedStdDev = merge(state.data, { stdDeviation: action.data });
      return merge(state, { data: updatedStdDev });
    }
    case 'SET_ROUTE': {
      return merge(state, { route: '/' });
    }
    default:
      return state;
  }
}
