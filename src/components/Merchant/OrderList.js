import Divider from "@mui/material/Divider";
import * as React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import bbasketlogo from "./Images/bigbasket.png";
import orderData from "./orderData";

const time = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const Status = styled.circle`
  width: 7px;
  height: 7px;
  margin-top: 0.37rem;
  border-radius: 5px;
  background-color: green;
`;
const OrderDetail = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;
const Span = styled.div`
  margin-left: 0.7rem;
  font-size: 13px;
  margin-top: -8px;
`;
const H6 = styled.h6`margin-left: 4px;`;

const Details = styled.div`
color: grey;
font-size: 12px;
margin-top: -4px;
margin-inline-start: 5px;
`;
export default function OrderList({ setData }) {
  const [searchTerms, setSearchTerms] = React.useState("");

  const updateOrderlist = orderData?.filter((item) => {
    if (searchTerms == "") {
      return item;
    } else if (item.id == searchTerms) {
      return item;
    }
  });

  return (
    <div>
      <Row>
        <Col sm={6}>
          <img src={bbasketlogo}></img>
        </Col>
      </Row>
      <input
        type={"text"}
        placeholder="Search Order"
        style={{
          width: "100%",
          border: "none",
          outline: "none",
        }}
        onChange={(e) => {
          setSearchTerms(e.target.value);
        }}
      />
      <ul className="scroll-container">
        {updateOrderlist?.map((data, id) => (
          <li key={id}>
            <OrderDetail>
              <Status></Status>
              <Row>
                <Col sm={8}>
                  <H6> Order No. #{data.id}</H6>
                </Col>
                <Col sm={4}>
                  <Details>{time}</Details>
                </Col>
              </Row>
            </OrderDetail>
            <Row>
              <Col sm={8}><Span>Total ₹{data.price}</Span></Col>
              <Col><Span>Items :{data.item}</Span></Col>
            </Row>
            <Divider variant="" component={"li"} />
          </li>
        ))}
      </ul>
    </div>
  );
}
