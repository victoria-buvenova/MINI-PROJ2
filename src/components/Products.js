import FetchProducts from "./FetchProducts";
import BootstrapCard from "./BootstrapCard";
import { useState, useEffect } from "react";
import {MDBRow} from 'mdb-react-ui-kit';
import Spinner from "./Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const updateProducts = async () => {
      let myData = await FetchProducts();
      setProducts(myData);
      console.log({products})
    };
    updateProducts();
  }, []);

  if (products.length === 0) {
    return <Spinner/>
  }

  return (
    <div>
         <MDBRow className='row-cols-1 row-cols-md-3 g-4' >{products.map((product, index) => {
        return <BootstrapCard item={product} title={product.name} body={product.price} imgsrc={product.image_link} color={"info"} key={index} />;
        
      })}</MDBRow>
      
    </div>
  );
};


export default function App() {
  return (
    <div className="App">
      <h1>Free shipping with any 99$ purchase!</h1>
      <Products />
    </div>
  );
}
