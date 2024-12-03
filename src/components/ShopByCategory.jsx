
import fetchCollections from "@/CollectionData";
import {Box} from "@mantine/core";
import Link from "next/link";

const ShopByCategory = async () => {

    const data = await fetchCollections();
    const collections=data?.collections?.items;

   const enCodeUrl= (str)=>{
       return str.replace(' ','-')
   };


    return (
        <div className="max-w-[95vw] mx-auto mt-20 mb-4">
            <div className="text-4xl font-normal">Shop by Category</div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {collections?.map((collection) => (
                    <Box key={collection.name} className="relative" component={Link}  href={`/collections/${enCodeUrl(collection.name)}`} >

                        <div className="absolute top-4 left-4 bg-white px-3 py-1 w-28 rounded-3xl uppercase text-center text-sm z-10">
                            {collection.name}
                        </div>
                        <div className="h-[50vh] flex justify-center items-center rounded-2xl">
                            <div className="relative group">
                                {collection.assets.length >= 1 ? (
                                    <img
                                        src={collection.assets[0]?.source}
                                        className="h-[300px] w-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-xl"
                                        alt={`No Image Found`}
                                    />
                                ) : (
                                    <img
                                        src="alt.png"
                                        className="h-[300px] w-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-xl"
                                        alt={`No Image Found`}
                                    />
                                )}
                            </div>
                        </div>
                    </Box>
                ))}
            </div>
        </div>
    );
};

export default ShopByCategory;
