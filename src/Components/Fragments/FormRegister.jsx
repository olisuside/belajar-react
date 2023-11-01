import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
    return(
        <form action="">
            <InputForm label="Email" name="email" type="email" placeholder="Email" />
            <InputForm label="Password" name="password" type="password" placeholder="Password" />
            <InputForm label="Password Confirmation" name="passwordconfirmation" type="password" placeholder="Password Confirmation" />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    );  
};

export default FormRegister;