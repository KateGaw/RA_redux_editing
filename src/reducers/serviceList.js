import { nanoid } from "nanoid";
import { ADD_SERVICE, REMOVE_SERVICE } from "../actions/actionTypes";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { id, name, price } = action.payload;
      if (!id) {
        return [...state, { id: nanoid(), name, price: Number(price) }];
      } else {
        return state.map((o) =>
          o.id !== id ? o : { id: id, name: name, price: Number(price) }
        );
      }
    case REMOVE_SERVICE:
      const { id: idToRemove } = action.payload;
      return state.filter((service) => service.id !== idToRemove);
    default:
      return state;
  }
}
