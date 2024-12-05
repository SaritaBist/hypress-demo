

import {Box, Breadcrumbs, Rating} from "@mantine/core";
import convertToDollar from "@/app/utils/convert_to_dollar";
import Link from "next/link";



const ViewCategoryListPage=   ({categoryListData,category})=>{
    const data=categoryListData[0]?.productVariants?.items


    return(
        <>
            <div className='max-w-[95vw] mx-auto mt-20 '>
                <div className="text-5xl mt-5o font-bold">{category}</div>
                <Breadcrumbs className="mt-10 text-lg">Home {category}</Breadcrumbs>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-20 ">
                    {data?.map((item,index) => (
                        <div key={index} className="h-[70vh] w-[45] bg-[#fbfbff] flex flex-col justify-center items-center rounded-2xl ml-12 hover:shadow-2xl pb-3">

                            <Box className="relative group" component={Link}  href={`/products/${item?.product?.slug}`}>
                                <img
                                    src={item?.product?.assets[0].source}
                                    className="h-[300px] w-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-xl"
                                    alt={`No Image Found`}
                                />
                                <div className="mt-10 flex flex-col">
                                    <div className="px-4 font-semiboldn">{`$${convertToDollar(item?.product?.variantList?.items[0].price)}`}</div>
                                    <div className={'font-semibold px-4'}>{item?.product?.name} {index + 1}</div>
                                    <Rating fractions={2} defaultValue={3.5}  className={'p-2'}/>
                                </div>
                            </Box>

                        </div>


                    ))}
                </div>

            </div>
        </>
    )
}
export default ViewCategoryListPage