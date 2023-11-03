import Button from "../Components/Elements/Button/Index"
import CardProduct from "../Components/Fragments/CardProducts"

const product = [
    {
        id : 1,
        image : "/images/shoes1.jpeg",
        name : "Running shoes",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price : "$64.00",
    },
    {
        id : 2,
        image : "/images/shoes1.jpeg",
        name : "Running shoes 2",
        description : "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price : "$72.00",
    },
    {
        id : 2,
        image : "/images/shoes1.jpeg",
        name : "Running shoes 3",
        description : "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price : "$75.00",
    },
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            {product.map((product) => (
            <CardProduct>
                <CardProduct.Header image={product.image}></CardProduct.Header>
                <CardProduct.Body name={product.name}>
                    {product.description} 
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} />
            </CardProduct>
                
            ))}
        </div>
    )
}

export default ProductsPage