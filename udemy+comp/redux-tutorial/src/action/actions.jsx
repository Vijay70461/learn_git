export const incCount = (n) => {
  return {
    type: "INC_COUNT",
    no: n,
  };
};

export const decCount = () => {
  return {
    type: "DEC_COUNT",
  };
};
