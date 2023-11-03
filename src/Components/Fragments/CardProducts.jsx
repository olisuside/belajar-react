import Button from "../Elements/Button/Index";

const CardProduct = (props) => {
    const { children } = props
    return (
        <div className="w-full max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow mx-2">
            {children}
        </div>
    )
};

const Header = (props) => {
    const { image } = props
    return (
        <a href="#">
            <img className="p-8 rounded-t-lg" src={image} alt="product image" />
        </a>
    )
}

const Body = (props) => {
    const { tittle, children } = props
    return (
        <div className="px-5 pb-3">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{tittle}</h5>
                <p className="text-gray-700 mb-2">$64.00</p>
                <p className="text-gray-700 mb-2">{children}</p>
            </a>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="px-5 pb-5">
            <Button className="bg-blue-600 w-full">Add to cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;