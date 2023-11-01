import { Link } from "react-router-dom";
import FormLogin from "../Components/Fragments/FormLogin.Jsx"
import AuthLayout from "../Components/Layout/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout tittle="Login">
            <FormLogin />
            <p className="text-center text-sm mt-2">Dont Have An Account? <Link to="/register" className="text-blue-600">Sign Up</Link></p>
        </AuthLayout>
    )
}

export default LoginPage;