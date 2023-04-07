const initialData = 0;

const countReducers = (state = initialData, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return state + action.no;

    case "DEC_COUNT":
      return state - 1;

    default:
      return state;
  }
};

export default countReducers;
