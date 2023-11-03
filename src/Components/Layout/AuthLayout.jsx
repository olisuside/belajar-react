import { Link } from "react-router-dom";
const AuthLayout = (props) => {
    const { children , tittle, type} = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl text-blue-700 font-bold mb-2">{tittle}</h1>
                <p className="text-medium text-slate-500 mb-6">
                    {type === 'login' ? 'Login To Your Account' : 'Create New Account'}
                </p>
                {children}
                <Navigation type={type}/>
            </div>
        </div>
    );
};

const Navigation= ({type}) => {
    if (type === 'login') {
        return (
            <p className="text-center text-sm mt-2">Dont Have An Account? <Link to="/register" className="text-blue-600">Sign Up</Link></p>
        )
    } else {
        return (
            <p className="text-center text-sm mt-2">Already Have An Account? <Link to="/login" className="text-blue-600">Sign In</Link></p>
        )
    }
    
}

export default AuthLayout;