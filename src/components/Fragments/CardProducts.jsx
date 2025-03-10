const CardProducts = (props) => {
    const {children} = props;
    return(
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow  ">
        {children}
     </div>
  


    );

};


const Header = () => {
    return (
    <a href="#">
        <img src="/img/sepatu-1.jpg" alt="products" className="p-8 rounded-t-lg" />
   </a>   
    )
}


const Body = () =>{
    return(
        <div className="px-5 pb-5 ">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-white"> Sepatu baru </h5>
          <p className="text-s text-white ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quibusdam, 
          recusandae provident dignissimos id quasi aut illum aliquid quae incidunt inventore voluptatem cumque quas
           dolorem voluptate dolorum, mollitia autem exercitationem.</p>
        </a>
       </div>
    );
  };


  const Footer = () => {
    return(
    <div className="flex items-center justify-between px-5 pb-5">
        <span className=" text-xl font-bold text-white">Rp. 1000.000</span>
        <Button classname="bg-blue-600"> Add To Chart</Button>
    </div>
    );
  };


  CardProducts.Header = Header;
  CardProducts.Body = Body; 
  CardProducts.Footer = Footer;
  

export default CardProducts;