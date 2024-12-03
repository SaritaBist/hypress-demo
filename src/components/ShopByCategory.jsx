"use client";

import { useEffect, useState } from "react";
import fetchCollections from "@/CollectionData";
import { Grid } from "@mantine/core";


const ShopByCategory = () => {
    const [collections, setCollections] = useState([]);



    useEffect(() => {
        const getData = async () => {
            const data = await fetchCollections();
            if (data) {
                setCollections(data?.collections?.items);
            }
        };

        getData();
    }, []);

    return (
        <div className="max-w-[95vw] mx-auto mt-12 mb-4">
            <div className="text-4xl font-normal">Shop by Category</div>
            <Grid gutter={"lg"} className="mt-10" justify="space-around" align="stretch">
                {collections?.map((collection) => (
                    <Grid.Col span={{ xs:12,sm: 6, md: 4, lg: 3 }} key={collection.name}>
                        <div className="relative top-[15%] left-6 bg-white p  w-28 rounded-3xl uppercase text-center z-10 text-sm">
                            {collection.name}
                        </div>
                        <div className="h-[50vh] w-[60vw] flex justify-between items-center rounded-2xl">
                            <div className="relative group">
                                {
                                    collection.assets.length >= 1 ? (
                                            <img
                                                src={collection.assets[0]?.source}
                                                className="h-[300px] w-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                                alt={`NO Image Found `}
                                            />
                                        )
                                        :
                                        <img
                                            src='alt.png'
                                            className="h-[300px] w-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            alt={`NO Image Found `}
                                        />
                                }
                            </div>
                        </div>
                    </Grid.Col>
                ))}
            </Grid>
        </div>
    );
};

export default ShopByCategory;
