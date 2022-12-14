import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React from "react";

    
import { useAuth } from "../context/AuthProvider";
import BootstrapCard from "./BootstrapCard";

    export default function Cart() {
        const {cart, calculateTotal} =useAuth();
     
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
     
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cart.length} items
                        </MDBTypography>
                      </div>
    
                      <hr className="my-4" />
    
                      <MDBRow className='row-cols-1 row-cols-md-3 g-4' >{cart.map((product, index) => {
                          console.log(product)
        return <BootstrapCard fromCart={true} item ={product} title={product.name} body={product.price} imgsrc={product.image_link} color={"info"} key={index} />;
        
      })}</MDBRow>
                        
                        

                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>
    
                      <hr className="my-4" />
    
                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items {cart.length}
                        </MDBTypography>
                        <MDBTypography tag="h5">$ {calculateTotal().toFixed(2)}</MDBTypography>
                      </div>
    
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>
    
                      <div className="mb-4 pb-2">
                        <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                          <option value="1">Standard-Delivery- $5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>
    
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>
    
                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>
    
                      <hr className="my-4" />
    
                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">$ {(calculateTotal() + 5).toFixed(2)}</MDBTypography>
                      </div>
    
                      <MDBBtn color="dark" block size="lg">
                        Register
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }

    