import FormLogin from "../Components/Fragments/FormLogin.Jsx"
import AuthLayout from "../Components/Layout/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout tittle="Login" type="login">
            <FormLogin />
            
        </AuthLayout>
    )
}

export default LoginPage;