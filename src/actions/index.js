export const removeItem = (id, itemType) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      id,
      itemType,
    },
  };
};
