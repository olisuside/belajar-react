
import { Link } from "react-router-dom";
import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layout/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout tittle="Register" type="register">
            <FormRegister />
            </AuthLayout>
    )
}

export default RegisterPage;