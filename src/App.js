import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import RegisterForm from './components/RegisterForm';
import { AuthProvider } from './context/AuthProvider';
// import BootstrapCard from './components/BootstrapCard'
import Cart from './components/Cart';
import Footer from './components/Footer';
import { NotFound } from './components/NotFound';
import Map from './components/Map';


function App() {
  return (
    
      <AuthProvider>
  <NavigationBar/>
  <Routes> 
<Route path="/" element={<Home/>}/> 
<Route path="/products" element={<Products/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/register" element={<RegisterForm/>} />
<Route path="/cart" element={<Cart/>} />
<Route path='*' element={<NotFound />} />
   </Routes>
  
   <Footer />
   
 </AuthProvider>
    
    
  );
}

export default App;
