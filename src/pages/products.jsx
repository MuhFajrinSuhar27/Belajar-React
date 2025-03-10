import Button from "../components/Elements/Button";

import CardProducts from "../components/Fragments/cardProducts";

const ProductsPage = () => {
  return(

    <div className="flex justify-center py-2">
      <CardProducts>
          <CardProducts.Body></CardProducts.Body>
          <CardProducts.Footer></CardProducts.Footer>
      </CardProducts>
    
    </div>
  ); 
};



export default ProductsPage;