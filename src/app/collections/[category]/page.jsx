"use client"
import {useParams} from "next/navigation";


const SingleCategoryPage = ()=>{
    const {category} = useParams()
    console.log(category)
    return(<>
        hello
    </>)
}

export  default SingleCategoryPage