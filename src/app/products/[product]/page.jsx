import {Breadcrumbs} from "@mantine/core";
import SingleProductDetails from "@/components/SingleProductDetails";
import fetchProductDetails from "@/ProductDetails";

const SingleProductPage=async ({params})=>{
    const {product}= await params

    const productDetails = await fetchProductDetails(product)

    return(<>
        <SingleProductDetails product={product} productDetails={productDetails}/>
    </>)
}
export default SingleProductPage