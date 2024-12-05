import { gql } from '@apollo/client';
import client from "@/app/lib/apollo-client";


const GET_COLLECTIONS = gql`
  query Products($options: ProductListOptions) {
  products(options: $options) {
    items {
      name
      description
      assets {
        source
      }
      variantList {
        items {
          price
        }
      }
      
      reviews {
        items {
          response
          rating
          
        }
      }
    }
  }
}
`;


export default async function fetchProductDetails(filterName) {
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



