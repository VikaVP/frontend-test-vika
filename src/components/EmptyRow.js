import React from "react";
import { Table } from "react-bootstrap";
import HeadTable from "./HeadTable";

function EmptyRow() {
  return (
    <Table striped bordered hover size="lg" className="mt-4 mb-2">
      <HeadTable />
      <tbody>
        <tr>
          <td colSpan="4" className="text-center">
            Belum ada data
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default EmptyRow;
