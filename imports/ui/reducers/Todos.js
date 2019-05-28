export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';

const initialState = {
  list: []
}

export const fetchStart = () => ({
  type: FETCH_DATA,
})

export const fetchComplete = (payload) => ({
  type: FETCH_COMPLETE,
  payload,
})

const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_COMPLETE: return { list: action.payload };
    default: return state;
  }
}

export default todoReducer;
