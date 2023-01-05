import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import "../styles.css";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc,remarks, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc,remarks, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)",'Remarks' ,100, 1.15),
  createRow("Paper (Case)",'Remarks' , 10,45.99),
  createRow("Waste Basket",'Remarks' , 2, 17.99),
  createRow("Paperclips2 (Box)",'Remarks' , 100, 1.15),
  createRow("Paper1 (Case)",'Remarks' , 10, 45.99),
  createRow("Waste1 Basket",'Remarks' , 2, 17.99),
  createRow("Paperclips1 (Box)",'Remarks' , 100, 1.15),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  return (
    <TableContainer className="scroll-table" component={Paper}>
      <Table
        className="scroll-table"
        style={{
          minWidth: 700,
          height: "100%",
         fontWeight: "900",
        }}
        size="small"
        aria-label="spanning table"
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight:'700'}}>Items</TableCell>
            <TableCell style={{ fontWeight:'700'}}>Remarks</TableCell>
            <TableCell style={{ fontWeight:'700'}} align="right">Qty.</TableCell>
            <TableCell style={{ fontWeight:'700'}}align="right">Price</TableCell>
            <TableCell style={{ fontWeight:'700'}}align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell style={{fontWeight:'600', color:"steelblue"}}>{row.desc}</TableCell>
              <TableCell style={{fontWeight:'600', color:"GrayText"}}>{row.remarks}</TableCell>
              <TableCell style={{ color:"InfoText"}}align="right">{row.qty}</TableCell>
              <TableCell style={{ color:"InfoText"}}align="right">{row.unit}</TableCell>
              <TableCell style={{ color:"InfoText"}}align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell  style={{ fontWeight:'700'}}colSpan={3}>Subtotal</TableCell>
            <TableCell  style={{ fontWeight:'700'}}align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight:'700'}}colSpan={2}>Tax</TableCell>
            <TableCell  style={{ fontWeight:'700'}} align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell  style={{ fontWeight:'700'}} align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell  style={{ fontWeight:'700'}} colSpan={3}>Total</TableCell>
            <TableCell  style={{ fontWeight:'700'}} align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
