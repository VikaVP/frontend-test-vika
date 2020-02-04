import React, { useState, useContext } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import EmptyRow from "./EmptyRow";
import HeadTable from "./HeadTable";

function DataTable() {
  const { data, dispatch } = useContext(AppContext);
  const [tipe, setTipe] = useState("");
  const [judul, setJudul] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [validated] = useState(false);
  const handleSubmit = (event, id) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    dispatch({
      type: "UPDATE_DATA",
      id: id,
      updateTipe: tipe,
      updateJudul: judul,
      updateJumlah: jumlah
    });
  };
  return data.length ? (
    <Table striped bordered hover size="lg" className="mt-4 mb-2">
      <HeadTable />
      {data.map((item, index) => {
        return (
          <tbody style={{ color: item.tipe === "Pemasukan" ? "blue" : "red" }}>
            <tr key={index}>
              <td>
                {item.edit === true ? (
                  <Form.Group controlId="formBasic">
                    <Form.Control
                      as="select"
                      value={tipe}
                      onChange={e => {
                        setTipe(e.target.value);
                      }}
                      required
                    >
                      <option value="Pemasukan">Pemasukan</option>
                      <option value="Pengeluaran">Pengeluaran</option>
                      <Form.Control.Feedback type="invalid">
                        Kolom isi harus diisi semua. Silahkan pilih salah
                        satunya.
                      </Form.Control.Feedback>
                    </Form.Control>
                  </Form.Group>
                ) : (
                  <span>{item.tipe}</span>
                )}
              </td>
              <td>
                {item.edit === true ? (
                  <Form.Group controlId="formBasicTotal">
                    <Form.Control
                      type="number"
                      step="500"
                      value={jumlah}
                      onChange={e => {
                        setJumlah(e.target.value);
                      }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Kolom isi harus diisi semua.
                    </Form.Control.Feedback>
                  </Form.Group>
                ) : (
                  <span>{item.jumlah}</span>
                )}
              </td>
              <td>
                {item.edit === true ? (
                  <Form.Group controlId="formBasicTitle">
                    <Form.Control
                      type="text"
                      placeholder="Judul"
                      value={judul}
                      onChange={e => {
                        setJudul(e.target.value);
                      }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Kolom isi harus diisi semua.
                    </Form.Control.Feedback>
                  </Form.Group>
                ) : (
                  <span>{item.judul}</span>
                )}
              </td>
              <td style={actionStyle}>
                {item.edit === true ? (
                  <Button
                    type="submit"
                    variant="success"
                    noValidate
                    validated={validated}
                    onClick={e => handleSubmit(e, item.id)}
                  >
                    Submit
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch({ type: "EDIT_DATA", id: item.id });
                        setTipe(item.tipe);
                        setJumlah(item.jumlah);
                        setJudul(item.judul);
                      }}
                    >
                      Edit
                    </Button>
                    <div className="align-self-center">|</div>
                    <Button
                      variant="danger"
                      onClick={() =>
                        dispatch({ type: "DELETE_DATA", id: item.id })
                      }
                    >
                      Hapus
                    </Button>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  ) : (
    <EmptyRow />
  );
}
const actionStyle = {
  display: "flex"
};

export default DataTable;
