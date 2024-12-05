import {Breadcrumbs, Rating} from "@mantine/core";
import convertToDollar from "@/app/utils/convert_to_dollar";

const SingleProductDetailsPage=({product,productDetails})=>{
    const productsDetail=productDetails?.products?.items
    console.log("ppp",)

    return(<>
        <div className='max-w-[95vw] mx-auto mt-20 '>
            <Breadcrumbs className="mt-10 text-xl ">Products {product}</Breadcrumbs>
            <div className=" ml-52 mt-12">
                {
                    productsDetail?.map((p)=> (
                        <div key={p.name}  className="flex gap-20">
                            <div>
                                <img src={p?.assets[0]?.source} alt={p.name} className={'h-[500px] w-[400px]'}/>
                            </div>

                            <div className="flex flex-col gap-8">
                                <h1 className="text-4xl">{p.name}</h1>
                                <div className="flex gap-2 items-center ">
                                    <Rating fractions={2} defaultValue={3.5} className={'p-2'}/>
                                    <p>3 Review</p>
                                </div>
                                <div>
                                    <div className=" font-semibold text-2xl">{`$${convertToDollar(p?.variantList?.items[0].price)}`}</div>
                                     <p className="mt-3">Save 10% on your first order</p>
                                </div>

                               <button className="bg-blue-900 rounded-3xl px-3 py-2 text-white text-lg w-32">Add to cart</button>
                                <div>
                                    <p>Free shipping worldwide</p>
                                    <p>100% Secured Payment</p>
                                    <p>Made by professionals</p>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    </>)
}
export default SingleProductDetailsPage