import { ADD_ITEM, DELETE_ITEM } from "../actionType/actionTypes";

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export { addItem, deleteItem };