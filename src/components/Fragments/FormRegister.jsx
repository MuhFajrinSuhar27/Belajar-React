import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormRegister = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target.fullname.value);
        console.log("Berhasil Register")
        
    }
    return (
        <form onSubmit={handleRegister}>
         <InputForm 
            label="Fullname" 
            type="text"  
            name="fullname" 
            placeholder="Please insert your name !"> 
        </InputForm>
        
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
        
         <InputForm 
            label="Confirm password" 
            type="password"  
            name="confirmPassword" 
            placeholder="********"> 
        </InputForm>
         
          <Button classname="bg-blue-600 w-full">Register</Button>
        </form>

    )
}

export default FormRegister;