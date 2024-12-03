

import fetchCollections from "@/CollectionData";
import ViewCategoryList from "@/components/ViewCategoryList";


const SingleCategoryPage = async ()=>{
    const data = await fetchCollections();
    const collections = data?.collections?.items || [];
    return(<>
        <ViewCategoryList collections={collections}/>
    </>)
}

export  default SingleCategoryPage