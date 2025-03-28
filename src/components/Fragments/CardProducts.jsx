import Button from "../Elements/Button";

const CardProducts = (props) => {
    const {children} = props;
    return(
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-4 my-4 flex flex-col justify-between ">
        {children}
     </div>
  
    );

};

const Header = (props) => {
  const {Image} = props;
    return (
    <a href="#">
        <img src={Image} alt="products" className="p-8 rounded-t-lg" />
   </a>   
    )
}


const Body = (props) =>{
  const {children, name} = props;
    return(
        <div className="px-5 pb-5 h-full">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-white"> {name}</h5>
          <p className="text-s text-white ">{children}</p>
        </a>
       </div>
    );
  };


  const Footer = (props) => {
    const {price, handleAddToCart, id} = props;
    return(
    <div className="flex items-center justify-between px-5 pb-5">
        <span className=" text-xl font-bold text-white">Rp {price.toLocaleString("id-ID",{styles: "currency", currency: "IDR"})}</span>
        <Button classname="bg-blue-600" onClick={ () => handleAddToCart(id) }> Add To Chart</Button>
    </div>
    );
  };


  CardProducts.Header = Header;
  CardProducts.Body = Body; 
  CardProducts.Footer = Footer;
  

export default CardProducts;