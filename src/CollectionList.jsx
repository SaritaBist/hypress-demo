import { gql } from '@apollo/client';
import client from "@/app/lib/apollo-client";


const GET_COLLECTIONS = gql`
  query Query($options: CollectionListOptions) {
  collections(options: $options) {
    items {
      productVariants {
        items {
          product {
            name
            variantList {
              items {
                price
              }
            }
            assets {
              source
            }
          }
        }
      }
    }
  }
}
`;


export default async function fetCollectionLists(filterName) {
    try {

        const { data } = await client.query({
            query: GET_COLLECTIONS,
            variables: {
                options: {
                    filter: {
                        slug: {
                            contains: filterName,
                        },
                    },
                },
            },
        });

        return data;
    } catch (error) {
        console.error("Error fetching collections:", error);
        return null;
    }
}



