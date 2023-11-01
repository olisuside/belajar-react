const AuthLayout = (props) => {
    const { children , tittle} = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl text-blue-700 font-bold mb-2">{tittle}</h1>
                <p className="text-medium text-slate-500 mb-6">
                    Welcome, Please Input
                </p>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;