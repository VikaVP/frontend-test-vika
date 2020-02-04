import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const InputForm = props => {
  const { dispatch } = useContext(AppContext);
  const [tipe, setTipe] = useState("");
  const [judul, setJudul] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [validated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    dispatch({
      type: "ADD_DATA",
      data: {
        tipe,
        jumlah,
        judul
      }
    });
    setJudul("");
    setJumlah(0);
    setTipe("");
  };
  return (
    <Form
      className="mr-4"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="formGridType">
        <Form.Label>Tipe</Form.Label>
        <Form.Control
          as="select"
          value={tipe}
          onChange={e => {
            setTipe(e.target.value);
          }}
          required
        >
          <option value="">Pilih</option>
          <option value="Pemasukan">Pemasukan</option>
          <option value="Pengeluaran">Pengeluaran</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Kolom isi harus diisi semua. Silahkan pilih salah satunya.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicTotal">
        <Form.Label>Jumlah</Form.Label>
        <Form.Control
          type="number"
          step="500"
          placeholder="Jumlah"
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
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Judul</Form.Label>
        <Form.Control
          type="text"
          placeholder="Judul"
          value={judul}
          onChange={e => {
            setJudul(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Control.Feedback type="invalid">
        Kolom isi harus diisi semua.
      </Form.Control.Feedback>
      <Button variant="primary" type="submit" value="add data">
        Submit
      </Button>
    </Form>
  );
};
export default InputForm;
