import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl text-blue-700 font-bold mb-2">OOPPS!!</h1>
                <p className="text-medium text-slate-500 mb-2">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-xl text-slate-500 mb-2">
                    {error.statusText || error.message}
                </p>

            </div>
        </div>
    )
}

export default ErrorPage