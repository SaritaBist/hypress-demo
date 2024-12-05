import { gql } from '@apollo/client';
import client from "@/app/lib/apollo-client";

const GET_COLLECTIONS = gql`
  query ExampleQuery {
    collections {
      items {
        name
        slug
        assets {
          source
        }
      }
    }
  }
`;

async function fetchCollections() {
    try {
        const { data } = await client.query({
            query: GET_COLLECTIONS,
        });
        return data;
    } catch (error) {
        console.error("Error fetching collections:", error);
        return null;
    }
}

export default fetchCollections;
