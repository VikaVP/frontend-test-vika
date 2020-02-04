import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const DataResult = props => {
  const { data } = useContext(AppContext);
  let income = 0;
  let outcome = 0;
  data.map(item => {
    if (item.tipe === "Pemasukan") {
      return (income += Number(item.jumlah));
    } else if (item.tipe === "Pengeluaran") {
      return (outcome += Number(item.jumlah));
    }
    return 0;
  });

  return (
    <Card>
      <div className="mr-4 ml-4 mt-4 mb-2">
        <p>Total Pemasukan: </p>
        <p style={pStyle}>IDR {income}</p>
        <p>Total Pengeluaran: </p>
        <p style={pStyle}>IDR {outcome}</p>
        <p>Total Uang: </p>
        <p style={pStyle}>IDR {income - outcome}</p>
      </div>
    </Card>
  );
};
const pStyle = {
  marginTop: "-10px"
};

export default DataResult;
