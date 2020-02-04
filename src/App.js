import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./components/InputForm";
import Result from "./components/DataResult";
import Table from "./components/DataTable";
import FormProvider from "./context/AppContext";

function App() {
  return (
    <FormProvider>
      <Container className="mt-4">
        <h2 className="text-center mt-4 mb-4">REACT TABUNGAN APP (CRUD)</h2>
        <Row>
          <Col>
            <Form />
          </Col>
          <Col>
            <Result />
          </Col>
        </Row>
        <Table />
      </Container>
    </FormProvider>
  );
}

export default App;
