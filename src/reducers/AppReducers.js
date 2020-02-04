import uuid from "uuid/v1";

export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [
        ...state,
        {
          tipe: action.data.tipe,
          jumlah: action.data.jumlah,
          judul: action.data.judul,
          id: uuid(),
          edit: false
        }
      ];
    case "DELETE_DATA":
      return state.filter(data => data.id !== action.id);
    case "EDIT_DATA":
      return state.filter(data => {
        if (data.id === action.id) {
          return (data.edit = true);
        }
        return state;
      });
    case "UPDATE_DATA":
      return state.filter(data => {
        if (data.id === action.id) {
          data.tipe = action.updateTipe;
          data.jumlah = action.updateJumlah;
          data.judul = action.updateJudul;
          data.edit = false;
          return state.push(data);
        }
        return state;
      });
    default:
      return state;
  }
};
