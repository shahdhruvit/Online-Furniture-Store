import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

import '../styles/checkout.css';
import { useSelector } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
// import products from '../assets/data/products';
const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  //payment integration
  const makePayment = async()=>{
    const stripe = await loadStripe("pk_test_51P5BD2SEwQjDkDy2ayNVtJwzUPXaaAx60uvbguwx7L1mrEbzhJtr5BHSfbRNq1WWwcApmavnSqeB0xEd78QT5EKb00qIakMLo5");

    const body = {
      // products: products.map(product => ({
      //   productName: product.productName,
      //   price: product.price,
      //   qnty: product.qnty,
        
      // }))
      products:totalAmount
    }
    const headers = {
      "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:7000/api/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sectionId:session.id 
    });

    if(result.error){
      console.log(result.error);
    }
  }

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="phone number"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country"/>
                </FormGroup>
              </Form>
            </Col>

            
            <Col lg='4'>
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6>
                  <span>
                  Shipping: <br/>
                  free shipping
                  </span>
                  <span>$0</span>
                </h6>
                
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                
                <button className="buy__btn auth__btn w-100" onClick={makePayment}>Place an order</button>
                
              </div>
              
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Checkout;
