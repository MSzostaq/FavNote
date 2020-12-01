export const removeItem = (id, itemType) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      id,
      itemType,
    },
  };
};

export const addItem = (itemContent, itemType) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: "ADD_ITEM",
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
