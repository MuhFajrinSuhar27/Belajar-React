import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayouts";

const RegisterPage = () => {
    return (

        <AuthLayout title = "Register">
            <FormRegister/> 
            <p className="text-sm mt-5 text-center">
               Do you already have an account <Link to="/Login" className="font-bold  text-blue-600">Login</Link></p>
       </AuthLayout>
    );
};

export default RegisterPage;