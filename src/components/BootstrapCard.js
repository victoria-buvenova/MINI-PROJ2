import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

import {useAuth} from '../context/AuthProvider';
// import { useState } from 'react';



export default function BootstrapCard(props) {
    const {addToCart, cart, removeFromCart} = useAuth()
    const initialCount = 0
  
    console.log(cart)
  return (
     
   
      <MDBCol >
        {/* <MDBCard className='h-80' style={{height:"240px", width: "320px"}} > */}
        <MDBCard className="d-flex justify-content-center align-items-start h-100">
          <MDBCardImage className="d-flex justify-content-center align-items-start h-150 align-self-center"
            src={props.imgsrc}
            alt='...'
            position='top' 
            style={{height:"180px", width: "230px"}}
          />
          <MDBCardBody style={{width: "100%"}}>
            <MDBCardTitle className="text-center">{props.title}</MDBCardTitle>
            <MDBCardText >
            {props.body}
            </MDBCardText>

      {/* <Button variant="outline-primary" onClick= {() => addToCart(props)}>Add to cart</Button> */}
      {props.fromCart ? <MDBBtn outline rounded className='mx-2' color='info' onClick={() => removeFromCart(props.item.id)}>Remove from cart</MDBBtn>
      : <MDBBtn outline rounded className='mx-2' color='info' onClick={() => addToCart(props.item)}>Add to cart</MDBBtn>}

      {/* {props.fromCart ? <button onClick={() => removeFromCart(props.item.id)}>Remove from cart</button>
      : <button onClick={() => addToCart(props.item)}>Add to cart</button>} */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  );
}
