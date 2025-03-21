import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormLogin = () => {
    
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log("Login!")
        window.location.href = "/products"
    }



    return (
        <form onSubmit={handleLogin}>
         <InputForm 
            label="Email" 
            type="email"  
            name="email" 
            placeholder="@example.com"> 
        </InputForm>
        
         <InputForm 
            label="password" 
            type="password"  
            name="password" 
            placeholder="********"> 
        </InputForm>
         
          <Button classname="bg-blue-600 w-full" type="submit ">Login </Button>
        </form>

    )
}

export default FormLogin;