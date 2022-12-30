import * as React from 'react';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import swiggylogo from "./Images/Swiggy.png";
import zomatologo from "./Images/zomato.png";
import dunzologo from "./Images/Dunzo.png";
import bbasketlogo from "./Images/bigbasket.png";
import mygrozo from "./Images/Mygrozo.png"
import grobux from "./Images/grobux.png"
import styled from "styled-components";
import { Col } from 'react-bootstrap';
import "./styles.css";
const P = styled.div`
text-align:left;
margin-top:4%;
font-weight:600;
`;

const Swiggy = styled.div`
  width: 100%;
  background-color: white;
  padding-top:3.4%;
  color: #fc8019;
  font-weight: 600;
  margin-bottom:2%;
  fontfamily: "Hind Madurai";
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const Zomato = styled.div`
padding-top:3.4%;
  width: 100%;
  font-weight: 600;
  fontfamily: "Hind Madurai";
  background-color: #ef4f5f;
  color: white;
  margin-bottom:2%;
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const Dunzo = styled.div`
padding-top:3.4%;
  width: 100%;
  font-weight: 600;
  margin-bottom:2%;
  fontfamily: "Hind Madurai";
  background-color: blue;
  color: #00ffa4;
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const BBasket = styled.div`
padding-top:3.4%;
  width: 100%;
  font-weight: 600;
  fontfamily: "Hind Madurai";
  background-color: #84c225;
  color: black;
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const Mygrozo = styled.div`
padding-top:3.4%;
  width: 100%;
  font-weight: 600;
  margin-bottom:2%;
  fontfamily: "Hind Madurai";
  background-color: white;
  color: black;
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const Grobux = styled.div`
padding-top:3.4%;
  width: 100%;
  margin-bottom:2%;
  font-weight: 600;
  fontfamily: "Hind Madurai";
  background-color: #4f1812;
  color: white;
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;


export default function SimpleAccordion() {
  return (
    <div className='scroll-container px-1 py-1'>
        <Accordion>
        <Mygrozo>
           <AccordionItem>
                <AccordionHeader>
                <div className=' d-flex  mb-2'>
            {/* <img src={'https://www.mygrozo.com/uploads/xlogo.png.pagespeed.ic.cOKuDm6vc7.webp'}></img> */}
  <Col sm={4}> <img src={'https://www.mygrozo.com/uploads/xlogo.png.pagespeed.ic.cOKuDm6vc7.webp'}></img> </Col>
  <Col sm={6}>   <P>Total Order</P></Col>
          </div>
                </AccordionHeader>

                <AccordionBody>
                <div className='Row '>
            <Col sm={8}>
              <ul>
                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul style={{textAlign:"right"}}>
                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
              </ul>
            </Col>
          </div>
                </AccordionBody>
            </AccordionItem>
           </Mygrozo>
           <Grobux>
           <AccordionItem>
                <AccordionHeader>
                <div className='justify-content-center mb-2'>
            <img src={grobux}></img>
          <P style={{color:'#fff'}}>Total Order</P>
          </div>
                </AccordionHeader>

                <AccordionBody>
                <div className='Row '>
            <Col sm={8}>
              <ul>
                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul style={{textAlign:"right"}}>
                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
              </ul>
            </Col>
          </div>
                </AccordionBody>
            </AccordionItem>
           </Grobux> 
           <Swiggy>
           <AccordionItem>
                <AccordionHeader>
                <div className='justify-content-center mb-2 '>
            <img src={swiggylogo}></img>
          <P style={{color:'#fc8019'}}>Total Order</P>
          </div>
                </AccordionHeader>

                <AccordionBody>
                <div className='Row '>
            <Col sm={8}>
              <ul>
                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul style={{textAlign:"right"}}>
                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
              </ul>
            </Col>
          </div>
                </AccordionBody>
            </AccordionItem>
           </Swiggy>
           <Dunzo>
           <AccordionItem>
                <AccordionHeader>
                <div className='justify-content-center mb-2'>
            <img src={dunzologo}></img>
            <P style={{color:"#00ffa4"}}>Total Order</P>
          </div>
                </AccordionHeader>

                <AccordionBody>
                <div className='Row '>
            <Col sm={8}>
              <ul>
                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul style={{textAlign:"right"}}>
                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
              </ul>
            </Col>
          </div>
                </AccordionBody>
            </AccordionItem>
           </Dunzo>
           <Zomato>
           <AccordionItem>
                <AccordionHeader>
                <div className='justify-content-center mb-2'>
            <img src={zomatologo}></img>
            <P style={{color:"#fff"}}>Total Order</P>
          </div>
                </AccordionHeader>

                <AccordionBody>
                <div className='Row '>
            <Col sm={8}>
              <ul>
                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul style={{textAlign:"right"}}>
                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
              </ul>
            </Col>
          </div>
                </AccordionBody>
            </AccordionItem>
           </Zomato>

           <BBasket>
           <AccordionItem>
                <AccordionHeader>
                <div className='justify-content-center mb-2'>
            <img src={bbasketlogo}></img>
            <P>Total Order</P>
          </div>
                </AccordionHeader>

                <AccordionBody>
                <div className='Row '>
            <Col sm={8}>
              <ul>
                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul style={{textAlign:"right"}}>
                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
              </ul>
            </Col>
          </div>
                </AccordionBody>
            </AccordionItem>
           </BBasket>

        </Accordion>
    </div>
  );
}