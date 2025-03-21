import Button from "../components/Elements/Button";

import CardProducts from "../components/Fragments/cardProducts";


const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/img/sepatu-1.jpg",
    description: `Sepatu ini terbuat dari kulit emas asli korea yang sangat amat bagus`
  },
  {
    id: 2,
    name: "Sepatu lama",
    price: "Rp 500.000",
    image: "/img/sepatu-1.jpg",
    description: `Sepatu ini terbuat dari kulit emas asli korea yang sangat amat bagus Sepatu ini terbuat dari kulit emas asli korea yang sangat amat bagus`
  },
  {
    id: 3,
    name: "Sepatu lama",
    price: "Rp 500.000",
    image: "/img/sepatu-1.jpg",
    description: `Sepatu ini terbuat dari kulit emas asli korea yang sangat amat bagus Sepatu ini terbuat dari kulit emas asli korea yang sangat amat bagus`
  }
]


const email = localStorage.getItem('email')

const HandleLogout = () => {
  window.location.href ="/login"

  
}

const ProductsPage = () => {
  return(
    <>
    <div className="flex justify-end h-10 bg-blue-600  text-white px-16 ">
      <span className="mr-4">{email} </span>
    <Button className="my-auto " onClick={HandleLogout}>Logout</Button>
    </div>

    <div className="flex justify-center py-5 space-x-7 ">
    {products.map((product) => 

        <CardProducts key={product.id}>
        <CardProducts.Header Image={product.image}></CardProducts.Header>
          <CardProducts.Body name={product.name} children={product.description}></CardProducts.Body>
          <CardProducts.Footer price={product.price}></CardProducts.Footer>
        </CardProducts>
    )}
    </div>
    </>
  ); 
};



export default ProductsPage;