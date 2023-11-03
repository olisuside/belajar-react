import Button from "../Components/Elements/Button/Index"
import CardProduct from "../Components/Fragments/CardProducts"
const ProductsPage = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <CardProduct>
                <CardProduct.Header image="/images/shoes1.jpeg"></CardProduct.Header>
                <CardProduct.Body tittle="Running shoes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe, earum eum dolor nostrum ducimus dolores inventore repellendus ut explicabo vero fuga quae animi enim iure beatae, labore consequuntur molestiae.
                </CardProduct.Body>
                <CardProduct.Footer />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes1.jpeg"></CardProduct.Header>
                <CardProduct.Body tittle="Running shoes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe, earum eum dolor nostrum ducimus dolores inventore repellendus ut explicabo vero fuga quae animi enim iure beatae, labore consequuntur molestiae.
                </CardProduct.Body>
                <CardProduct.Footer />
            </CardProduct>
        </div>
    )
}

export default ProductsPage