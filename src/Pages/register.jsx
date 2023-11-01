
import { Link } from "react-router-dom";
import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layout/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout tittle="Register">
            <FormRegister />
            <p className="text-center text-sm mt-2">Have An Account? <Link to="/login" className="text-blue-600">Sign In</Link></p>
        </AuthLayout>
    )
}

export default RegisterPage;