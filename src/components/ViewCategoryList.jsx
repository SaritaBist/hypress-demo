"use client"
import {useParams} from "next/navigation";
import {Box, Breadcrumbs} from "@mantine/core";
import Link from "next/link";

const ViewCategoryListPage=  ({collections})=>{
    const {category} = useParams()
    const  decodeCategory=category.replace('-',' ')



    return(
        <>
            <div className='max-w-[95vw] mx-auto mt-20 '>
                <div className="text-5xl mt-5o font-bold">{decodeCategory}</div>
                <Breadcrumbs className="mt-10 text-lg">Home {decodeCategory}</Breadcrumbs>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collections.find(c=>c.name===decodeCategory)?.assets?.map((asset,index) => (

                        <div  key={index} className="h-[50vh] flex justify-center items-center rounded-2xl ml-12">
                            <div className="relative group">
                                <img
                                    src={asset.source}
                                    className="h-[300px] w-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-xl"
                                    alt={`No Image Found`}
                                />
                            </div>
                        </div>


                    ))}
                </div>

            </div>
        </>
    )
}
export default ViewCategoryListPage