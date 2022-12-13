import axios from "axios";

const FetchProducts = async () => {
  let response = await axios.get(" http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");

  return response.data;
};

export default FetchProducts;



