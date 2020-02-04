import React, { createContext, useReducer, useEffect } from "react";
import { appReducer } from "../reducers/AppReducers";
export const AppContext = createContext();
// function AppContext() {
//   const FormContext = createContext();

const FormProvider = props => {
  const [data, dispatch] = useReducer(appReducer, [], () => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

// return {
//   FormContext,
//   FormProvider
// };
// }

export default FormProvider;
// import React, { createContext, useReducer, useEffect } from "react";
// import { appReducer } from "../reducers/AppReducers";

// export const AppContext = createContext();

// const AppContextProvider = props => {
//   const [data, dispatch] = useReducer(
//     appReducer,
//     [
//       { tipe: "Pemasukan", jumlah: 30000, judul: "Tabung", id: 1, edit: false },
//       {
//         tipe: "Pengeluaran",
//         jumlah: 10000,
//         judul: "Belanja",
//         id: 2,
//         edit: false
//       }
//     ],
//     () => {
//       const local = localStorage.getItem("data");
//       return local ? JSON.parse(local) : [];
//     }
//   );
//   console.log(data);
//   console.log(dispatch);

//   useEffect(() => {
//     localStorage.setItem("data", JSON.stringify(data));
//   }, [data]);

//   return (
//     <AppContext.Provider value={{ dispatch, data }}>
//       {props.children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;
