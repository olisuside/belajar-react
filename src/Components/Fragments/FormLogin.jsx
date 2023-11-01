import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
    return(
        <form action="">
            <InputForm label="Email" name="email" type="email" placeholder="Email" />
            <InputForm label="Password" name="password" type="password" placeholder="Password" />
            <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    );  
};

export default FormLogin;