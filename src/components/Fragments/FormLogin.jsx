import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="">
         <InputForm 
            label="Email" 
            type="email"  
            name="Email" 
            placeholder="@example.com"> 
        </InputForm>
        
         <InputForm 
            label="password" 
            type="password"  
            name="Password" 
            placeholder="********"> 
        </InputForm>
         
          <Button classname="bg-blue-600 w-full">Login </Button>
        </form>

    )
}

export default FormLogin;