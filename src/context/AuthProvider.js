import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [count, updateCount] = useState(JSON.parse(localStorage.getItem("count")) ?? 0)
 
  const login = user => {
    setUser(user)
    setCart(cart)
    localStorage.setItem("user", JSON.stringify(user));
    
   
  }

  const logout = () => {
    setUser(null)
    setCart(null)
    updateCount(null)
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('count');
  }


function addToCart(item) {
  
  setCart((cart) => {
    const newCart = [...cart, item]
    console.log(newCart)
    return newCart
  })
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(id) {
  console.log(id)
  setCart(cart.filter((x) => x.id !== id))
  localStorage.removeItem('cart');
}

function calculateTotal(){
  return cart.reduce((acc, item) => {return acc + Number(item.price)}, 0)
}

  return (
    <AuthContext.Provider value={{ user, cart, login, logout, addToCart, removeFromCart, calculateTotal }}>
      {children} 
    </AuthContext.Provider>
  )

}
export const useAuth = () => {
  return useContext(AuthContext)
}

