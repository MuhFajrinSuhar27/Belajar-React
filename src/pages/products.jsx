import Button from "../components/Elements/Button";
import { useState } from "react";
import CardProducts from "../components/Fragments/cardProducts";
import Counter from "../components/Fragments/Counter";


const products = [
  {
    id: 1,
    name: "Burger Baru",
    price: 100000,
    image: "/img/burger.png",
    description: `Sepatu ini terbuat dari kulit emas asli korea yang sangat amat bagus`
  },
  {
    id: 2,
    name: "burger lama",
    price: 500000,
    image: "/img/burger.png",
    description: `burger ini terbuat dari kulit emas asli korea yang sangat amat bagus burger ini terbuat dari kulit emas asli korea yang sangat amat bagus`
  },
  {
    id: 3,
    name: "burger lama",
    price: 500000,
    image: "/img/burger.png",
    description: `burger ini terbuat dari kulit emas asli korea yang sangat amat bagus Sepatu ini terbuat dari kulit emas asli korea yang sangat amat bagus`
  },
  {
    id: 4,
    name: "burger abcd",
    price: 510000,
    image: "/img/burger.png",
    description: `burger ini terbuat dari kulit emas asli korea yang sangat amat bagus Sepatu ini terbuat dari kulit emas asli korea yang sangat amat bagus`
  }
]



const email  = localStorage.getItem('email')

const HandleLogout = () => {
  window.location.href ="/login"  
}



const ProductsPage = () => {

  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,


    }
  ]);

  const HandleLogout = () => {
    window.location.href ="/login"
    
  }


  const handleAddToCart = (id) => {
   if(cart.find(item => item.id === id)){
    setCart(
      cart.map(
        item => item.id === id ? {...item,  qty: item.qty + 1 } : item) 
      )
    } else{
        setCart([...cart, {id, qty: 1}])
       };
   
  };


  return(
    <>
    <div className="flex justify-end h-10 bg-blue-600  text-white px-16 ">
      <span className="mr-4">{email} </span>
    <Button className="my-auto " onClick={HandleLogout}>Logout</Button>
    </div>

    <div className="flex justify-center py-5 space-x-7">
    <div className="w-3/4 flex flex-wrap">
                {products.map((product) => 

            <CardProducts key={product.id}>
            <CardProducts.Header Image={product.image}></CardProducts.Header>
              <CardProducts.Body name={product.name} children={product.description}></CardProducts.Body>
              <CardProducts.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}/>
            </CardProducts>
            )}
    </div>
      
      <div className="w-1/4 ">
          <h1 className="text-3xl text-blue-600 font-bold">Cart</h1>

        <table className=" text-center border-separate border-spacing-x-2 ">
          <thead>
              <tr>
                <th>product</th>
                <th>price</th>
                <th>Quantity</th>
                <th>total</th>
              </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
          
          const product = products.find((product) => product.id == item.id);
          return (
          <tr key={item.id}>
              <td>{product.name}</td>
              <td>Rp {(product.price.toLocaleString("ID-id" ,{styles: "currency", currency:"IDR"}))}</td>
              <td>{item.qty}</td>
              <td>Rp {(item.qty * product.price).toLocaleString("ID-id", {styles: "currency", currency:"IDR"})}</td>
          </tr>
          )
          })} 
          </tbody>
        </table>
      </div>
    </div>


    <div className=" flex justify-center">
    <Counter></Counter>
    </div>
    </>
  ); 
};


export default ProductsPage;